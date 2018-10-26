var logger = require('../util/logger');

module.exports = function() {
  return function(err, req, res, next) {
    logger.log(err.message)
    res.status(500);
  };
}