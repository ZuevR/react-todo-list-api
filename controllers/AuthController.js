const { User } = require('../models');
const { AppSecurity } = require('../middleware');
const config = require('config');

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
      const token = AppSecurity.generateToken(createUser._id, createUser.name, config.get('tokenLifeTime'));
      res.status(201).send({ token });
    } catch (error) {
      error.status = 409;
      next(error);
    }
  },

  async signIn(req, res, next) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).send({ message: 'User not found' });
      if (!await AppSecurity.validatePassword(password, user.password)) return res.status(403).send({ message: 'Wrong password' });
      return res.status(200).send({ token: AppSecurity.generateToken(user._id, user.name, config.get('tokenLifeTime')) });
    } catch (error) {
      next(error);
    }
  }
};
