const mongoose = require("mongoose");

const BmiRangeSchema = new mongoose.Schema({
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
});

const FoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    calories: {
      type: String,
    },
    description: {
      type: String,
    },
    ingredients: {
      type: [String],
    },
    mealType: {
      type: String,
    },
    allergies: {
      type: [String],
    },
    healthRisks: {
      type: [String],
    },
    bmiRange: BmiRangeSchema,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("food", FoodSchema);
