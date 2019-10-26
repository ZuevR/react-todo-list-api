const connection = require('../database');

module.exports = {

  async signUp(req, res, next) {
    console.log(await connection);
  }

};
