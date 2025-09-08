import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, Users, DollarSign, ChevronRight, Zap, Target, Globe } from 'lucide-react';

const FeatureHighlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState(0);

  const highlights = [
    {
      icon: MessageCircle,
      title: 'Communication',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      features: [
        { icon: Globe, title: 'Multi-channel messaging', desc: 'Email, SMS, push notifications' },
        { icon: Target, title: 'Event management', desc: 'Seamless event creation and tracking' },
        { icon: Zap, title: 'Newsletter automation', desc: 'Smart content distribution' },
        { icon: MessageCircle, title: 'Social media integration', desc: 'LinkedIn and platform sync' }
      ]
    },
    {
      icon: Users,
      title: 'Mentorship',
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      features: [
        { icon: Zap, title: 'AI-powered matching', desc: 'Intelligent mentor-mentee pairing' },
        { icon: Target, title: 'Goal tracking', desc: 'Progress monitoring and milestones' },
        { icon: MessageCircle, title: 'Video conferencing', desc: 'Built-in meeting platform' },
        { icon: Globe, title: 'Progress analytics', desc: 'Detailed relationship insights' }
      ]
    },
    {
      icon: DollarSign,
      title: 'Fundraising',
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      features: [
        { icon: Target, title: 'Campaign management', desc: 'End-to-end campaign tools' },
        { icon: DollarSign, title: 'Donation processing', desc: 'Secure payment handling' },
        { icon: Globe, title: 'Donor analytics', desc: 'Comprehensive donor insights' },
        { icon: Zap, title: 'Tax documentation', desc: 'Automated receipt generation' }
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Dynamic Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${highlights[activeTab].bgGradient}`}
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 0.8 }}
      />

      {/* Animated Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 bg-gradient-to-r ${highlights[activeTab].color} rounded-full opacity-30`}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Core Capabilities
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive tools designed to strengthen alumni relationships and drive engagement.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            {highlights.map((highlight, index) => (
              <motion.button
                key={index}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === index 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatePresence>
                  {activeTab === index && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${highlight.color} rounded-xl`}
                      layoutId="activeTab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
                <highlight.icon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{highlight.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {highlights[activeTab].features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 group cursor-pointer overflow-hidden relative"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Hover Background Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${highlights[activeTab].bgGradient} opacity-0`}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${highlights[activeTab].color} rounded-2xl opacity-0`}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    background: `linear-gradient(white, white) padding-box, linear-gradient(45deg, transparent, ${highlights[activeTab].color}) border-box`,
                    backgroundClip: 'padding-box, border-box'
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${highlights[activeTab].color} rounded-xl flex items-center justify-center`}
                      animate={{
                        boxShadow: [
                          '0 4px 20px rgba(59, 130, 246, 0.2)',
                          '0 8px 30px rgba(59, 130, 246, 0.4)',
                          '0 4px 20px rgba(59, 130, 246, 0.2)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>

                  <motion.h3 
                    className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600"
                    transition={{ duration: 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p 
                    className="text-gray-600 text-sm leading-relaxed"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.desc}
                  </motion.p>

                  {/* Arrow Indicator */}
                  <motion.div
                    className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-medium mr-1">Learn more</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Sparkle Effect */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-0"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            className={`bg-gradient-to-r ${highlights[activeTab].color} text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg relative overflow-hidden`}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-0"
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.2 }}
            />
            <span className="relative z-10">Explore All Features</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureHighlights;