const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config/config');
const checkToken = expressJwt({ secret: config.secrets.jwt });
const User = require('../api/user/userModel');

exports.decodeToken = function() {
  return function(req, res, next) {

    if (req.query && req.query.hasOwnProperty('access_token')) {
      req.headers.authorization = 'Bearer ' + req.query.access_token;
    }
    checkToken(req, res, next);
  };
};

exports.getFreshUser = function() {
  return function(req, res, next) {
    User.findById(req.user._id)
      .then(function(user) {
        if (!user) {
          // if no user is found it was not
          // it was a valid JWT but didn't decode
          res.status(401).send('Unauthorized');
        } else {
          // update req.user with fresh user from
          // stale token data
          req.user = user;
          next();
        }
      }, function(err) {
        next(err);
      });
  }
};

exports.verifyUser = function() {
  return function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    // if no username or password then send
    if (!username || !password) {
      res.status(400).send('You need a username and password');
    } 

    // look user up in the DB so we can check
    // IF the passwords math for the username
    User.findOne({username: username})
      .then(function(user){
        if (!user) {
          res.status(401).send('No user with the given username');
        } else {
          // checking the passwords here
          if (!user.authenticate(password)) {
            res.status(401).send('Wrong Password');
          } else {
            // if everything is good
            // then attach to req.user
            // and call next to controller
            // can sign a token from the req.user._id
            req.user = user;
            next();
          }
        }
      }, function(err) {
        next(err);
      })
  };
};

// util method to sign tokens on signup
exports.signToken = function(id) {
  return jwt.sign(
    {_id: id},
    config.secrets.jwt,
    {expiresIn: config.expireTime}
  );
};