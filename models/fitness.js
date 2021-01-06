const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema(
  {
    Continue Workout: {
      type: button,
    },
    New Workout: {
      type: button,
      required: 
    },
  }
);

const Exercise = mongoose.model("Exercise", fitnessSchema);

module.exports = Exercise;
