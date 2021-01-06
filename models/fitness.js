const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema(
  {
    ContinueWorkout: {
      type: button,
    },
    NewWorkout: {
      type: button,
    },
  }
);

const Exercise = mongoose.model("Exercise", fitnessSchema);

module.exports = Exercise;
