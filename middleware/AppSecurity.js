const { sign, verify } = require('jsonwebtoken');
const { hash, compare } = require('bcrypt');

module.exports = {

  async generatePasswordHash(password) {
    return await hash(password, process.env.SALT_LEVEL || 3);
  },

  async validatePassword(password, hash) {
    return await compare(password, hash);
  },

  generateToken(uuid, hours = 24) {
    const exp = Math.floor(Date.now() / 1000 + (3600 * hours));
    return {
      id: sign({ exp, id: uuid }, 'h42Hq9lgCs'),
      expire: exp
    };
  },

  verifyToken(req, res, next) {
    const token = req.headers.token;

    verify(token, 'h42Hq9lgCs', (err, decoded) => {
      if (decoded) {
        req._userId = decoded.id;
        next();
      } else {
        res.status(401).send({ message: 'Authorization failed' });
      }
    });
  }

};
