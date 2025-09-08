import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart } from 'lucide-react';

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
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
          
          <motion.div
            className="flex items-center space-x-2 text-sm text-gray-600"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>© 2025 Alumni Nexus. Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <span>for education.</span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;