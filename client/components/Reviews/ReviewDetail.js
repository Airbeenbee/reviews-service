import React from "react";
import "semantic-ui-css/semantic.min.css";

import { Grid, Image, Segment } from "semantic-ui-react";

const ReviewDetail = ({ author, month, year, review, profilePic }) => {
  return (
    // <div>
    // <a href="/">
    //   <Image circular src={profilePic} size="tiny" verticalAlign="middle" />
    // </a>
    // <span>{author}</span>{" "}
    // <span className="metadata">
    //   {month} {year}
    // </span>
    // <div className="text">{review}</div>
    // </div>

    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <div className="comment">
            <a href="/">
              <Image
                circular
                src={profilePic}
                size="tiny"
                verticalAlign="middle"
              />
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
        </Grid.Column>
        <Grid.Column width={8}>PLACEHOLDER TEXT</Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <div className="comment">
            <a href="/">
              <Image
                circular
                src={profilePic}
                size="tiny"
                verticalAlign="middle"
              />
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
        </Grid.Column>
        <Grid.Column width={8}>PLACEHOLDER TEXT</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ReviewDetail;

/*
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
*/
