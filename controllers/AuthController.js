const connection = require('../database');
const { User } = require('../models');

module.exports = {

  async signUp(req, res, next) {
    const user = new User({
      name: 'Roman',
      email: 'ZuevRG@yandex.ru',
      password: 'asdfghj'
    });

    user.save().then(result => {
      console.log(result);
    });
  }

};
