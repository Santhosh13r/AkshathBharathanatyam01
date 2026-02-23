import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Photos from "./Pages/Photos";
import Videos from "./Pages/Videos";
import Press from "./Pages/Press";
import Arangetram from "./Pages/Arangetram";
import Review from "./Pages/Review";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Admin from "./Pages/Admin";
import Awards from "./Pages/Awards";

function App() {
  const style = {
    fontFamily: "Poppins, sans-serif",
    WebkitFontSmoothing: "antialiased", // Use Webkit prefix
    MozOsxFontSmoothing: "grayscale", // Add this for Firefox
    backgroundColor: "white", //#e6e7ea
  };

  return (
   
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/press" element={<Press />} />
          <Route path="/arangetram" element={<Arangetram />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  
  );
}

export default App;
