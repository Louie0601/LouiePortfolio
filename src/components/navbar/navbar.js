import { useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="navbar-links_container">
          <p>
            <a
              href="#home"
              onClick={() => {
                navigate("/#home");
              }}
            >
              Home
            </a>
          </p>
          <p>
            <a
              href="#about"
              onClick={() => {
                navigate("/#about");
              }}
            >
              About
            </a>
          </p>
          <p>
            <a
              href="#projects"
              onClick={() => {
                navigate("/#projects");
              }}
            >
              Projects
            </a>
          </p>
          <p>
            <a
              href="#contact"
              onClick={() => {
                navigate("/#contact");
              }}
            >
              Contact
            </a>
          </p>
        </div>
      </div>
      <div className="navbar-logo">
        <button
          onClick={() => {
            navigate("/pdf");
          }}
        >
          Portfolio PDF
        </button>
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
                <a
                  href="#home"
                  onClick={() => {
                    navigate("/#home");
                  }}
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  href="#about"
                  onClick={() => {
                    navigate("/#about");
                  }}
                >
                  About
                </a>
              </p>
              <p>
                <a
                  href="#projects"
                  onClick={() => {
                    navigate("/#projects");
                  }}
                >
                  Projects
                </a>
              </p>
              <p>
                <a
                  href="#contact"
                  onClick={() => {
                    navigate("/#contact");
                  }}
                >
                  Contact
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
