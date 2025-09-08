import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-100 rounded-full opacity-20"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -15, 0],
          y: [0, 10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
          {/* Brand + tagline */}
          <div>
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </motion.div>
              <span className="text-xl font-bold text-gray-900">Alumni Nexus</span>
            </motion.div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The modern alumni engagement platform for institutions that want real outcomes: stronger networks, higher participation, and measurable impact.
            </p>
            <div className="flex items-center gap-3">
              <a aria-label="Follow on Twitter" className="p-2 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors" href="#">
                <Twitter className="h-4 w-4" />
              </a>
              <a aria-label="Connect on LinkedIn" className="p-2 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors" href="#">
                <Linkedin className="h-4 w-4" />
              </a>
              <a aria-label="View on GitHub" className="p-2 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors" href="#">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-sm text-gray-600 lg:col-span-2">
            <div>
              <p className="font-semibold text-gray-900 mb-3">Product</p>
              <ul className="space-y-2">
                <li><a className="hover:text-blue-600" href="/features">Features</a></li>
                <li><a className="hover:text-blue-600" href="/use-cases">Use Cases</a></li>
                <li><a className="hover:text-blue-600" href="/why-alumni-nexus">Why Us</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-3">Company</p>
              <ul className="space-y-2">
                <li><a className="hover:text-blue-600" href="/about">About</a></li>
                <li><a className="hover:text-blue-600" href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-semibold text-gray-900 mb-3">Stay in the loop</p>
            <p className="text-gray-600 text-sm mb-4">Get product updates and best practices for alumni engagement.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="you@institution.edu"
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                aria-label="Email address"
              />
              <button type="button" className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">We respect your inbox. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span>© 2025 Alumni Nexus. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.span>
            <span>for education.</span>
          </div>
          <div className="mt-3 sm:mt-0 space-x-4">
            <a className="hover:text-blue-600" href="#">Privacy</a>
            <a className="hover:text-blue-600" href="#">Terms</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;