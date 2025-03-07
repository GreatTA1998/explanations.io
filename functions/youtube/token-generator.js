#!/usr/bin/env node

/**
 * YouTube Token Generator
 * 
 * A simple script to generate YouTube API tokens.
 */

const { google } = require('googleapis');
const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { OAuth2 } = google.auth;

// Configuration
const CONFIG_DIR = path.join(__dirname, '../../config');
const CLIENT_SECRET_PATH = path.join(CONFIG_DIR, 'client_secret.json');
const CERT_PATH = path.join(__dirname, 'server.cert');
const KEY_PATH = path.join(__dirname, 'server.key');
const PORT = 5173;

/**
 * Main function
 */
async function main() {
  console.log('YouTube Token Generator');
  console.log('======================\n');
  
  // Check for client_secret.json
  if (!fs.existsSync(CLIENT_SECRET_PATH)) {
    console.error(`Error: client_secret.json not found at ${CLIENT_SECRET_PATH}`);
    console.log(`Please download it from Google Cloud Console and place it in ${CONFIG_DIR}`);
    process.exit(1);
  }
  
  // Read client_secret.json
  try {
    const clientSecretContent = JSON.parse(fs.readFileSync(CLIENT_SECRET_PATH));
    const credentials = clientSecretContent.installed || clientSecretContent.web;
    
    if (!credentials) {
      console.error('Error: Invalid client_secret.json format');
      process.exit(1);
    }
    
    const clientId = credentials.client_id;
    const clientSecret = credentials.client_secret;
    const redirectUrl = credentials.redirect_uris[0] || `https://localhost:${PORT}/callback`;
    
    console.log('Starting token generation server...');
    console.log('Client ID:', clientId);
    console.log('Redirect URL:', redirectUrl);
    
    // Start the token server
    await startTokenServer(clientId, clientSecret, redirectUrl);
  } catch (error) {
    console.error('Error reading client_secret.json:', error.message);
    process.exit(1);
  }
}

/**
 * Start a local server to handle OAuth2 flow
 */
async function startTokenServer(clientId, clientSecret, redirectUrl) {
  return new Promise((resolve, reject) => {
    try {
      const app = express();
      const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);
      
      // Generate auth URL
      const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: [
          'https://www.googleapis.com/auth/youtube',
          'https://www.googleapis.com/auth/youtube.upload'
        ],
        prompt: 'consent' // Force to get refresh token
      });
      
      // Setup routes
      app.get('/', (req, res) => {
        res.send(`
          <h1>YouTube Token Generator</h1>
          <p>Click the button below to authorize this application to upload videos to your YouTube channel.</p>
          <a href="${authUrl}" style="display: inline-block; background-color: #FF0000; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Authorize with YouTube</a>
        `);
      });
      
      app.get('/callback', async (req, res) => {
        const { code } = req.query;
        
        if (!code) {
          res.send('Error: No authorization code received');
          return;
        }
        
        try {
          // Exchange code for tokens
          const { tokens } = await oauth2Client.getToken(code);
          
          // Display the tokens and Firebase config commands
          res.send(`
            <h1>Authorization Successful!</h1>
            <p>Your refresh token has been generated successfully.</p>
            
            <h2>Firebase Configuration</h2>
            <p>Run the following commands to configure your Firebase project:</p>
            
            <pre style="background-color: #f0f0f0; padding: 10px; border-radius: 5px; overflow-x: auto;">firebase functions:config:set youtube.client_id="${clientId}" youtube.client_secret="${clientSecret}" youtube.redirect_url="${redirectUrl}" youtube.refresh_token="${tokens.refresh_token}"</pre>
            
            <h2>Token Details</h2>
            <p><strong>Refresh Token:</strong> ${tokens.refresh_token}</p>
            <p><strong>Access Token:</strong> ${tokens.access_token}</p>
            <p><strong>Expiry Date:</strong> ${new Date(tokens.expiry_date).toLocaleString()}</p>
            
            <p style="margin-top: 20px;">You can now close this window and stop the server.</p>
          `);
          
          // Resolve the promise with the tokens
          resolve(tokens);
          
          // Close the server after a delay
          setTimeout(() => {
            server.close(() => {
              console.log('Token server closed');
            });
          }, 60000); // Keep server running for 1 minute
        } catch (error) {
          console.error('Error getting tokens:', error);
          res.send(`
            <h1>Error</h1>
            <p>Failed to get tokens: ${error.message}</p>
          `);
          reject(error);
        }
      });
      
      // Check for HTTPS certificates
      let httpsOptions;
      if (fs.existsSync(CERT_PATH) && fs.existsSync(KEY_PATH)) {
        httpsOptions = {
          cert: fs.readFileSync(CERT_PATH),
          key: fs.readFileSync(KEY_PATH)
        };
      } else {
        console.log('HTTPS certificates not found. Creating self-signed certificates...');
        console.log('You may need to accept security warnings in your browser.');
        
        // For simplicity, we'll use HTTP in this case
        const http = require('http');
        const server = http.createServer(app);
        
        server.listen(PORT, () => {
          console.log(`\n🔓 Token server running at http://localhost:${PORT}`);
          console.log('Open this URL in your browser to start the authorization process:');
          console.log(`http://localhost:${PORT}\n`);
        });
        
        return;
      }
      
      // Start HTTPS server
      const server = https.createServer(httpsOptions, app);
      
      server.listen(PORT, () => {
        console.log(`\n🔐 Token server running at https://localhost:${PORT}`);
        console.log('Open this URL in your browser to start the authorization process:');
        console.log(`https://localhost:${PORT}\n`);
      });
    } catch (error) {
      console.error('Error starting token server:', error);
      reject(error);
    }
  });
}

// Run the main function
main().catch(console.error); 