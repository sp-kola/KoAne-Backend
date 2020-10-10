const express = require("express");
const reviewsRouter = express.Router();
const Review = require("./reviews_ratings.model");

//get all the reviews and rating
reviewsRouter.get("/", async (req, res) => {
  //   console.log("Get requested");
  //   res.send("Get requested");
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Add a new review/rating

reviewsRouter.post("/", async (req, res) => {
  const reviews = new Review({
    title: req.body.title,
    description: req.body.description,
    rating: req.body.rating,
  });
  try {
    const reviewing = await reviews.save();
    res.json(reviewing);
  } catch (err) {
    res.send("Error");
  }
});

// delete a review
reviewsRouter.delete("/delete/:id", async (req, res) => {
  try {
    const reviewsRemove = await Review.remove({ _id: req.params.id });
    res.json(reviewsRemove);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = reviewsRouter;
