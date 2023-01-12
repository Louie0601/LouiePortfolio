import React from "react";
import "./contact.css";
import image from "../../images/contact.svg";

const Contact = () => (
  <div className="contact section__padding" id="contact">
    <div className="contact-wrapper">
      <div className="contact-content">
        <div className="contact-heading">
          <h1>Contact Me</h1>
        </div>
        <p>
          Hey! Do you like something you found out on my website? Or do you have
          any questions for me? Feel free to contact me.
        </p>
        <div className="contact-content__cta">
          <button>
            <a href="mailto:louieleyiyang@gmail.com" target="_blank">
              Email Me
            </a>
          </button>
        </div>
      </div>
      <div className="contact-image">
        <img src={image} alt="" />
      </div>
    </div>
  </div>
);

export default Contact;
