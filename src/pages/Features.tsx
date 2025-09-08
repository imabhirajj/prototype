import React from 'react';
import { 
  Cloud, MessageSquare, Users, DollarSign, 
  Database, Shield, Globe, Bell, 
  BarChart3, CreditCard, Map, Lock 
} from 'lucide-react';

const Features = () => {
  const featureCategories = [
    {
      title: 'Infrastructure & SaaS',
      icon: Cloud,
      features: [
        { icon: Globe, title: 'Multi-tenant Architecture', description: 'Scalable SaaS platform serving multiple institutions' },
        { icon: Database, title: 'Cloud Infrastructure', description: 'Reliable, secure, and globally distributed' },
        { icon: BarChart3, title: 'Analytics Dashboard', description: 'Real-time insights and comprehensive reporting' }
      ]
    },
    {
      title: 'Communication',
      icon: MessageSquare,
      features: [
        { icon: Bell, title: 'Smart Notifications', description: 'Targeted messaging across multiple channels' },
        { icon: MessageSquare, title: 'Event Management', description: 'Seamless event creation and RSVP tracking' },
        { icon: Globe, title: 'Social Integration', description: 'LinkedIn and social media connectivity' }
      ]
    },
    {
      title: 'Mentorship',
      icon: Users,
      features: [
        { icon: Users, title: 'AI Matching', description: 'Intelligent mentor-mentee pairing algorithm' },
        { icon: BarChart3, title: 'Progress Tracking', description: 'Goal setting and achievement monitoring' },
        { icon: MessageSquare, title: 'Virtual Sessions', description: 'Integrated video conferencing platform' }
      ]
    },
    {
      title: 'Fundraising',
      icon: DollarSign,
      features: [
        { icon: CreditCard, title: 'Payment Processing', description: 'Secure donation handling and recurring gifts' },
        { icon: BarChart3, title: 'Campaign Analytics', description: 'Donor insights and campaign performance' },
        { icon: DollarSign, title: 'Tax Management', description: 'Automated receipt generation and reporting' }
      ]
    },
    {
      title: 'Data Integrations',
      icon: Database,
      features: [
        { icon: Database, title: 'CRM Integration', description: 'Seamless data sync with existing systems' },
        { icon: Map, title: 'Maps Integration', description: 'Location-based alumni networking' },
        { icon: Globe, title: 'API Connectivity', description: 'RESTful APIs for custom integrations' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      features: [
        { icon: Lock, title: 'Data Encryption', description: 'End-to-end encryption for all communications' },
        { icon: Shield, title: 'GDPR Compliance', description: 'Full compliance with data protection regulations' },
        { icon: Database, title: 'Backup Systems', description: 'Automated backups and disaster recovery' }
      ]
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build, manage, and grow your alumni network in one integrated platform.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {featureCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center">
                  <category.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="grid gap-6">
                  {category.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
                    >
                      <div className="flex items-start space-x-4">
                        <feature.icon className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;