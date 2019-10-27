const connection = require('../database');
const { User } = require('../models');
const { AppSecurity } = require('../middleware');

module.exports = {

  async signUp(req, res, next) {
    const { name, email, password } = req.body;

    try {
      const user = new User({
        name,
        email,
        password: await AppSecurity.generatePasswordHash(password)
      });
      const createUser = await user.save();
      const token = AppSecurity.generateToken(createUser._id);
      const response = {
        name: createUser.name,
        token,
      };
      res.status(201).send(response);
    } catch (error) {
      error.status = 409;
      next(error);
    }
  }

};
