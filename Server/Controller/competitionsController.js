const CustomErrors = require("../Utils/CustomErrors");
const Competition = require("./../Model/competitionModel");

exports.getAllCompetitionsDetails = async (req, res, next) => {
  console.log(req.query);
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 3;
  const skip = (page - 1) * limit;

  try {
    const competitionData = await Competition.find().skip(skip).limit(limit);
    res.status(200).json({
      status: "success",
      data: {
        competitionData,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
exports.getCompetitionDetails = async (req, res, next) => {
  try {
    const competitionId = req.params.id;
    if (!competitionId) {
      return next(new CustomErrors(''))
    }
    const competitionData = await Competition.findById(competitionId);
    res.status(200).json({
      status: "success",
      data: {
        competitionData,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
