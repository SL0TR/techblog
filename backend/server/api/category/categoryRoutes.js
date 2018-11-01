const router = require('express').Router();
const controller = require('./categoryController');
const createRoutes = require('../../util/createRoutes');

createRoutes(controller, router);

module.exports = router;
