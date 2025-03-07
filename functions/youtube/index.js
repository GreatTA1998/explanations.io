/**
 * YouTube API Module
 * 
 * This module exports all YouTube-related functionality.
 */

const client = require('./client');

module.exports = {
  // Client functions
  createOAuth2Client: client.createOAuth2Client,
  validateAccess: client.validateAccess,
  uploadVideo: client.uploadVideo,
  checkApiStatus: client.checkApiStatus,
  
  // For convenience, export the entire client
  client
}; 