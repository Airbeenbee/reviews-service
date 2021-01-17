import React from "react";
import "semantic-ui-css/semantic.min.css";

import { Grid, Image, Segment } from "semantic-ui-react";

const ReviewDetail = ({ userReviews }) => {
  return (
    <Grid>
      {userReviews.map((userReview) => (
        <Grid.Row key={userReview.id}>
          <Grid.Column width={8}>
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
        </Grid.Row>
      ))}
    </Grid>

    // <Grid>
    //   <Grid.Row>
    //     <Grid.Column width={8}>
    //       <div className="comment">
    //         <a href="/">
    //           <Image
    //             circular
    //             src={profilePic}
    //             size="tiny"
    //             verticalAlign="middle"
    //           />
    //         </a>
    //         <div className="content">
    //           <a href="/" className="author">
    //             {author}
    //           </a>
    //           <div className="metadata">
    //             <span className="date">
    //               {month} {year}
    //             </span>
    //           </div>
    //           <div className="text">{review}</div>
    //         </div>
    //       </div>
    //     </Grid.Column>
    //     <Grid.Column width={8}>
    //       <div className="comment">
    //         <a href="/">
    //           <Image
    //             circular
    //             src={profilePic}
    //             size="tiny"
    //             verticalAlign="middle"
    //           />
    //         </a>
    //         <div className="content">
    //           <a href="/" className="author">
    //             {author}
    //           </a>
    //           <div className="metadata">
    //             <span className="date">
    //               {month} {year}
    //             </span>
    //           </div>
    //           <div className="text">{review}</div>
    //         </div>
    //       </div>
    //     </Grid.Column>
    //   </Grid.Row>

    //   <Grid.Row>
    //     <Grid.Column width={8}>
    //       {/*  */}
    //       <div className="comment">
    //         <a href="/">
    //           <Image
    //             circular
    //             src={profilePic}
    //             size="tiny"
    //             verticalAlign="middle"
    //           />
    //         </a>
    //         <div className="content">
    //           <a href="/" className="author">
    //             {author}
    //           </a>
    //           <div className="metadata">
    //             <span className="date">
    //               {month} {year}
    //             </span>
    //           </div>
    //           <div className="text">{review}</div>
    //         </div>
    //       </div>
    //     </Grid.Column>
    //     <Grid.Column width={8}>
    //       {/*  */}
    //       <div className="comment">
    //         <a href="/">
    //           <Image
    //             circular
    //             src={profilePic}
    //             size="tiny"
    //             verticalAlign="middle"
    //           />
    //         </a>
    //         <div className="content">
    //           <a href="/" className="author">
    //             {author}
    //           </a>
    //           <div className="metadata">
    //             <span className="date">
    //               {month} {year}
    //             </span>
    //           </div>
    //           <div className="text">{review}</div>
    //         </div>
    //       </div>
    //     </Grid.Column>
    //   </Grid.Row>
    // </Grid>
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
