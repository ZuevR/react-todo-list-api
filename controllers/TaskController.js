const { Task } = require('../models');

module.exports = {

  async addTask(req, res, next) {
    console.log(1);
    const task = await Task.create({
      user_id: req._userId,
      description: req.body.description,
      status: req.body.status
    });
    res.status(201).send({ ...task, id: task._id })
  },

  test(req, res, next) {
    console.log(req.headers);
    console.log(1);
    res.send({ sda: 1 })
  }
};
