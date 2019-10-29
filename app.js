const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('./database');

const authRouter = require('./routes/auth');
const taskRouter = require('./routes/tasks');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/tasks', taskRouter);

app.use((err, req, res, next) => {
  console.log(q);
  console.log(err);
  res.status(err.status || 500);
  res.send({ message: err.message || 'Something broke' });
});

module.exports = app;
