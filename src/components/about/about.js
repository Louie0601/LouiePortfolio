import React from "react";
import aboutimg from "../../images/face.jpg";
import "./about.css";

const About = () => (
  <div className="about section__padding" id="about">
    <div className="about-title">
      <h1>About Me</h1>
    </div>
    <div className="about-container">
      <div className="about-content">
        <h2>My Story</h2>
        <p>
          My name is Louie Yang. I was born on 01/06/2009 at Birmingham,
          England. I am attending Y9 at Dulwich College Puxi, Shanghai, China. I
          am seeking to transfer my school since my family is relocating back to
          England. At school, I have specific strengths in technical subjects
          such as ICT and Mathematics and have spent countless hours learning
          and working on them. Out of school, I am always actively participated
          in volunteer social work such as serving the community and helping
          people in need. I like to play and watch sports, especially formula
          one and football. I also like to spend time working and solving
          computer problems.
        </p>
        <div className="about-content__cta">
          <button type="button">
            <a href="#projects">Check out my work</a>
          </button>
        </div>
      </div>
      <div className="about-pic">
        <img src={aboutimg} alt="Louie mug shot" />
      </div>
    </div>
  </div>
);

export default About;
