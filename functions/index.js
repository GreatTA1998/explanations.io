const functions = require("firebase-functions");
const firebase_tools = require("firebase-tools");
var postmark = require("postmark");
require("firebase-functions/logger/compat");

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