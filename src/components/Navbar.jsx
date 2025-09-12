import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Play, Sparkles, Clock } from "lucide-react";
import Logo from "./Logo.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [demoLoading, setDemoLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/features", label: "Features" },
    { to: "/use-cases", label: "Use Cases" },
    { to: "/why-alumni-nexus", label: "Why Us" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const handleDemoClick = () => {
    setDemoLoading(true);
    setTimeout(() => {
      const event = new CustomEvent("open-guided-demo");
      window.dispatchEvent(event);
      setDemoLoading(false);
    }, 500);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          <Link to="/" className="group">
            <Logo
              size={scrolled ? "md" : "lg"}
              animated={false}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <div className="hidden md:block">
            <div
              className={`flex items-center ${
                scrolled ? "space-x-0.5" : "space-x-1"
              }`}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  className="relative"
                  onHoverStart={() => setHoveredLink(link.to)}
                  onHoverEnd={() => setHoveredLink(null)}
                >
                  <Link
                    to={link.to}
                    className={`relative ${
                      scrolled ? "px-3 py-1.5" : "px-4 py-2"
                    } text-sm font-medium transition-colors rounded-lg ${
                      location.pathname === link.to
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                    {location.pathname === link.to && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-600 rounded-full"
                        layoutId="activeIndicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{ x: "-50%" }}
                      />
                    )}
                    <AnimatePresence>
                      {hoveredLink === link.to && (
                        <motion.div
                          className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                </motion.div>
              ))}

              <div className="relative ml-4">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium relative overflow-hidden group flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDemoClick}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  disabled={demoLoading}
                  aria-label="Start guided demo"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />

                  <AnimatePresence mode="wait">
                    {demoLoading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative z-10 flex items-center gap-2"
                      >
                        <motion.div
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <span>Loading...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="normal"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative z-10 flex items-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>Start Demo</span>
                        <Sparkles className="w-3 h-3 opacity-70" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                </motion.button>

                <AnimatePresence>
                  {showTooltip && !demoLoading && (
                    <motion.div
                      className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-50"
                      initial={{ opacity: 0, y: -10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>30-minute interactive demo</span>
                      </div>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top/full left-0 right-0 bg:white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                        location.pathname === link.to
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-lg text-base font-medium flex items-center justify-center gap-2 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    handleDemoClick();
                    setIsOpen(false);
                  }}
                  disabled={demoLoading}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />

                  <AnimatePresence mode="wait">
                    {demoLoading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative z-10 flex items-center gap-2"
                      >
                        <motion.div
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <span>Loading...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="normal"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative z-10 flex items-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>Start Demo</span>
                        <Sparkles className="w-3 h-3 opacity-70" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

