import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import TransformationShowcase from "./components/TransformationShowcase.jsx";
import Home from "./pages/Home.jsx";
import Features from "./pages/Features.jsx";
import UseCases from "./pages/UseCases.jsx";
import WhyAlumniNexus from "./pages/WhyAlumniNexus.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-blue-600 focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/why-alumni-nexus" element={<WhyAlumniNexus />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
      <TransformationShowcase />
    </div>
  );
}

export default App;
