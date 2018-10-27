var logger = require('../util/logger');

module.exports = function() {
  return function(err, req, res, next) {

    // if error thrown from jwt validation check
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Invalid token');
      return;
    }
    logger.error(err.stack);
    res.status(500).send('Oops');
  };
}