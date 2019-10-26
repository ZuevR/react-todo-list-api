const { isEmail, isLength } = require('validator');

module.exports = {

  sanitizeUserData(req, res, next) {
    if (req.body.name) req.body.name = req.body.name.trim();
    if (req.body.email) req.body.email = req.body.email.trim().toLowerCase();
    if (req.body.password) req.body.password = req.body.password.trim();
    next();
  },

  validateNewUserData(req, res, next) {
    const { name, email, password } = req.body;

    // required validation
    if (!name) return res.status(400).send({ message: 'The name is required' });
    if (!email) return res.status(400).send({ message: 'The email is required' });
    if (!password) return res.status(400).send({ message: 'The password is required' });


    // correct validation
    if (!isEmail(email)) return res.status(400).send({ message: 'Incorrect email' });

    // length validation
    if (!isLength(password, { min: 6, max: 30 })) {
      return res.status(400).send({ message: 'The password must be at least 6 and no more 30 characters long' });
    }
    next();
  }

};
