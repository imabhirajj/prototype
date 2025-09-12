import React, { useState, useEffect } from "react";
import Hero from "../components/Hero.jsx";
import ProblemSection from "../components/ProblemSection.jsx";
import SolutionSection from "../components/SolutionSection.jsx";
import FeatureHighlights from "../components/FeatureHighlights.jsx";
import GuidedDemo from "../components/GuidedDemo.jsx";

const Home = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const handler = () => setDemoOpen(true);
    window.addEventListener("open-guided-demo", handler);
    return () => window.removeEventListener("open-guided-demo", handler);
  }, []);
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeatureHighlights />
      <GuidedDemo open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

export default Home;
