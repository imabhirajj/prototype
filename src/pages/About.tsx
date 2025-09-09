import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former VP of Alumni Relations at Stanford, passionate about connecting communities.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ex-Google engineer with expertise in scalable SaaS platforms and AI.'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'UX expert focused on creating intuitive experiences for educational institutions.'
    },
    {
      name: 'David Park',
      role: 'Head of Engineering',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack developer with 10+ years experience in enterprise software.'
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Alumni Nexus
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to transform how educational institutions connect 
            with their alumni communities worldwide.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2023, Alumni Nexus emerged from a simple observation: 
                  despite the digital revolution, most educational institutions still 
                  struggled to maintain meaningful connections with their alumni.
                </p>
                <p>
                  Our founders, with backgrounds in education technology and alumni 
                  relations, saw an opportunity to create something different—a platform 
                  that would not just manage data, but foster genuine relationships 
                  and community growth.
                </p>
                <p>
                  Today, we serve hundreds of institutions worldwide, helping them 
                  unlock the potential of their alumni networks through innovative 
                  technology and thoughtful design.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group cursor-pointer"
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Icon with hover animation */}
              <motion.div
                className="relative z-10"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                transition={{ duration: 0.2 }}
              >
                <Target className="h-12 w-12 text-blue-600 mb-6" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                To empower educational institutions with the tools they need to build 
                thriving, engaged alumni communities that drive mutual success and 
                lasting impact.
              </p>
              
              {/* Hover effect border */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-200 rounded-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group cursor-pointer"
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Icon with hover animation */}
              <motion.div
                className="relative z-10"
                whileHover={{ 
                  scale: 1.1,
                  rotate: -5
                }}
                transition={{ duration: 0.2 }}
              >
                <Eye className="h-12 w-12 text-blue-600 mb-6" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                A world where every graduate remains connected to their alma mater, 
                contributing to a cycle of learning, growth, and opportunity that 
                benefits current and future students.
              </p>
              
              {/* Hover effect border */}
              <motion.div
                className="absolute inset-0 border-2 border-purple-200 rounded-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to revolutionizing alumni engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;