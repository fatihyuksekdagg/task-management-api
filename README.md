# Task Management API (Mini Case)

A simple in-memory Task Management API built with Node.js and Express.

---

## Tech Stack
- Node.js
- Express
- In-memory storage

---

## Endpoints

### POST /tasks
Creates a new task.

Body example:

{
  "title": "Example task",
  "completed": false
}

---

### GET /tasks
Returns all tasks.

Optional filter:

GET /tasks?completed=true  
GET /tasks?completed=false  

---

## Task Fields
- id (uuid)
- title (string)
- completed (boolean, default: false)
- createdAt (ISO date string)

---

## Approach

The project is structured using:
- routes
- controllers
- services
- middlewares

Business logic is separated into a service layer.  
Data is stored in-memory as requested in the case.

---

## Decisions

- `completed` defaults to false if not provided.
- `createdAt` is returned as ISO string.
- Added optional filtering by completed status.

---

## AI Usage

- Used AI assistance to validate error handling structure.
- Used AI to structure README clearly.

---

## Run the Project

Install dependencies:

npm install

Run in development mode:

npm run dev

---

## Example PowerShell Requests

Create a task:

Invoke-RestMethod -Method Post -Uri "http://localhost:3000/tasks" `
  -ContentType "application/json" `
  -Body '{"title":"Example","completed":false}'

List tasks:

Invoke-RestMethod -Method Get -Uri "http://localhost:3000/tasks"

---

## Project Structure

src/
  controllers/
  routes/
  services/
  middlewares/
  app.js

test/
  tasks.test.js

---

## Notes

This implementation focuses on:
- Clean separation of concerns
- Minimal but structured architecture
- Readable and maintainable code

No database was used as requested in the case.

---

## Run with Docker

Build image:

docker build -t task-api .

Run container:

docker run -p 3000:3000 task-api
