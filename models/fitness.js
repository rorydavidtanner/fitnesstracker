const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema(
  {
    Resistance: {
      type: Array,
    },
    Cardio: {
      type: Array,
    },
  }
);

const Exercise = mongoose.model("Exercise", fitnessSchema);

module.exports = Exercise;
