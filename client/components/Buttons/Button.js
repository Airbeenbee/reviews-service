import React from "react";
import { Button as ButtonSUI } from "semantic-ui-react";

const Button = ({ labels }) => (
  <div>
    {labels.buttonReviews.map((label, i) => (
      <ButtonSUI key={i} circular={true}>
        <span className="ui label">
          {label} {i}
        </span>
      </ButtonSUI>
    ))}
  </div>
);

export default Button;
