import React from "react";
import ProjectList from "./ProjectList";


function Projects() {
  return (
    <>
      <div className="projects-container">
        <div className="projects">
          <h1>Projects</h1>
          <p>Like what you see?</p>
          <p>
            Please reach out to me if my skills could be of use to your company
          </p>
        </div>
      </div>
        <div className="projectsList">
          <ProjectList />
        </div>
    </>
  );
}

export default Projects;
