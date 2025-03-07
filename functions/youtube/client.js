/**
 * YouTube API Client
 * 
 * A clean, focused module for YouTube API interactions.
 */

const { google } = require('googleapis');
const { OAuth2 } = google.auth;

/**
 * Create an OAuth2 client for YouTube API
 * 
 * @param {Object} config - Firebase config object
 * @returns {OAuth2} - Configured OAuth2 client
 */
function createOAuth2Client(config) {
  const clientId = config.youtube.client_id;
  const clientSecret = config.youtube.client_secret;
  const redirectUrl = config.youtube.redirect_url;
  
  if (!clientId || !clientSecret) {
    throw new Error('Missing YouTube API credentials in config');
  }
  
  // Create an OAuth2 client
  const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);
  
  // Set credentials if refresh token exists
  const refreshToken = config.youtube.refresh_token;
  if (!refreshToken) {
    throw new Error('Missing YouTube refresh token in config');
  }
  
  oauth2Client.setCredentials({
    refresh_token: refreshToken
  });
  
  return oauth2Client;
}

/**
 * Validate YouTube account access
 * 
 * @param {OAuth2} oauth2Client - Configured OAuth2 client
 * @returns {Promise<Object>} - Validation result
 */
async function validateAccess(oauth2Client) {
  try {
    // Refresh token first
    const tokenInfo = await oauth2Client.refreshAccessToken();
    // Log token expiry for debugging token issues
    console.log(`Access token refreshed. Expires: ${new Date(tokenInfo.credentials.expiry_date).toISOString()}`);
    
    // Check YouTube channel access
    const youtube = google.youtube('v3');
    const response = await youtube.channels.list({
      auth: oauth2Client,
      part: 'snippet',
      mine: true
    });
    
    if (response.data.items && response.data.items.length > 0) {
      const channel = response.data.items[0];
      return {
        success: true,
        channelId: channel.id,
        channelTitle: channel.snippet.title,
        tokenExpiry: oauth2Client.credentials.expiry_date ? 
          new Date(oauth2Client.credentials.expiry_date).toISOString() : 'unknown'
      };
    } else {
      console.warn('No YouTube channels found for this account');
      return {
        success: false,
        error: 'No YouTube channels found for this account',
        details: 'The account may not have a YouTube channel created'
      };
    }
  } catch (error) {
    console.error('YouTube access validation failed:', error.message);
    return {
      success: false,
      error: error.message,
      details: error
    };
  }
}

/**
 * Upload a video to YouTube
 * 
 * @param {OAuth2} oauth2Client - Configured OAuth2 client
 * @param {Object} options - Upload options
 * @returns {Promise<Object>} - Upload result
 */
async function uploadVideo(oauth2Client, options) {
  const {
    videoStream,
    title = 'Untitled Video',
    description = '',
    tags = [],
    privacyStatus = 'public'
  } = options;
  
  try {
    // Verify channel access first
    const accessCheck = await validateAccess(oauth2Client);
    if (!accessCheck.success) {
      console.error(`YouTube channel access failed: ${accessCheck.error}`);
      throw new Error(`YouTube channel access failed: ${accessCheck.error}`);
    }
    
    console.log(`Starting YouTube upload to channel: ${accessCheck.channelTitle}`);
    
    // Upload to YouTube
    const youtube = google.youtube('v3');
    const res = await youtube.videos.insert({
      auth: oauth2Client,
      part: 'snippet,status',
      requestBody: {
        snippet: {
          title,
          description,
          tags: [...tags, 'explanations.io', 'education']
        },
        status: {
          privacyStatus
        }
      },
      media: {
        body: videoStream
      }
    });
    
    return {
      success: true,
      videoId: res.data.id,
      youtubeUrl: `https://www.youtube.com/watch?v=${res.data.id}`
    };
  } catch (error) {
    // Check for youtubeSignupRequired error
    if (error.message.includes('Unauthorized') || 
        (error.errors && error.errors.some(e => e.reason === 'youtubeSignupRequired'))) {
      console.error('YouTube account setup required. The account may not have a YouTube channel created.');
      throw new Error('YouTube account setup required. Please create a YouTube channel for this account.');
    }
    
    throw error;
  }
}

/**
 * Check YouTube API status
 * 
 * @param {Object} config - Firebase config object
 * @param {Object} context - Firebase function context
 * @returns {Promise<Object>} - API status result
 */
async function checkApiStatus(config, context) {
  try {
    // Log user info for tracking
    console.log(`YouTube API status check requested by user: ${context?.auth?.uid || 'unauthenticated'}`);
    
    // Get OAuth2 client
    const oauth2Client = createOAuth2Client(config);
    
    // Validate access
    const result = await validateAccess(oauth2Client);
    
    // Log the result summary
    if (result.success) {
      console.log(`YouTube API status check successful. Channel: ${result.channelTitle}`);
    } else {
      console.warn(`YouTube API status check failed: ${result.error}`);
    }
    
    return result;
  } catch (error) {
    console.error('Error checking YouTube API status:', error.message);
    return {
      success: false,
      stage: 'initialization',
      error: error.message,
      details: error.stack
    };
  }
}

module.exports = {
  createOAuth2Client,
  validateAccess,
  uploadVideo,
  checkApiStatus
}; 