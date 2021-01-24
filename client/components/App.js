import React from "react";
import { fakeData, fakeRatings } from "../data.js";
import { labels } from "../labels";

import ReviewDetail from "./Reviews/ReviewDetail";
import RatingDetail from "./Ratings/RatingDetail";
import Button from "./Buttons/Button";

const App = () => {
  return (
    <div className="ui container comments">
      <RatingDetail ratings={fakeRatings} />
      <Button labels={labels} />
      <ReviewDetail userReviews={fakeData} />
    </div>
  );
};

export default App;
