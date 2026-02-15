const express = require("express");
const { createTask, listTasks } = require("../controllers/task.controller");

const router = express.Router();

router.post("/", createTask);
router.get("/", listTasks);

module.exports = router;
