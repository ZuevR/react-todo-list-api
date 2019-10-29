const express = require('express');
const router = express.Router();
const { TaskController } = require('../controllers');
const { AppSecurity } = require('../middleware');

router.post(
  '/add-task',
  AppSecurity.verifyToken,
  TaskController.addTask
);

router.get(
  '/test',
  TaskController.test
);

module.exports = router;
