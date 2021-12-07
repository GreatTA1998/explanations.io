const functions = require("firebase-functions");

const accountSid = 'AC0224581db29cfc0db42348e72c63a288'
const authToken = '1f749beb841c7f0ed6520b1d62565a22'
const client = require('twilio')(accountSid, authToken); 

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