import React from "react";
import "semantic-ui-css/semantic.min.css";

import { Image } from "semantic-ui-react";

const ReviewDetail = ({ author, month, year, review, profilePic }) => {
  return (
    <div className="comment">
      <a href="/">
        <Image circular src={profilePic} size="tiny" verticalAlign="middle" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">
            {month} {year}
          </span>
        </div>
        <div className="text">{review}</div>
      </div>
    </div>
  );
};

export default ReviewDetail;
