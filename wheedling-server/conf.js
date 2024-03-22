
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '.env')}); // explicitly attach .env file. 

module.exports = {
    PORT: process.env.PORT,
    DB: {
      PGHOST: process.env.PGHOST || 'localhost',
      PGUSER: process.env.PGUSER,
      PGDATABASE: process.env.PGDATABASE,
      PGPASSWORD: process.env.PGPASSWORD,
      PGPORT: process.env.PGPORT
    },
    GOOGLE: {
      CONF_GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
      CONF_GOOGLE_CLIENT_KEY: process.env.GOOGLE_CLIENT_KEY,
      CONF_GOOGLE_CLIENT_SECRET: process.env.GOOGLE_SECRET
    },
    FACEBOOK: {
      CONF_FACEBOOK_CALLBACK_URL: process.env.CALLBACK_URL,
      CONF_FACEBOOK_CLIENT_KEY: process.env.CLIENT_KEY,
      CONF_FACEBOOK_SECRET: process.env.SECRET
    },
    SESSION_SECRET: process.env.SESSION_SECRET
  };

//   console.table(module.exports);
// console.table(process.env.PGUSER);