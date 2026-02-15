const express = require("express");
const taskRoutes = require("./routes/task.routes");
const { notFound, errorHandler } = require("./middlewares/error.middleware");

const app = express();
app.use(express.json());

// Health check (production habit)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use("/tasks", taskRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
