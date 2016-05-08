'use strict'

class userDAO {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve({'name': 'Eduardo'});
    });
  }
}

module.exports = new userDAO();
