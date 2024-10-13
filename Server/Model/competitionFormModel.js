const mongoose = require("mongoose");
const competitionFormSchema = mongoose.Schema({
  teamName: {
    type: String,
    require: [true, "team name is required"],
  },
  teamLeadName: {
    type: String,
    require: [true, " team lead name is req"],
  },
  teamLeadEmail: {
    type: String,
  },
  teamLeadNumber: {
    type: String,
  },
  teamLeadGender: {
    type: String,
  },
  educationalInstitute: {
    type: "string",
    require: [true, "educational Instutute is req"],
  },
  secondName: {
    type: String,
  },
  secondEmail: {
    type: String,
  },
  secondGender: {
    type: String,
  },
  competition: {
    type: String,
  },
  thirdName: {
    type: String,
  },
  thirdEmail: {
    type: String,
  },
  thirdGender: {
    type: String,
  },
  firstName: {
    type: String,
  },
  firstEmail: {
    type: String,
  },
  firstGender: {
    type: String,
  },
});
const competitionFormModel = mongoose.model(
  "CompetitionForm",
  competitionFormSchema
);
module.exports = competitionFormModel;
