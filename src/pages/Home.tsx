import React from 'react';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import FeatureHighlights from '../components/FeatureHighlights';

const Home = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeatureHighlights />
    </>
  );
};

export default Home;