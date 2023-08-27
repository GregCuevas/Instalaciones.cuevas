import React from "react";
import { Zoom } from "react-slideshow-image";
import image1 from "./img/gabinete.jpg";
import image2 from "./img/closet.jpg";
import image3 from "./img/cocina.jpg";
import image4 from "./img/gabinetes.jpg";
import Navbar from "./components/layout/Navbar";
import Producter from "./components/layout/Producter";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Nosotros from "./components/pages/Nosotros";
import Inicio from "./components/pages/Inicio";
import Contacto from "./components/pages/Contacto";
import Footer from "./components/layout/Footer";

const images = [image1, image2, image3, image4];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Slideshow />
        <Producter />
        <Footer />
      </Router>
    </div>
  );
}
export default App;
