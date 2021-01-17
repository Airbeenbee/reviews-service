const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.get("/api/test", (req, res) => {
  res.json("/api/test route Hello World!");
});

// get all reviews
app.get("/api/reviews", (req, res) => {
  Review.find()
    .then((Reviews) => res.status(200).send(Reviews))
    .catch((err) => res.status(400).send(err));
});

// post a review
app.post("/api/reviews", (req, res) => {
  const body = req.body;
  const review = new Review({
    review: body.text,
  });
  // reviews.save or review.save?
  review
    .save(review)
    // then send back response
    .then((savedReview) => res.status(201).send(savedReview))
    .catch((err) => res.status(400).send(err));
});

const mongoose = require("mongoose");
const Review = require("../db/Models/ReviewsModel").Review;
// db URI where db is running
const DB_URI = "mongodb://mongo:27017/ReviewApp";

mongoose.connect(DB_URI).then(() => {
  console.log("Listening on port: ", +PORT);
  app.listen(PORT);
});
