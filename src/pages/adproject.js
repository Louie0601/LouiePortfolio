import React from "react";
import "./layout.css";
import website from "../images/tec-web.png";
import ukmt from "../images/UKMT.png";

function Adproject() {
  return (
    <div className="innerProject section__padding">
      <div className="innerProject-title">
        <h1>Academical projects and acheivements</h1>
        <p>Here some of the academical projects and acheivements I acheived</p>
      </div>
      <div className="project">
        <div className="project_content">
          <h2>Development of the TEC website </h2>
          <p>
            In this project, I created a website for a non-profit organisation
            in Shanghai called TEC (The Expatriate Centre). I started from
            scratch and wrote the HTML and CSS codes for the website. It
            includes more than 50 pages and sub-pages and is compatible with
            both computer and mobile users. I managed to complete it in less
            than 2 months with my spare time out of school, and now it has been
            deployed as the official website for TEC (homepage as shown in Fig.
            1). I have also received an appreciation letter from the Chair of
            TEC (see Fig. 2).
          </p>
        </div>
        <div className="project_image">
          <img src={website} alt="tec website" />
        </div>
      </div>
      <div className="project">
        <div className="project_content">
          <h2>The UKMT math challenge – gold and kangaroo qualification</h2>
          <p>
            In year 8, I attended the UKMT math challenge. Although the teacher
            did not give up any prior notice for revision, I still managed to
            answer every single question, and eventually achieved gold and a
            Kangaroo challenge qualification.
          </p>
        </div>
        <div className="project_image">
          <img src={ukmt} alt="tec website" />
        </div>
      </div>
    </div>
  );
}

export default Adproject;
