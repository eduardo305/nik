'use strict'

var BaseController = require('./baseController');
var userDAO = require('../persistence/userDAO');

class UserController extends BaseController {

  findAll() {
    return (request, response) => {
      userDAO.findAll()
        .then(this._success(response))
        .catch(this._error(response));
    };
  }
}

module.exports = new UserController();
