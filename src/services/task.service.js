const crypto = require("crypto");

const tasks = [];

function badRequest(message) {
  const e = new Error(message);
  e.status = 400;
  return e;
}

function validateCreatePayload(payload) {
  const { title, completed } = payload ?? {};

  if (!title || typeof title !== "string" || title.trim().length < 2) {
    throw badRequest("title is required and must be a string (min 2 chars).");
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    throw badRequest("completed must be boolean if provided.");
  }
}

function addTask(payload) {
  validateCreatePayload(payload);

  const task = {
    id: crypto.randomUUID(),
    title: payload.title.trim(),
    completed: payload.completed ?? false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(task);
  return task;
}

function getTasks(query) {
  // optional filter: ?completed=true|false
  const { completed } = query ?? {};

  if (completed === undefined) return tasks;

  if (completed !== "true" && completed !== "false") {
    throw badRequest("completed query must be 'true' or 'false'.");
  }

  const boolVal = completed === "true";
  return tasks.filter((t) => t.completed === boolVal);
}

module.exports = { addTask, getTasks };
