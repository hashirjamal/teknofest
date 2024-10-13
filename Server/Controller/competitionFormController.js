const CompetitionForm = require("../Model/competitionFormModel");
const CustomErrors = require("../Utils/CustomErrors");
exports.competitionForm = async (req, res, next) => {
  try {
    const formData = await CompetitionForm.create(req.body);
    res.status(200).json({
      status: "success",
      enteredData: formData,
    });
  } catch (err) {
    return next(new CustomErrors(err.message, 403));
  }
};
