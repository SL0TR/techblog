const router = require('express').Router();
const controller = require('./userController');
const createRoutes = require('../../util/createRoutes');

createRoutes(controller, router);

module.exports = router;
