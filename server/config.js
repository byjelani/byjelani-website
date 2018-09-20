// this file will define variables for the server to use from the process environment
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 8080,
  PUBLIC_PATH: path.resolve(__dirname, '../client/dist/client'),
  GOOGLE_KEYS: {
    CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
  },
  SESSION_OPTS: {
    secret: process.env.SESSION_SECRET || 'handstitchedbymydealer',
    cookie: {
      maxAge: 86400000 // 24 hours
    }
  },
  STRIPEKEY: process.env.STRIPEKEYTEST || process.env.STRIPEKEYLIVE,
  MAILGUN: {
    domain: process.env.MAILDOMAIN,
    apiKey: process.env.MAILKEY
  },
  ADMIN: {
    admin_password: process.env.ADMIN
  },
  MONGODB: process.env.MONGODB
};