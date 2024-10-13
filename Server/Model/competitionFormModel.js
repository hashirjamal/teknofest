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
    require: [true, " team lead number is req"],
  },
  teamLeadGender: {
    type: "string",
    require: [true, " team lead gender is req"],
  },
  educationalInstitute: {
    type: "string",
    require: [true, "educational Instutute is req"],
  },
  secondName: {
    type: "string",
    require: [true, " team lead name is req"],
  },
  secondEmail: {
    type: "string",
  },
  secondGender: {
    type: "string",
    require: [true, " team lead gender is req"],
  },
  thirdName: {
    type: "string",
    require: [true, " team lead name is req"],
  },
  thirdEmail: {
    type: "string",
  },
  thirdGender: {
    type: "string",
    require: [true, " team lead gender is req"],
  },
  firstName: {
    type: "string",
    require: [true, " team lead name is req"],
  },
  firstEmail: {
    type: "string",
  },
  firstGender: {
    type: "string",
    require: [true, " team lead gender is req"],
  },
});
const competitionFormModel = mongoose.model(
  "CompetitionForm",
  competitionFormSchema
);
module.exports = competitionFormModel;
