const competitionFormController = require("../Controller/competitionFormController");
const express = require("express");
const competitionFormRouter = express.Router();
competitionFormRouter
  .route("/create-form")
  .post(competitionFormController.competitionForm);

module.exports = competitionFormRouter;
