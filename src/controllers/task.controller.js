const { addTask, getTasks } = require("../services/task.service");

const createTask = (req, res, next) => {
  try {
    const task = addTask(req.body);
    return res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

const listTasks = (req, res, next) => {
  try {
    const tasks = getTasks(req.query);
    return res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
};

module.exports = { createTask, listTasks };
