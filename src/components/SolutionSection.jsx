import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Database,
  Users,
  Heart,
  TrendingUp,
  Shield,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SolutionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredCard, setHoveredCard] = useState(null);

  const solutions = [
    {
      icon: Database,
      title: "Centralized Data",
      description:
        "Unified alumni database with real-time synchronization across all touchpoints.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: Users,
      title: "Easy Engagement",
      description:
        "Intuitive communication tools that drive meaningful alumni interactions.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: Heart,
      title: "Smart Mentorship",
      description:
        "AI-powered matching system connecting alumni with students and peers.",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
    },
    {
      icon: TrendingUp,
      title: "Streamlined Donations",
      description:
        "Integrated payment processing with automated campaign management.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
    },
    {
      icon: Shield,
      title: "Career Growth",
      description:
        "Job board, networking events, and professional development resources.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
    },
    {
      icon: Sparkles,
      title: "AI Analytics",
      description:
        "Advanced insights and predictive analytics for better decision making.",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50",
    },
  ];

  const navigate = useNavigate();
  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50"
        animate={{
          background: [
            "linear-gradient(135deg, #ffffff 0%, #eff6ff 50%, #e0e7ff 100%)",
            "linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #ddd6fe 100%)",
            "linear-gradient(135deg, #ffffff 0%, #eff6ff 50%, #e0e7ff 100%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 200 - 100, 0],
            scale: [1, 1.5, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
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
            One Platform, Complete Solution
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Everything your institution needs to build and maintain thriving
            alumni relationships.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                className={`relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full`}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.bgColor} opacity-0`}
                  animate={{
                    opacity: hoveredCard === index ? 0.5 : 0,
                    scale: hoveredCard === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {hoveredCard === index &&
                  Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}

                <div className="relative z-10">
                  <motion.div
                    className="mb-6"
                    animate={{
                      rotate: hoveredCard === index ? [0, -10, 10, 0] : 0,
                      scale: hoveredCard === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center`}
                      animate={{
                        boxShadow:
                          hoveredCard === index
                            ? "0 20px 40px rgba(59, 130, 246, 0.3)"
                            : "0 10px 20px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <solution.icon className="h-8 w-8 text-white" />
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-4"
                    animate={{
                      color: hoveredCard === index ? "#1D4ED8" : "#111827",
                    }}
                  >
                    {solution.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 leading-relaxed"
                    animate={{
                      y: hoveredCard === index ? -2 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {solution.description}
                  </motion.p>

                  <motion.div
                    className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${solution.color} rounded-full`}
                      initial={{ width: "0%" }}
                      animate={{ width: hoveredCard === index ? "100%" : "0%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 opacity-10"
                  animate={{
                    rotate: hoveredCard === index ? 180 : 0,
                    scale: hoveredCard === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={`w-full h-full bg-gradient-to-br ${solution.color} rounded-bl-full`}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/features")}
          >
            <span>Discover more features</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;

