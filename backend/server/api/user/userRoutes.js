var router = require('express').Router();
var controller = require('./userController');
var createRoutes = require('../../util/createRoutes');

createRoutes(controller, router);

module.exports = router;
