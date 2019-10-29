const { sign, verify } = require('jsonwebtoken');
const { hash, compare } = require('bcrypt');
const config = require('config');

module.exports = {

  async generatePasswordHash(password) {
    return await hash(password, process.env.SALT_LEVEL || 3);
  },

  async validatePassword(password, hash) {
    return await compare(password, hash);
  },

  generateToken(uuid, name, hours = 24) {
    const exp = Math.floor(Date.now() / 1000 + (3600 * hours));
    return sign({ exp, id: uuid, name }, config.get('tokenSecretKey'));
  },

  verifyToken(req, res, next) {
    const token = req.headers.token;

    verify(token, config.get('tokenSecretKey'), (err, decoded) => {
      if (decoded) {
        req._userId = decoded.id;
        next();
      } else {
        res.status(401).send({ message: 'Authorization failed' });
      }
    });
  }

};
