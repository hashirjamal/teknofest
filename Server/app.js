const express = require("express");
const CompetitionRouter = require("./Router/CompetitionsRoute");
const competitionFormRoute = require("./Router/competitionFormRoute");
const authRoute = require("./Router/authRoute");
const app = express();
const cors = require("cors");

app.use(cors({
  origin: "*",
  credentials: true
}));


app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/competitionForm", competitionFormRoute);
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
