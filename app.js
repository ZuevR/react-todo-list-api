const express = require('express');
const logger = require('morgan');

const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/auth', authRouter);

module.exports = app;
