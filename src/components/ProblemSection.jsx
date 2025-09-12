import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AlertTriangle, Minus, Check, Zap } from "lucide-react";

const ProblemSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    "Scattered data across systems",
    "Low engagement rates (5-15%)",
    "Manual donation tracking",
    "Limited networking opportunities",
    "Poor mentorship matching",
  ];

  const solutions = [
    "Unified data management",
    "60%+ engagement increase",
    "Automated donation processing",
    "AI-powered networking",
    "Smart mentorship matching",
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-red-100 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-20"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Alumni Management Challenge
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Most institutions struggle with fragmented alumni data and poor
            engagement rates.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
          <motion.div
            className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden"
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.1)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-slate-50" />

            <div className="relative z-10 text-center">
              <motion.div
                animate={{
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-6" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Traditional Approach
              </h3>

              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-left text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5, color: "#374151" }}
                  >
                    <Minus className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                    <span>{problem}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:block" />

          <motion.div
            className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden"
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  y: [0, -50, -100],
                  x: [0, Math.random() * 40 - 20],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: "100%",
                }}
              />
            ))}

            <div className="relative z-10 text-center">
              <motion.div className="relative mb-6" whileHover={{ scale: 1.1 }}>
                <motion.div
                  className="h-16 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto"
                  animate={{
                    rotate: [0, 360],
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(59, 130, 246, 0.6)",
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    boxShadow: { duration: 2, repeat: Infinity },
                  }}
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Alumni Nexus Solution
              </h3>

              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-left text-gray-700"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: -5, color: "#1D4ED8" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    </motion.div>
                    <span>{solution}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const event = new CustomEvent("open-transformation-showcase");
              window.dispatchEvent(event);
            }}
          >
            See the Transformation in Action
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;

