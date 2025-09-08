import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/features', label: 'Features' },
    { to: '/use-cases', label: 'Use Cases' },
    { to: '/why-alumni-nexus', label: 'Why Us' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <GraduationCap className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
            </motion.div>
            <motion.span 
              className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Alumni Nexus
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`flex items-center ${scrolled ? 'space-x-0.5' : 'space-x-1'}`}>
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  className="relative"
                  onHoverStart={() => setHoveredLink(link.to)}
                  onHoverEnd={() => setHoveredLink(null)}
                >
                  <Link
                    to={link.to}
                    className={`relative ${scrolled ? 'px-3 py-1.5' : 'px-4 py-2'} text-sm font-medium transition-colors rounded-lg ${
                      location.pathname === link.to 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                    
                    {/* Active Indicator */}
                    {location.pathname === link.to && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-600 rounded-full"
                        layoutId="activeIndicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{ x: '-50%' }}
                      />
                    )}
                    
                    {/* Hover Background */}
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
              
              {/* CTA Button */}
              <motion.button 
                className="ml-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const event = new CustomEvent('open-guided-demo');
                  window.dispatchEvent(event);
                }}
                aria-label="Start guided demo"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Start Demo</span>
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
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
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-lg text-base font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const event = new CustomEvent('open-guided-demo');
                    window.dispatchEvent(event);
                    setIsOpen(false);
                  }}
                >
                  Start Demo
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