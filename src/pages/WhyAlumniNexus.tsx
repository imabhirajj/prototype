import { useState, useEffect } from 'react';
import { 
  Check, X, Star, Zap, Shield, Globe, ArrowRight,
  TrendingUp, Users, CreditCard, Database, Target
} from 'lucide-react';

const WhyAlumniNexus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateTable, setAnimateTable] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setAnimateTable(true), 500);
  }, []);

  const comparisonData = [
    { 
      feature: 'Multi-tenant SaaS Architecture', 
      traditional: false, 
      alumniNexus: true,
      description: 'Scalable platform serving multiple institutions'
    },
    { 
      feature: 'Notion-like User Interface', 
      traditional: false, 
      alumniNexus: true,
      description: 'Intuitive, modern design requiring minimal training'
    },
    { 
      feature: 'Integrated Payment Processing', 
      traditional: false, 
      alumniNexus: true,
      description: 'Built-in donation handling with multiple gateways'
    },
    { 
      feature: 'LinkedIn/CRM/Maps Integration', 
      traditional: false, 
      alumniNexus: true,
      description: 'Seamless connectivity with essential business tools'
    },
    { 
      feature: 'AI-Powered Matching', 
      traditional: false, 
      alumniNexus: true,
      description: 'Machine learning for optimal mentor-mentee pairing'
    },
    { 
      feature: 'Real-time Analytics', 
      traditional: false, 
      alumniNexus: true,
      description: 'Live insights with actionable recommendations'
    },
    { 
      feature: 'Mobile-First Design', 
      traditional: false, 
      alumniNexus: true,
      description: 'Native mobile experience across all devices'
    },
    { 
      feature: 'Automated Workflows', 
      traditional: false, 
      alumniNexus: true,
      description: 'Smart automation reducing manual administrative work'
    },
    { 
      feature: 'Custom Branding', 
      traditional: true, 
      alumniNexus: true,
      description: 'Full white-label customization capabilities'
    },
    { 
      feature: 'Basic Event Management', 
      traditional: true, 
      alumniNexus: true,
      description: 'Standard event creation and RSVP tracking'
    }
  ];

  const uniqueFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Built with modern web technologies for exceptional speed and reliability',
      gradient: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      stats: '< 2s',
      statsLabel: 'Load Time'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and GDPR compliance ensure your data is always protected',
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      stats: 'SOC 2',
      statsLabel: 'Type II Certified'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Cloud-native architecture that grows with your alumni network worldwide',
      gradient: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50',
      stats: '99.9%',
      statsLabel: 'Uptime SLA'
    },
    {
      icon: Star,
      title: 'Intuitive Experience',
      description: 'User-friendly interface that requires minimal training for maximum adoption',
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      stats: '95%',
      statsLabel: 'User Satisfaction'
    }
  ];

  const competitiveAdvantages = [
    {
      icon: TrendingUp,
      title: 'ROI-Focused',
      description: 'Average 300% increase in alumni engagement within 6 months'
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'Built with input from 100+ educational institutions'
    },
    {
      icon: CreditCard,
      title: 'Transparent Pricing',
      description: 'No hidden fees, flexible plans that scale with your growth'
    },
    {
      icon: Database,
      title: 'Data Ownership',
      description: 'Your data remains yours with easy export and migration options'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Target className="w-4 h-4" />
            Competitive Advantage
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Why Choose Alumni Nexus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we stack up against traditional alumni management solutions with our modern, comprehensive approach
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`mb-20 transition-all duration-1000 ${animateTable ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b border-gray-200">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6">
                  <h3 className="text-2xl font-bold text-gray-900">Feature Comparison</h3>
                </div>
                <div className="col-span-3 text-center">
                  <div className="bg-gray-100 rounded-2xl p-4">
                    <h4 className="text-lg font-semibold text-gray-700">Traditional Solutions</h4>
                  </div>
                </div>
                <div className="col-span-3 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 text-white">
                    <h4 className="text-lg font-semibold">Alumni Nexus</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {comparisonData.map((item, index) => (
                <div
                  key={item.feature}
                  className={`px-8 py-6 hover:bg-gray-50/50 transition-all duration-300 ${
                    animateTable ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.feature}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <div className="col-span-3 text-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                        item.traditional ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {item.traditional ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          <X className="w-6 h-6" />
                        )}
                      </div>
                    </div>
                    <div className="col-span-3 text-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                        item.alumniNexus ? 'bg-blue-100 text-blue-600 hover:scale-110' : 'bg-red-100 text-red-600'
                      }`}>
                        {item.alumniNexus ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          <X className="w-6 h-6" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-white">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Ready to Experience the Difference?</h4>
                <p className="text-blue-100 mb-4">Join hundreds of institutions already transforming their alumni relationships</p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  Start Your Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with deep understanding of alumni management needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniqueFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`group relative ${feature.bgColor} rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/50 ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.stats}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold">
                      {feature.statsLabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Competitive Edge
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {competitiveAdvantages.map((advantage) => {
                const IconComponent = advantage.icon;
                return (
                  <div key={advantage.title} className="text-center group">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{advantage.title}</h4>
                    <p className="text-gray-600 text-sm">{advantage.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-4">Join the Alumni Revolution</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't let outdated systems hold back your alumni engagement. Experience the future of alumni management today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2 group">
                Schedule Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WhyAlumniNexus;