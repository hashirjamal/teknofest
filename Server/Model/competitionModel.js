const mongoose = require("mongoose");
const competitionSchema = mongoose.Schema({
  title: {
    type: String,
    require: [true, "Competitions Title is a required field"],
  },
  category: {
    type: String,
    required: [true, "Category is a requied field"],
  },
  description: {
    type: String,
    required: [true, "Competitions description is required field"],
  },
  timings: {
    type: String,
  },
  imageURl: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1721332150382-d4114ee27eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
  },
  price: {
    type: Number,
    require: [true, "Price is a required field"],
  },
});
const competitionModel = mongoose.model("Competition", competitionSchema);
module.exports = competitionModel;
