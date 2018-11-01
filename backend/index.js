// setup config first before anything by requiring it
const config = require('./server/config/config');
const app = require('./server/server');
// logger is a wrapper around console.log that adds color,
const logger = require('./server/util/logger');
// logs objects as json and can be conditionally turned off
// so you don't have to erase all calls to it

app.listen(config.port);
logger.log('listening on http://localhost:' + config.port);


