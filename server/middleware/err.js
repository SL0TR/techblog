var logger = require('../util/logger');

module.exports = function() {
  return function(err, req, res, next) {
    logger.log('This is the error', err.message);
    res.status(500);
  };
}