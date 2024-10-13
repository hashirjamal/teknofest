const express = require("express");
const CompetitionRouter = require("./Router/CompetitionsRoute");
const app = express();

app.use(express.json());
app.use("/api/competitions", CompetitionRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server error";
  res.status(statusCode).json({
    status: "failed",
    statusCode,
    message,
  });
});
module.exports = app;
