var express = require('express');
var app = express();
var api = require('./api/api');
var err = require('./middleware/err');
// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api/', api);
// set up global error handling

// error handling for all middlewares
app.use(err());

// export the app for testing
module.exports = app;
