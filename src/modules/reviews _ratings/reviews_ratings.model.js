const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  rating: {
    type: String,
    required: true,
    default: false,
  },
});

const Review = mongoose.model("review", reviewSchema);
module.exports = Review;
