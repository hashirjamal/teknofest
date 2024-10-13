const express = require("express");
const CompetitionRouter = express.Router();
const competitionsController = require("../Controller/competitionsController");
CompetitionRouter.route("/").get(
  competitionsController.getAllCompetitionsDetails
);

module.exports = CompetitionRouter;
