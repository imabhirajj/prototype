import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  animated = true, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <motion.div 
      className={`flex items-center space-x-3 group ${className}`}
      whileHover={animated ? { scale: 1.05 } : {}}
      transition={{ duration: 0.2 }}
    >
      {/* Logo Icon */}
      <motion.div
        className={`relative ${sizeClasses[size]}`}
        whileHover={animated ? { rotate: 360 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Main Logo Container */}
        <div className="relative w-full h-full">
          {/* Background Circle with Gradient */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700"
            animate={animated ? {
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.3)',
                '0 0 40px rgba(147, 51, 234, 0.4)',
                '0 0 20px rgba(59, 130, 246, 0.3)'
              ]
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Inner Circle */}
          <motion.div
            className="absolute inset-1 rounded-full bg-gradient-to-br from-white to-blue-50"
            animate={animated ? {
              scale: [1, 1.05, 1],
              opacity: [0.9, 1, 0.9]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Graduation Cap Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={animated ? {
              y: [0, -2, 0]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3/4 h-3/4 text-blue-600"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M22 10v6" />
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
          </motion.div>
          
          {/* Floating Particles */}
          {animated && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  animate={{
                    x: [0, Math.random() * 20 - 10],
                    y: [0, Math.random() * 20 - 10],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              ))}
            </>
          )}
        </div>
      </motion.div>

      {/* Logo Text */}
      <motion.div
        className="flex flex-col"
        animate={animated ? {
          x: [0, 2, 0]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.span
          className={`font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent ${textSizes[size]}`}
          animate={animated ? {
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          } : {}}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ backgroundSize: '200% 200%' }}
        >
          Alumni
        </motion.span>
        <motion.span
          className={`font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 bg-clip-text text-transparent ${textSizes[size]} -mt-1`}
          animate={animated ? {
            backgroundPosition: ['100% 50%', '0% 50%', '100% 50%']
          } : {}}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          style={{ backgroundSize: '200% 200%' }}
        >
          Nexus
        </motion.span>
      </motion.div>

      {/* Glow Effect */}
      {animated && (
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            boxShadow: [
              '0 0 0px rgba(59, 130, 246, 0)',
              '0 0 20px rgba(59, 130, 246, 0.3)',
              '0 0 0px rgba(59, 130, 246, 0)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};

export default Logo;
