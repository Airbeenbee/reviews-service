import React from "react";
import { fakeData } from "../data.js";

import ReviewDetail from "./Reviews/ReviewDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ReviewDetail
        author={fakeData.author}
        month={fakeData.month}
        year={fakeData.year}
        review={fakeData.review}
        profilePic={fakeData.profilePic}
      />
    </div>
  );
};

export default App;
