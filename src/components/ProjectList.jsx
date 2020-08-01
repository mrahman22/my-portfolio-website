import React from "react";
import Buttons from "./Button";

function Projectlist() {
  return (
    <div className="main-projectList">
      <img
        className="project1-pic"
        src={require("../portrait.jpeg")}
        alt="portrait"
      />
      <main className="project-info">
        <h3>NC NEWS</h3>
        <p>
          This is frontend project that has been created using JavaScript along
          the react.JS framework. This is a reddit style wesbite that allows
          user to read articles on a variety of topics. The data from for this
          project has been retrievied from my own backend hosted project
        </p>
        <h4>Key Features</h4>
        <p>
          The wesbite simulate login functionality where a user needs to be
          logged as a valid user in order to post or delete comments on
          articles. You can upvote or downvote articles and comments. The
          articles can sorted by topic, time, author and etc.
        </p>
        <h4>Tech Stack</h4>
        <p>JavaScript, React, Axios, Reach-Router, HTML, CSS, Moment.JS</p>
        <div className="btns-container">
        <Buttons />
        </div>
      </main>
    </div>
  );
}

export default Projectlist;
