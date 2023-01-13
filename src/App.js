import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/hero/header";
import About from "./components/about/about";
import Project from "./components/projects/project";
import Contact from "./components/contact/contact";
import Adproject from "./pages/adproject";
import Soproject from "./pages/soproject";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <About />
      <Project />
      <Adproject />
      <Soproject />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
