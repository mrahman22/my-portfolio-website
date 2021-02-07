import React from "react";

class Projectlist extends React.Component {
  state = {
    step: 1,
  };

  handleBack = () => {
    this.setState({ step: this.state.step - 1 });
  };

  handleForward = () => {
    if(this.state.step < 8) {
      this.setState({ step: this.state.step + 1 });
    }
  };

  render() {
    return (
      <>
        {this.state.step === 1 && (
          <div className="project1">
            <main className="project-info">
              <img
                className="project1-pic"
                src={require("../nc-news-frontend.png")}
                alt="portrait"
              />
              <div className="project-text">
                <h4>NC News Website - Front-End</h4>
                <p>
                  This is a frontend project that has been created using
                  JavaScript along with the react.JS framework. This is a reddit
                  style wesbite that allows user to read articles on a variety
                  of topics. The data from for this project has been retrievied
                  from my own backend hosted project
                </p>
                <h4>Key Features</h4>
                <p>
                  The wesbite simulates login functionality where a user needs
                  to be logged in as a valid user in order to post or delete
                  comments on the articles. You can upvote or downvote articles
                  and comments. The articles can sorted by topic, time, author
                  and etc.
                </p>
                <h4>Tech Stack</h4>
                <p>
                  JavaScript, React, Axios, Reach-Router, HTML, CSS, Moment.JS
                </p>
              </div>
              <div className="btns-container">
                <a href="https://mrahman-ncnews-2020.netlify.app/">
                  <button>Hosted Project</button>
                </a>
                <a href="https://github.com/mrahman22/frontend-proj.git">
                  <button>Source Code</button>
                </a>
              </div>
            </main>
          </div>
        )}
        {this.state.step === 2 && (
          <div className="project1">
            <main className="project-info">
              <img
                className="project1-pic"
                src={require("../nc-news-backend.png")}
                alt="portrait"
              />
              <div className="project-text">
                <h4>NC News Website - Back-End </h4>
                <p>
                  A RESTful API server developed with full TDD. Created to serve
                  up articles by topics or authors with related comments and
                  votes count. Backend to a reddit-like news site.
                </p>
                <h4>Key Features</h4>
                <p>
                  The database for the backend was creating using PostgreSQL
                  with Restful API server created using NODE.js and Express.js
                  that takes GET, PUT, PATCH and DELETE requests. The MVC
                  (model, view, controller) architecture implemented for
                  project.
                </p>
                <h4>Tech Stack</h4>
                <p>
                  Node.js, Express, Knex, PostgreSQL, Tested with Supertest,
                  Mocha and Chai
                </p>
              </div>
              <div className="btns-container">
                <a href="https://github.com/mrahman22/NC-news">
                  <button>Source Code</button>
                </a>
              </div>
            </main>
          </div>
        )}
        {this.state.step === 3 && (
          <div className="project1">
            <main className="project-info">
              <img
                className="project1-pic"
                src={require("../robin.jpg")}
                alt="portrait"
              />
              <div className="project-text">
                <h4>Neighborhoot</h4>
                <p>
                  This is a react-native app built with an AWS backend with my
                  fellow students at Northocoders. The purpose of this app is to
                  allow people to post bird sightings for the education and
                  tracking purposes.
                </p>
                <h4>Key Features</h4>
                <p>
                  Posting new birds sightings on the app along with an image of
                  bird which is stored on AWS backend. Sign up and logging is
                  handled using Amazon Cognito authentication. Users can see
                  history of sightings made as well delete an previous sightings
                  or images uploaded.
                </p>
                <h4>Tech Stack</h4>
                <p>React-native, AWS Cognito, AWS S3 buckets, DynamoDB</p>
                <div className="btns-container">
                  <a href="https://github.com/mrahman22/NeighbourHoot">
                    <button>Source Code</button>
                  </a>
                </div>
              </div>
            </main>
          </div>
        )}
        {this.state.step === 4 && (
          <div className="project1">
            <main className="project-info">
              <img
                className="project1-pic"
                src={require("../portfolio.png")}
                alt="portrait"
              />
              <div className="project-text">
                <h4>Personal Website</h4>
                <p>
                  This project is the very wesbite you are currently on viewing.
                  I have built this website using JavaScript with React.JS
                  framework. The website has been styled using flexbox and CSS.
                </p>
                <h4>Key Features</h4>
                <p>
                  This website has been solely created for purpose of
                  demonstrating and showing on projects that I have currently
                  built. I hope to be learning more exciting technologies to my
                  toolkit and I can hopefully share this with everyone. The
                  wesbite has been hosted on netlify.
                </p>
                <h4>Tech Stack</h4>
                <p>React.JS, JavaScript, HTML, CSS, flexbox</p>
                <div className="btns-container">
                  <a href="https://github.com/mrahman22/my-portfolio-website">
                    <button>Source Code</button>
                  </a>
                </div>
              </div>
            </main>
          </div>
        )}
        {this.state.step === 5 && (
          <div className="project1">
            <main className="project-info">
              <img
                className="project1-pic"
                src={require("../lyrics.png")}
                alt="portrait"
              />
              <div className="project-text">
                <h4>Find A Beat</h4>
                <p>
                  Being a big fan of music and song lyrics I decided to create a
                  personal project that allows users to search for lyrics of
                  their favourite songs. This application was created using
                  musixmatch API.
                </p>
                <h4>Key Features</h4>
                <p>
                  Users can you use the search field at the top of the
                  application to type in their favourite song. This will make a
                  get request to the musixmatch API and return 10 songs by the
                  name inputted. User can then select their song and view the
                  lyrics of their favourite song.
                </p>
                <h4>Tech Stack</h4>
                <p>React.JS, JavaScript, HTML, CSS, Flexbox, Moment</p>
                <div className="btns-container">
                  <a href="https://find-a-beat.netlify.app/">
                    <button>Hosted Project</button>
                  </a>
                  <a href="https://github.com/mrahman22/getLyrics">
                    <button>Source Code</button>
                  </a>
                </div>
              </div>
            </main>
          </div>
        )}
        {this.state.step === 6 && (
          <div className="project1">
            <main className="project-info">
              <img
                className="project1-pic"
                src={require("../running.png")}
                alt="portrait"
              />
              <div className="project-text">
                <h4>Mustabur's Running Revolution</h4>
                <p>
                  Running has been instrumental in helping me overcome many
                  difficult challenges that I have faced in life. I wanted to
                  create a personal project where users can share experiences of
                  how running has helped them which may in turn help others.
                  This is also gave me the opportunity of learning new
                  technologies.
                </p>
                <h4>Key Features</h4>
                <p>
                  Users are able to post, edit and delete blogs on the website.
                  The project has been created with Node.js with MongDB backend.
                  I have utilised the mongoose framework to communicate with the
                  database. The front-end is rendered via the server using ejs.
                  There many more features that I will be adding to the project.
                </p>
                <h4>Tech Stack</h4>
                <p>Node.JS, MongoDB, Mongoose, EJS, Nodemon, HTML, CSS</p>
                <div className="btns-container">
                  <a href="https://github.com/mrahman22/runningblogs">
                    <button>Source Code</button>
                  </a>
                </div>
              </div>
            </main>
          </div>
        )}
        {this.state.step === 7 && (
          <div className="project1">
            <main className="project-info">
              <img
                className="project1-pic"
                src={require("../breaking-bad.png")}
                alt="portrait"
              />
              <div className="project-text">
                <h4>Breaking-Bad Project</h4>
                <p>
                  The Breaking bad television programme is one of my all time
                  favourite shows. So when I found out an API was created that
                  allows users to fetch various information about the show I
                  decided I would create a mini-project using some of my
                  front-end skills.
                </p>
                <h4>Key Features</h4>
                <p>
                  The website allows to users to view key pieces of information
                  on all the characters from the show. I decided to practice
                  some of my newly learn css skills that rotate the image of the
                  character and the other side of the image provide personal
                  details for the character. You can also your favourite
                  character to find our more information.
                </p>
                <h4>Tech Stack</h4>
                <p>JavaScript, React, Axios, Reach-Router, HTML, CSS</p>
                <div className="btns-container">
                  <a href="https://mustabur-breaking-bad-proj.netlify.app/">
                    <button>Hosted Project</button>
                  </a>
                  <a href="https://github.com/mrahman22/breaking-bad">
                    <button>Source Code</button>
                  </a>
                </div>
              </div>
            </main>
          </div>
        )}
         {this.state.step === 8 && (
          <div className="project1">
            <main className="project-info">
              <img
                className="project1-pic"
                src={require("../coming-soon.jpg")}
                alt="portrait"
              />
              <div className="project-text">
                <h4>Coming Soon........</h4>
                <p>
                  Watch this SPACE! Many more fun projects heading this way!
                </p>
              </div>
            </main>
          </div>
        )}
        <div className="btn-container">
          {this.state.step > 1 && (
            <button className="back-btn" onClick={(e) => this.handleBack()}>
              {"<"}
            </button>
          )}
          {this.state.step < 8 && (
            <button
              className="forward-btn"
              onClick={(e) => this.handleForward()}
            >
              >
            </button>
          )}
        </div>
      </>
    );
  }
}

export default Projectlist;
