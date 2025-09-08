import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Star, Zap, Shield, Globe, Users, Heart, X as Close } from 'lucide-react';

const WhyAlumniNexus = () => {
  const comparisonData = [
    {
      feature: 'Multi-tenant SaaS Architecture',
      traditional: false,
      alumniNexus: true
    },
    {
      feature: 'Notion-like User Interface',
      traditional: false,
      alumniNexus: true
    },
    {
      feature: 'Integrated Payment Processing',
      traditional: false,
      alumniNexus: true
    },
    {
      feature: 'LinkedIn/CRM/Maps Integration',
      traditional: false,
      alumniNexus: true
    },
    {
      feature: 'AI-Powered Matching',
      traditional: false,
      alumniNexus: true
    },
    {
      feature: 'Real-time Analytics',
      traditional: false,
      alumniNexus: true
    },
    {
      feature: 'Mobile-First Design',
      traditional: false,
      alumniNexus: true
    },
    {
      feature: 'Automated Workflows',
      traditional: false,
      alumniNexus: true
    },
    {
      feature: 'Custom Branding',
      traditional: true,
      alumniNexus: true
    },
    {
      feature: 'Basic Event Management',
      traditional: true,
      alumniNexus: true
    }
  ];

  const uniqueFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Built with modern web technologies for exceptional speed and reliability'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and GDPR compliance ensure your data is always protected'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Cloud-native architecture that grows with your alumni network worldwide'
    },
    {
      icon: Star,
      title: 'Intuitive Experience',
      description: 'User-friendly interface that requires minimal training for maximum adoption'
    }
  ];

  const [showShowcase, setShowShowcase] = React.useState(false);

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Why Choose Alumni Nexus
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we stack up against traditional alumni management solutions.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-3 text-center py-8 bg-gray-50">
              <div className="px-6">
                <h3 className="text-xl font-semibold text-gray-900">Feature</h3>
              </div>
              <div className="px-6">
                <h3 className="text-xl font-semibold text-gray-600">Traditional Solutions</h3>
              </div>
              <div className="px-6">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block">
                  <h3 className="text-xl font-semibold">Alumni Nexus</h3>
                </div>
              </div>
            </div>
            
            {comparisonData.map((item, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-3 py-4 px-6 items-center ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="text-left">
                  <span className="text-gray-900 font-medium">{item.feature}</span>
                </div>
                <div className="text-center">
                  {item.traditional ? (
                    <Check className="h-6 w-6 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-6 w-6 text-red-500 mx-auto" />
                  )}
                </div>
                <div className="text-center">
                  <Check className="h-6 w-6 text-blue-600 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Makes Us Unique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with deep understanding 
              of alumni management needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniqueFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            One Platform, Endless Alumni Possibilities
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of institutions already transforming their alumni relationships.
          </p>
          <button
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => setShowShowcase(true)}
          >
            Start Your Transformation
          </button>
        </div>
      </div>

      {/* Transformation Showcase Modal */}
      <AnimatePresence>
        {showShowcase && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowShowcase(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="showcase-title"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h3 id="showcase-title" className="text-lg sm:text-xl font-bold text-gray-900">
                  How Alumni Nexus Transforms Engagement
                </h3>
                <button
                  aria-label="Close"
                  onClick={() => setShowShowcase(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <Close className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div
                    className="rounded-xl border border-gray-100 p-5 bg-gradient-to-br from-blue-50 to-white"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Zap className="w-6 h-6 text-blue-600 mb-3" />
                    <p className="font-semibold text-gray-900 mb-1">Launch Multi-channel Campaigns</p>
                    <p className="text-sm text-gray-600">Email, SMS, and push in one flow with smart segments.</p>
                  </motion.div>

                  <motion.div
                    className="rounded-xl border border-gray-100 p-5 bg-gradient-to-br from-indigo-50 to-white"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                  >
                    <Users className="w-6 h-6 text-indigo-600 mb-3" />
                    <p className="font-semibold text-gray-900 mb-1">Grow Mentorship Networks</p>
                    <p className="text-sm text-gray-600">Match mentors/mentees with AI-assisted compatibility.</p>
                  </motion.div>

                  <motion.div
                    className="rounded-xl border border-gray-100 p-5 bg-gradient-to-br from-emerald-50 to-white"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <Shield className="w-6 h-6 text-emerald-600 mb-3" />
                    <p className="font-semibold text-gray-900 mb-1">Secure Payments & Donations</p>
                    <p className="text-sm text-gray-600">Integrated payments and receipt automation.</p>
                  </motion.div>

                  <motion.div
                    className="rounded-xl border border-gray-100 p-5 bg-gradient-to-br from-purple-50 to-white"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                  >
                    <Globe className="w-6 h-6 text-purple-600 mb-3" />
                    <p className="font-semibold text-gray-900 mb-1">Global Alumni Directory</p>
                    <p className="text-sm text-gray-600">Searchable profiles with privacy controls.</p>
                  </motion.div>

                  <motion.div
                    className="rounded-xl border border-gray-100 p-5 bg-gradient-to-br from-rose-50 to-white"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  >
                    <Heart className="w-6 h-6 text-rose-600 mb-3" />
                    <p className="font-semibold text-gray-900 mb-1">Community & Events</p>
                    <p className="text-sm text-gray-600">Plan events, RSVPs, and follow-ups with ease.</p>
                  </motion.div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowShowcase(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhyAlumniNexus;