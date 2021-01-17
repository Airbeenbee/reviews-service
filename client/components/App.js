import React from "react";
import { fakeData } from "../data.js";

import ReviewDetail from "./Reviews/ReviewDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ReviewDetail userReviews={fakeData} />
    </div>
  );
};

export default App;
