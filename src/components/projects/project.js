import React from "react";
import "./project.css";
import { useNavigate } from "react-router-dom";

function Project() {
  let navigate = useNavigate();
  return (
    <div className="project section__padding" id="projects">
      <div className="project-title">
        <h1>My Projects</h1>
        <p>
          Over the past few years, I have undertaken many projects of a wide
          range of varieties, which have led to many achievements and awards.
          Here are some example projects I have worked on:
        </p>
      </div>
      <div className="project-container">
        <div className="project-container_box1">
          <h2>Academic Projects</h2>
          <p>Here are some projects I completed using my academic skills.</p>
          <div className="project-cta">
            <button
              onClick={() => {
                navigate("/academical-projects");
              }}
            >
              See Academic Projects
            </button>
          </div>
        </div>
        <div className="project-container_box2">
          <h2>Social Projects</h2>
          <p>
            Here are some projects I completed using my social and volunteering
            skills.
          </p>
          <div className="project-cta">
            <button
              onClick={() => {
                navigate("/social-projects");
              }}
            >
              See Social Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
