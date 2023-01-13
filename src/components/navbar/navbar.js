import { useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#projects">Projects</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
      </div>
      <div className="navbar-logo">
        <a
          href="https://docs.google.com/document/d/1XLqpx1gVMceLR0--nCj0e0plVchs0toX/edit?usp=sharing&ouid=110297236554135375360&rtpof=true&sd=true"
          target="_blank"
        >
          Portfolio
        </a>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#about">About</a>
              </p>
              <p>
                <a href="#projects">Projects</a>
              </p>
              <p>
                <a href="#contact">Contact</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
