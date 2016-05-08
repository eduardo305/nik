'use strict'

class BaseController {

  _success(response) {
    return (data) => {
      response.json({ success: true, data: data });
    }
  }

  _error(response) {
    return (err) => {
      response.status(500).json({ success: false, error: err });
    }
  }
}

module.exports = BaseController;
