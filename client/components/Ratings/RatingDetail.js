import React from "react";
import "semantic-ui-css/semantic.min.css";

import { Grid, Progress } from "semantic-ui-react";

const RatingDetail = ({ ratings }) => {
  return (
    <Grid>
      {ratings.map((rating) => (
        <Grid.Column width={8} key={rating.id}>
          {rating.ratingType}
          <Progress value={rating.rating} total="5" progress="value" />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default RatingDetail;
