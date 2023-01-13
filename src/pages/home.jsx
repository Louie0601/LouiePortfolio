import React from "react";
import Header from "../components/hero/header";
import About from "../components/about/about";
import Project from "../components/projects/project";
import Contact from "../components/contact/contact";
import Adproject from "../pages/adproject";
import Soproject from "../pages/soproject";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Project />
      <Adproject />
      <Soproject />
      <Contact />
    </div>
  );
}

export default Home;
