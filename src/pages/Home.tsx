import React, { useState } from 'react';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import FeatureHighlights from '../components/FeatureHighlights';
import GuidedDemo from '../components/GuidedDemo';
import TrustedBy from '../components/TrustedBy';

const Home = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  React.useEffect(() => {
    const handler = () => setDemoOpen(true);
    window.addEventListener('open-guided-demo', handler as EventListener);
    return () => window.removeEventListener('open-guided-demo', handler as EventListener);
  }, []);
  return (
    <>
      <Hero />
      <TrustedBy />
      <ProblemSection />
      <SolutionSection />
      <FeatureHighlights />
      <GuidedDemo open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

export default Home;