import React from 'react';
import { Check, X, Star, Zap, Shield, Globe } from 'lucide-react';

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
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Transformation
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyAlumniNexus;