const express = require('express');
const app = express();
const api = require('./api/api');
const err = require('./middleware/err');
const config = require('./config/config');
const auth = require('./auth/routes');


// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url, { useNewUrlParser: true });

if (config.seed) {
  require('./util/seed');
}

// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api/', api);
app.use('/auth', auth);

// set up global error handling
app.use(err());


// export the app for testing
module.exports = app;
