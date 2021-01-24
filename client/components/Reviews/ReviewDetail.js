import React from "react";
import "semantic-ui-css/semantic.min.css";

import { Grid, Image } from "semantic-ui-react";

const ReviewDetail = ({ userReviews }) => {
  return (
    <Grid padded>
      <Grid.Row>
        {userReviews.map((userReview) => (
          <Grid.Column width={8} key={userReview.id}>
            <div className="ui comment content">
              <Grid padded>
                <Grid.Column width={3}>
                  <a href="/">
                    <Image
                      circular
                      size="tiny"
                      verticalAlign="middle"
                      src={userReview.profilePic}
                    />
                  </a>
                </Grid.Column>
                <Grid.Column width={4}>
                  <span>
                    <a href="/" className="header author">
                      {userReview.author}
                    </a>
                  </span>
                  <span className="date metadata">
                    {userReview.month} {userReview.year}
                  </span>
                </Grid.Column>
                <Grid.Column width={9}></Grid.Column>
              </Grid>
              <div className="text">{userReview.review}</div>
            </div>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default ReviewDetail;
