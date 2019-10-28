const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers');
const { AppValidator, AppSecurity } = require('../middleware');

router.post(
  '/sign-up',
  AppValidator.sanitizeUserData,
  AppValidator.validateNewUserData,
  AuthController.signUp
);

router.get(
  '/check-identity',
  AppSecurity.verifyToken,
  AuthController.getIdentity,
);

module.exports = router;
