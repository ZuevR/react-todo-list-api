const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers');
const { AppValidator } = require('../middleware');

router.post(
  '/sign-up',
  AppValidator.sanitizeUserData,
  AppValidator.validateNewUserData,
  AuthController.signUp
);

router.post(
  '/sign-in',
  AppValidator.sanitizeUserData,
  AppValidator.validateUserData,
  AuthController.signIn
);

module.exports = router;
