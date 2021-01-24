import React from "react";
import "semantic-ui-css/semantic.min.css";

import { Grid, Image } from "semantic-ui-react";

const ReviewDetail = ({ userReviews }) => {
  return (
    <Grid>
      <Grid.Row>
        {userReviews.map((userReview) => (
          <Grid.Column width={8} key={userReview.id}>
            <div className="comment">
              <a href="/">
                <Image
                  circular
                  size="tiny"
                  verticalAlign="middle"
                  src={userReview.profilePic}
                />
              </a>
              <div className="content">
                <a href="/" className="author">
                  {userReview.author}
                </a>
                <div className="metadata">
                  <span className="date">
                    {userReview.month} {userReview.year}
                  </span>
                </div>
                <div className="text">{userReview.review}</div>
              </div>
            </div>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default ReviewDetail;
