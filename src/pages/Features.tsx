import { useState, useEffect } from 'react';
import { 
  Cloud, MessageSquare, Users, DollarSign, Database, Shield, 
  Globe, Bell, BarChart3, CreditCard, Map, Lock, ChevronRight,
  Sparkles, Zap, X, Calendar, CheckCircle, Check
} from 'lucide-react';

const Features = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    institution: '',
    role: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDemoClick = () => {
    setShowDemoModal(true);
  };

  const handlePricingClick = () => {
    setShowPricingModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setShowDemoModal(false);
      setIsSubmitted(false);
      setDemoForm({ name: '', email: '', institution: '', role: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDemoForm({ ...demoForm, [e.target.name]: e.target.value });
  };

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹7,999',
      period: '/month',
      description: 'Perfect for small institutions',
      features: [
        'Up to 1,000 alumni',
        'Basic analytics',
        'Email support',
        'Standard integrations',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹24,999',
      period: '/month',
      description: 'Most popular for growing institutions',
      features: [
        'Up to 10,000 alumni',
        'Advanced analytics',
        'Priority support',
        'All integrations',
        'Custom branding',
        'API access',
        'Advanced automation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large institutions with complex needs',
      features: [
        'Unlimited alumni',
        'Custom analytics',
        'Dedicated support',
        'Custom integrations',
        'White-label solution',
        'Advanced security',
        'Custom workflows'
      ],
      popular: false
    }
  ];

  const featureCategories = [
    {
      id: 'infrastructure',
      title: 'Infrastructure & SaaS',
      icon: Cloud,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Enterprise-grade foundation built for scale',
      features: [
        {
          icon: Globe,
          title: 'Multi-tenant Architecture',
          description: 'Scalable SaaS platform serving multiple institutions with custom branding',
          badge: 'Scalable'
        },
        {
          icon: Database,
          title: 'Cloud Infrastructure',
          description: 'Reliable, secure, and globally distributed with 99.9% uptime SLA',
          badge: 'Reliable'
        },
        {
          icon: BarChart3,
          title: 'Analytics Dashboard',
          description: 'Real-time insights with AI-powered recommendations and forecasting',
          badge: 'AI-Powered'
        }
      ]
    },
    {
      id: 'communication',
      title: 'Communication & Engagement',
      icon: MessageSquare,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      description: 'Connect and engage with precision',
      features: [
        {
          icon: Bell,
          title: 'Smart Notifications',
          description: 'AI-driven targeted messaging across email, SMS, and push notifications',
          badge: 'Smart'
        },
        {
          icon: MessageSquare,
          title: 'Event Management',
          description: 'End-to-end event lifecycle with RSVP tracking and virtual attendance',
          badge: 'Complete'
        },
        {
          icon: Globe,
          title: 'Social Integration',
          description: 'LinkedIn API integration for career updates and professional networking',
          badge: 'Connected'
        }
      ]
    },
    {
      id: 'mentorship',
      title: 'Mentorship & Career',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Foster meaningful professional relationships',
      features: [
        {
          icon: Users,
          title: 'AI Matching Algorithm',
          description: 'Machine learning-powered mentor-mentee pairing based on goals and expertise',
          badge: 'AI-Driven'
        },
        {
          icon: BarChart3,
          title: 'Progress Tracking',
          description: 'Goal setting, milestone tracking, and achievement recognition system',
          badge: 'Results-Focused'
        },
        {
          icon: MessageSquare,
          title: 'Virtual Sessions',
          description: 'Integrated video conferencing with session notes and follow-up automation',
          badge: 'Seamless'
        }
      ]
    },
    {
      id: 'fundraising',
      title: 'Fundraising & Donations',
      icon: DollarSign,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Maximize fundraising impact and transparency',
      features: [
        {
          icon: CreditCard,
          title: 'Payment Processing',
          description: 'Secure multi-currency donation handling with recurring gift management',
          badge: 'Secure'
        },
        {
          icon: BarChart3,
          title: 'Campaign Analytics',
          description: 'Donor journey insights, conversion tracking, and ROI optimization',
          badge: 'Data-Driven'
        },
        {
          icon: DollarSign,
          title: 'Tax Management',
          description: 'Automated receipt generation with compliance reporting across jurisdictions',
          badge: 'Compliant'
        }
      ]
    },
    {
      id: 'integrations',
      title: 'Data & Integrations',
      icon: Database,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      description: 'Connect your existing ecosystem',
      features: [
        {
          icon: Database,
          title: 'CRM Integration',
          description: 'Bi-directional sync with Salesforce, HubSpot, and custom CRM systems',
          badge: 'Universal'
        },
        {
          icon: Map,
          title: 'Geospatial Analytics',
          description: 'Location-based alumni networking with interactive mapping and events',
          badge: 'Location-Smart'
        },
        {
          icon: Globe,
          title: 'API Ecosystem',
          description: 'RESTful APIs with webhooks for custom integrations and automation',
          badge: 'Developer-Friendly'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      description: 'Enterprise security you can trust',
      features: [
        {
          icon: Lock,
          title: 'Advanced Encryption',
          description: 'AES-256 encryption at rest and in transit with zero-trust architecture',
          badge: 'Military-Grade'
        },
        {
          icon: Shield,
          title: 'Privacy Compliance',
          description: 'GDPR, CCPA, and SOC 2 Type II compliance with data residency options',
          badge: 'Certified'
        },
        {
          icon: Database,
          title: 'Disaster Recovery',
          description: 'Automated backups with 4-hour RTO and point-in-time recovery',
          badge: 'Bulletproof'
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Comprehensive Features
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-normal py-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build, manage, and grow your alumni network with our integrated platform designed for modern educational institutions
          </p>
        </div>

        {/* Feature Categories Navigation */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {featureCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 font-semibold ${
                    activeCategory === index
                      ? `bg-gradient-to-r ${category.color} text-white shadow-xl scale-105`
                      : 'bg-white text-gray-600 hover:text-gray-900 hover:shadow-lg hover:scale-102 shadow-md'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="hidden sm:inline">{category.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Display */}
        <div className="mb-16">
          {featureCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`transition-all duration-500 ${
                  activeCategory === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'
                }`}
              >
                {activeCategory === index && (
                  <>
                    {/* Category Header */}
                    <div className={`${category.bgColor} rounded-3xl p-8 mb-12 border border-white/50`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
                          <p className="text-lg text-gray-600 mt-2">{category.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.features.map((feature, featureIndex) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div
                            key={feature.title}
                            className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2 ${
                              isVisible ? 'animate-fade-in-up' : ''
                            }`}
                            style={{ animationDelay: `${featureIndex * 150}ms` }}
                          >
                            <div className="flex items-start gap-4 mb-6">
                              <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                                <FeatureIcon className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
                                  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${category.color} text-white`}>
                                    {feature.badge}
                                  </span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                              </div>
                            </div>
                            <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                              Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <Zap className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Alumni Network?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of institutions already leveraging our comprehensive platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleDemoClick}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
              >
                Schedule Demo
              </button>
              <button 
                onClick={handlePricingClick}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Booking Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {isSubmitted ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Demo Requested!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest! Our team will contact you within 24 hours to schedule your personalized demo.
                </p>
                <div className="flex items-center justify-center gap-2 text-blue-600">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">You'll receive a confirmation email shortly</span>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between p-8 border-b border-gray-200">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Schedule Your Demo</h3>
                    <p className="text-gray-600 mt-1">Experience our comprehensive features in action</p>
                  </div>
                  <button
                    onClick={() => setShowDemoModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                <div className="p-8">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={demoForm.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={demoForm.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Institution Name *
                        </label>
                        <input
                          type="text"
                          name="institution"
                          value={demoForm.institution}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your university or college"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Role *
                        </label>
                        <input
                          type="text"
                          name="role"
                          value={demoForm.role}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="e.g., Alumni Relations Director"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tell us about your current challenges *
                      </label>
                      <textarea
                        name="message"
                        value={demoForm.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="What specific alumni management challenges are you facing? How can we help?"
                      />
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-semibold text-blue-900">What happens next?</p>
                          <p className="text-sm text-blue-700">
                            We'll contact you within 24 hours to schedule a 30-minute personalized demo tailored to your specific needs.
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                    >
                      Request Demo
                      <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Pricing Modal */}
      {showPricingModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-8 border-b border-gray-200">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Transparent Pricing</h3>
                <p className="text-gray-600 mt-1">Choose the plan that fits your institution's needs</p>
              </div>
              <button
                onClick={() => setShowPricingModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                      plan.popular ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => {
                        setShowPricingModal(false);
                        setShowDemoModal(true);
                      }}
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Need a custom solution?</h4>
                <p className="text-gray-600 mb-6">
                  We offer custom pricing for institutions with unique requirements. Contact our sales team for a personalized quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      setShowPricingModal(false);
                      setShowDemoModal(true);
                    }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Demo
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-400 transition-colors flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default Features;
