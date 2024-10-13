const mongoose = require("mongoose");
const competitionFormSchema = mongoose.Schema({
  teamName: {
    type: "string",
    require: [true, "team name is required"],
  },
  teamLeadName: {
    type: "string",
    require: [true, " team lead name is req"],
  },
  teamLeadEmail: {
    type: "string",
  },
  teamLeadNumber: {
    type: "string",
  },
  teamLeadGender: {
    type: "string",
  },
  educationalInstitute: {
    type: "string",
    require: [true, "educational Instutute is req"],
  },
  secondName: {
    type: "string",
  },
  secondEmail: {
    type: "string",
  },
  secondGender: {
    type: "string",
  },
  thirdName: {
    type: "string",
  },
  thirdEmail: {
    type: "string",
  },
  thirdGender: {
    type: "string",
  },
  firstName: {
    type: "string",
  },
  firstEmail: {
    type: "string",
  },
  firstGender: {
    type: "string",
  },
});
const competitionFormModel = mongoose.model(
  "CompetitionForm",
  competitionFormSchema
);
module.exports = competitionFormModel;
