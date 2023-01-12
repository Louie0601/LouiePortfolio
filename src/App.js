import { MemoryRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Error from "./pages/error";
import Home from "./pages/home";
import Navbar from "./components/navbar/navbar";
import AcProjects from "./pages/adproject";
import SoProjects from "./pages/soproject";
import Pdf from "./pages/pdf";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <MemoryRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academical-projects" element={<AcProjects />} />
        <Route path="/social-projects" element={<SoProjects />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </MemoryRouter>
  );
}

export default App;
