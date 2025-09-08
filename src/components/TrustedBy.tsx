import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'IIT Spectrum', w: 96 },
  { name: 'Nexus Univ', w: 104 },
  { name: 'Global Tech', w: 110 },
  { name: 'EduWorks', w: 96 },
  { name: 'CampusOne', w: 112 },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 border-t border-gray-100 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Trusted by forward‑thinking institutions</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              className="h-10 flex items-center justify-center rounded-lg border border-gray-100 bg-white"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <span className="text-gray-400 font-semibold" style={{ width: logo.w }}>
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;


