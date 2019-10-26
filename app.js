const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/v1/auth', authRouter);

module.exports = app;
