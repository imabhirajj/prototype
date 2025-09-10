import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Users, TrendingUp, Globe } from 'lucide-react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const floatingIcons = [
    { Icon: Users, delay: 0, x: 100, y: 50 },
    { Icon: TrendingUp, delay: 0.5, x: -80, y: 80 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 overflow-visible">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      {/* Edge Decorations: subtle gradient orbs placed away from text area */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <motion.div
          className="absolute w-40 h-40 rounded-full blur-3xl opacity-40"
          style={{ left: '3%', top: '25%', background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(99,102,241,0) 70%)' }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          aria-hidden
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full blur-3xl opacity-40"
          style={{ right: '4%', top: '55%', background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0) 70%)' }}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          aria-hidden
        />

        {/* Sparkle stars near corners (away from text) */}
        <motion.div
          className="absolute text-blue-500/50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, 15, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ left: '6%', top: '12%' }}
          aria-hidden
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="absolute text-purple-500/50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, -12, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: 0.6 }}
          style={{ right: '7%', bottom: '10%' }}
          aria-hidden
        >
          <Sparkles className="w-9 h-9" />
        </motion.div>

        {/* Floating bubbles along edges */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`bubble-left-${i}`}
            className="absolute rounded-full bg-cyan-400/20 backdrop-blur-sm"
            style={{
              left: `${2 + (i % 2) * 2}%`,
              top: `${15 + i * 12}%`,
              width: `${10 + (i % 3) * 6}px`,
              height: `${10 + (i % 3) * 6}px`,
            }}
            animate={{ y: [0, -14, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.4 }}
            aria-hidden
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`bubble-right-${i}`}
            className="absolute rounded-full bg-indigo-400/20 backdrop-blur-sm"
            style={{
              right: `${3 + (i % 2) * 2}%`,
              top: `${20 + i * 10}%`,
              width: `${8 + (i % 3) * 6}px`,
              height: `${8 + (i % 3) * 6}px`,
            }}
            animate={{ y: [0, -16, 0], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: 0.2 + i * 0.35 }}
            aria-hidden
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute hidden lg:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.6, 
              scale: 1,
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              delay: delay + 1,
              duration: 0.8,
              y: { duration: 5, repeat: Infinity },
              rotate: { duration: 6, repeat: Infinity }
            }}
            style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
          >
            <Icon className="w-8 h-8 text-blue-500" />
          </motion.div>
        ))}

        {/* Main Heading with Typewriter Effect */}
        <motion.div
          className="space-y-5 sm:space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.25] sm:leading-[1.2] lg:leading-[1.15] overflow-visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Connecting Alumni,
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 block pb-2"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Transforming Futures
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The first multi-tenant SaaS platform designed for institutions to seamlessly manage 
            alumni networks, boost engagement, and drive meaningful connections.
          </motion.p>

          {/* CTA Buttons with Advanced Interactions */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button 
              className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              onClick={() => {
                const event = new CustomEvent('open-guided-demo');
                window.dispatchEvent(event);
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
                initial={{ x: '-100%' }}
                animate={{ x: isHovered ? '0%' : '-100%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center justify-center">
                Start Guided Demo
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </span>
              
              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 bg-white opacity-20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 4, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>


        {/* Stats Counter */}
        <motion.div 
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { number: '500+', label: 'Institutions' },
            { number: '2M+', label: 'Alumni Connected' },
            { number: '95%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="text-3xl font-bold text-blue-600 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.2 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;