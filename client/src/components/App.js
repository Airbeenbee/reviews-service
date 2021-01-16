import React from "react";

const App = () => {
  return (
    <div className="ui container reviews">
      <div className="review">
        <a href="/" className="avatar">
          <img alt="avatar"></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Great location!</div>
        </div>
      </div>
    </div>
  );
};

export default App;
