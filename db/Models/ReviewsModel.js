const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

const ReviewsSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  author: { type: String, default: "" },
  month: { type: String, default: "" },
  year: { type: String, default: "" },
  review: { type: String, default: "" },
  profilePic: { type: String, default: "" },
});

const Review = mongoose.model("Review", ReviewsSchema);

// module.exports = db;
module.exports = { Review };
