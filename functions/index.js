const functions = require("firebase-functions");

// const accountSid = import.meta.env.VITE_TWILIO_ACCOUNT_SID
// const authToken = import.meta.env.VITE_TWILIO_AUTH_TOKEN

const accountSid = functions.config().twilio.accountsid
const authToken = functions.config().twilio.authtoken

const client = require('twilio')(accountSid, authToken)

exports.sendTextMessage = functions.https.onCall((data, context) => {
  const { content, toWho } = data;
  console.log('content =', content)
  console.log("toWho =", toWho)
  client.messages 
    .create({        
        body: content,
        messagingServiceSid: 'MGe595615f66055b9ee88ac19a9d0ddce5',
        to: toWho
      }) 
    .then(message => console.log('sent to =', toWho)) 
    .done();
});