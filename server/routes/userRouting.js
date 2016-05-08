'use strict'

var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.route('/').get(userController.findAll());
// router.route('/').get(function(request, response) {
//   response.json({'name': 'eduardo'});
// });

module.exports = router;
