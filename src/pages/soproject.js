import React from "react";
import "./layout.css";
import yunan from "../images/Yunnan.jpg";
import course from "../images/course.jpeg";

function Soproject() {
  return (
    <div className="innerProject section__padding" id="soproject">
      <div className="innerProject-title">
        <h1>Social projects and acheivements</h1>
        <p>Here some of the Social projects and acheivements I accomplished.</p>
      </div>
      <div className="project">
        <div className="project_content">
          <h2>Supporting Children in Poverty Project in Yunnan China</h2>
          <p>
            In this project, I joined a group of volunteers to travel to the
            rural areas of Yunnan, China. Our goal was to teach and support the
            kids in poverty there. In this project, I served as a teacher's
            assistant, aiding teachers during their teaching process. After the
            trip, I was awarded a certificate for my efforts. A national media,
            the Chinese Daily, also reported and complimented this project.
          </p>
        </div>
        <div className="project_image">
          <img className="yun" src={yunan} alt="tec website" />
        </div>
      </div>
      <div className="project">
        <div className="project_content">
          <h2>‘Train the Trainer’ course</h2>
          <p>
            During my winter break, I spent a week attending the ‘Train the
            Trainer’ course on volunteering and leadership. Over the week, I
            gained a lot of knowledge, and my favourite part of the course was
            when the organizers invited a guest speaker to talk about how
            leadership and volunteering can be presented in real life. The
            speaker provided us with information on his personal life. After the
            week, we were required to create a presentation for the rest of the
            group. It all went quite successfully, and I have learnt a lot about
            leadership and volunteering.
          </p>
        </div>
        <div className="project_image">
          <img src={course} alt="tec website" />
        </div>
      </div>
    </div>
  );
}

export default Soproject;
