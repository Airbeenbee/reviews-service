const mongoose = require("mongoose");
// const onlineDb = require("../../config/keys");

mongoose.connect(onlineDb.mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MongoDB is connected to the Reviews database");
});

const reviewsSchema = {
  id: { type: Number, unique: true },
  author: String,
  month: String,
  year: String,
  review: String,
  profilePic: {
    min: Number,
    max: Number,
  },
};

const ReviewsDB = mongoose.model("Reviews", reviewsSchema);

module.exports = db;
module.exports = ReviewsDB;
