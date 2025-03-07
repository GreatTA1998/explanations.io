const functions = require("firebase-functions");
const firebase_tools = require("firebase-tools");
var postmark = require("postmark");
require("firebase-functions/logger/compat");
const { google } = require('googleapis');
const axios = require('axios');
const stream = require('stream');

// Import YouTube module
const youtube = require('./youtube');

// Function to get a new OAuth2 client
function getOAuth2Client() {
  console.log('Getting OAuth2 client...');
  try {
    return youtube.createOAuth2Client(functions.config());
  } catch (error) {
    console.error('Error creating YouTube OAuth client:', error.message);
    throw error;
  }
}

exports.sendEmail = functions.https.onCall(async (data, context) => {
  // I configured Firebase environment variables:
  //   `firebase functions:config:set postmark.apikey="YOUR_POSTMARK_API_KEY"`
  var client = new postmark.ServerClient(functions.config().postmark.apikey);

  const { toWho, subject, content } = data
  console.log('functions sending email to:', toWho)
 
  const result = await client.sendEmail({
    "From": "elton@explanations.io",
    "To": toWho,
    "Subject": subject,
    "HtmlBody": content, // "<strong>Hello</strong> dear Postmark user."
    "TextBody": content,
    "MessageStream": "outbound"
  })

  console.log('finished sending email')

  return { success: true, result }
})

exports.deleteRecursively = functions
  .runWith({ 
    timeoutSeconds: 540, memory: "2GB"
  })
  .https.onCall(async (data, context) => {
    // Only allow admin users to execute this function.
    // if (!(context.auth && context.auth.token && context.auth.token.admin)) {
    //   throw new functions.https.HttpsError(
    //     'permission-denied',
    //     'Must be an administrative user to initiate delete.'
    //   );
    // }
    const path = data.path;
    console.log(`Requested to delete path ${path}`);
    // return "success";
    // recursiveDelete({ "path": "/classes/mDbUrvjy4pe8Q5s5wyoD/blackboards/M1v0XzFtwP1RLKxsMR4K/strokes" })

    // Run a recursive delete on the given document or collection path.
    // The 'token' must be set in the functions config, and can be generated
    // at the command line by running 'firebase login:ci'.
    return firebase_tools.firestore.delete(path, {
      project: process.env.GCLOUD_PROJECT,
      recursive: true,
      yes: true,
      force: true
      // token: functions.config().fb.token
    });
    // console.log("await complete - successfully deleted, returning now");
    // return {
    //   path: path 
    // };
});

exports.uploadToYoutube = functions
  .runWith({ 
    timeoutSeconds: 300,
    memory: "1GB"
  })
  .https.onCall(async (data, context) => {
    // Keep this log but simplify it to avoid logging potentially sensitive data
    console.log(`uploadToYoutube called by user: ${context.auth?.uid || 'unauthenticated'}, video title: "${data.title || 'untitled'}"`);
    
    // Keep app verification warning as it's important for security
    if (context.app === undefined) {
      console.warn('App verification is MISSING. This may cause issues in production.');
    }
    
    try {
      const { videoUrl, title, description, tags = [], creatorName = 'Anonymous' } = data;
      
      if (!videoUrl) {
        console.error('Missing video URL in request');
        throw new functions.https.HttpsError(
          'invalid-argument',
          'Video URL is required'
        );
      }
      
      // Keep this log but don't expose the full URL
      console.log('Downloading video...');
      
      // Download the video file
      const response = await axios({
        method: 'GET',
        url: videoUrl,
        responseType: 'arraybuffer'
      }).catch(err => {
        console.error('Error downloading video:', err.message);
        throw new functions.https.HttpsError(
          'failed-precondition',
          `Failed to download video: ${err.message}`
        );
      });
      
      // Keep this log as it's useful for debugging performance issues
      console.log(`Video downloaded successfully. Size: ${response.data.length} bytes`);
      
      // Create a readable stream from the buffer
      const videoBuffer = Buffer.from(response.data, 'binary');
      const videoStream = new stream.PassThrough();
      videoStream.end(videoBuffer);
      
      // This log isn't necessary since it's just a step in the process
      const oauth2Client = getOAuth2Client();
      
      // Format title and description to include creator info
      const formattedTitle = title || 'Explanations.io Video';
      const formattedDescription = `${description || 'Video created on Explanations.io'}\n\nCreated by: ${creatorName}`;
      
      // Keep this log as it's useful for tracking uploads
      console.log(`Uploading to YouTube with title: "${formattedTitle}"`);
      
      try {
        // Use the YouTube module to upload the video
        const result = await youtube.uploadVideo(oauth2Client, {
          videoStream,
          title: formattedTitle,
          description: formattedDescription,
          tags: [...tags, 'explanations.io', 'education'],
          privacyStatus: 'public'
        });
        
        // Keep this log as it confirms successful upload
        console.log(`YouTube upload successful! Video ID: ${result.videoId}, URL: ${result.youtubeUrl}`);
        return result;
      } catch (uploadError) {
        // Keep this error log as it's critical for debugging
        console.error('YouTube API upload error:', uploadError.message);
        
        // Check for youtubeSignupRequired error
        if (uploadError.message.includes('YouTube account setup required')) {
          throw new functions.https.HttpsError(
            'failed-precondition',
            'The YouTube account needs to be set up. Please create a YouTube channel for this account.',
            'youtubeSignupRequired'
          );
        }
        
        throw new functions.https.HttpsError(
          'aborted',
          'Failed to upload video to YouTube API',
          uploadError.message
        );
      }
    } catch (error) {
      // Keep this error log as it's critical for debugging
      console.error('Error in uploadToYoutube function:', error.message);
      console.error('Stack trace:', error.stack);
      
      // Check if this is a known error type
      if (error.code === 'failed-precondition' && error.details === 'youtubeSignupRequired') {
        // We already formatted this error properly, just pass it through
        throw error;
      }
      
      throw new functions.https.HttpsError(
        'unknown',
        'Failed to upload video to YouTube',
        error.message
      );
    }
  });

// Add a diagnostic function to check YouTube API status
exports.checkYouTubeApiStatus = functions.https.onCall(async (data, context) => {
  return youtube.checkApiStatus(functions.config(), context);
});