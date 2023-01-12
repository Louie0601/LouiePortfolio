import React from "react";
import Header from "../components/hero/header";
import About from "../components/about/about";
import Project from "../components/projects/project";
import Contact from "../components/contact/contact";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
