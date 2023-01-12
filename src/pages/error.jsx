import React from "react";
import img from "../images/404.svg";
import "./error.css";
import { useNavigate } from "react-router-dom";

function Error() {
  let navigate = useNavigate();
  return (
    <div className="error-container">
      <img src={img} alt="404" />
      <h3>Page not found</h3>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back
      </button>
    </div>
  );
}

export default Error;
