import React from "react";
import heroimg from "../../images/hero.svg";
import "./header.css";

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1>
        Louie <span className="header-content_span1">Yang</span> Portfolio
      </h1>
      <p>The portfolio of Louie Yang</p>

      <div className="header-content__cta">
        <button type="button">
          <a href="#work"> Check out my work</a>
        </button>
      </div>
    </div>
    <div className="header-image">
      <img src={heroimg} />
    </div>
  </div>
);

export default Header;
