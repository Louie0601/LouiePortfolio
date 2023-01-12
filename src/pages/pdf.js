import React from "react";
import port from "./port.pdf";
import "./pdf.css";

function Pdf() {
  return (
    <div>
      <iframe src={port} frameborder="0" id="pdf"></iframe>
    </div>
  );
}

export default Pdf;
