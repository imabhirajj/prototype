

import { useState, useEffect } from 'react';
import { 
  Building, GraduationCap, Users, Briefcase, ArrowRight, 
  TrendingUp, Heart, Lightbulb, Target, Star,
  Sparkles, Award, Network, Rocket, X, Calendar,
  CheckCircle, Zap
} from 'lucide-react';

const UseCases = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    institution: '',
    role: '',
    message: '',
    useCase: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDemoClick = (useCaseId: string) => {
    setSelectedUseCase(useCaseId);
    setDemoForm(prev => ({ ...prev, useCase: useCaseId }));
    setShowModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setIsSubmitted(false);
      setDemoForm({ name: '', email: '', institution: '', role: '', message: '', useCase: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDemoForm({ ...demoForm, [e.target.name]: e.target.value });
  };

  const useCases = [
    {
      id: 'institutions',
      icon: Building,
      title: 'Educational Institutions',
      subtitle: 'Universities & Colleges',
      description: 'Transform your alumni relations with data-driven engagement strategies',
      gradient: 'from-blue-500 to-blue-700',
      bgGradient: 'from-blue-50 to-indigo-50',
      accentColor: 'blue',
      stats: { primary: '60%+', secondary: 'Engagement Increase' },
      benefits: [
        { 
          icon: TrendingUp, 
          text: 'Increase alumni engagement by 60%+',
          detail: 'Through personalized communication and targeted outreach'
        },
        { 
          icon: Heart, 
          text: 'Streamline fundraising campaigns',
          detail: 'Automated donor journeys with transparent impact tracking'
        },
        { 
          icon: Award, 
          text: 'Build stronger institutional reputation',
          detail: 'Showcase alumni success stories and institutional impact'
        },
        { 
          icon: Network, 
          text: 'Track alumni career progression',
          detail: 'LinkedIn integration for real-time career updates'
        },
        { 
          icon: Rocket, 
          text: 'Automate communication workflows',
          detail: 'Smart triggers based on alumni behavior and milestones'
        }
      ],
      cta: 'Transform Your Network',
      ctaIcon: ArrowRight,
      testimonial: {
        quote: "Alumni Nexus helped us increase donations by 300% in just 6 months",
        author: "Dr. Sarah Chen, Stanford University"
      }
    },
    {
      id: 'alumni',
      icon: GraduationCap,
      title: 'Alumni Network',
      subtitle: 'Graduates & Professionals',
      description: 'Stay connected, give back, and unlock exclusive opportunities',
      gradient: 'from-green-500 to-emerald-700',
      bgGradient: 'from-green-50 to-emerald-50',
      accentColor: 'green',
      stats: { primary: '10k+', secondary: 'Active Alumni' },
      benefits: [
        { 
          icon: Network, 
          text: 'Access exclusive networking events',
          detail: 'Virtual and in-person events tailored to your interests'
        },
        { 
          icon: Users, 
          text: 'Mentor current students',
          detail: 'AI-powered matching with students in your field'
        },
        { 
          icon: Briefcase, 
          text: 'Discover career opportunities',
          detail: 'Job board with alumni-referred positions'
        },
        { 
          icon: Star, 
          text: 'Stay updated with institution news',
          detail: 'Personalized updates based on your interests'
        },
        { 
          icon: Heart, 
          text: 'Connect with classmates globally',
          detail: 'Find and reconnect with alumni worldwide'
        }
      ],
      cta: 'Reconnect Today',
      ctaIcon: Heart,
      testimonial: {
        quote: "Found my dream job through the alumni network - the connections are invaluable",
        author: "Michael Rodriguez, Class of 2018"
      }
    },
    {
      id: 'students',
      icon: Users,
      title: 'Current Students',
      subtitle: 'Future Leaders',
      description: 'Get mentorship, internships, and career guidance from successful alumni',
      gradient: 'from-purple-500 to-violet-700',
      bgGradient: 'from-purple-50 to-violet-50',
      accentColor: 'purple',
      stats: { primary: '95%', secondary: 'Career Success Rate' },
      benefits: [
        { 
          icon: Users, 
          text: 'Find experienced mentors',
          detail: 'Match with alumni in your field of interest'
        },
        { 
          icon: Briefcase, 
          text: 'Access internship opportunities',
          detail: 'Exclusive internships from alumni companies'
        },
        { 
          icon: Network, 
          text: 'Build professional network early',
          detail: 'Start networking before graduation'
        },
        { 
          icon: Lightbulb, 
          text: 'Get industry insights',
          detail: 'Learn from real-world experience'
        },
        { 
          icon: Target, 
          text: 'Develop career readiness skills',
          detail: 'Workshops and resources for career preparation'
        }
      ],
      cta: 'Start Your Journey',
      ctaIcon: Rocket,
      testimonial: {
        quote: "My mentor helped me land an internship at Google - this platform is amazing!",
        author: "Emily Johnson, Computer Science Junior"
      }
    },
    {
      id: 'partners',
      icon: Briefcase,
      title: 'Corporate Partners',
      subtitle: 'Recruiters & Donors',
      description: 'Access top talent and make meaningful impact through strategic partnerships',
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      accentColor: 'orange',
      stats: { primary: '500+', secondary: 'Partner Companies' },
      benefits: [
        { 
          icon: Users, 
          text: 'Access diverse talent pipeline',
          detail: 'Connect with pre-vetted alumni across industries'
        },
        { 
          icon: Target, 
          text: 'Target specific skill sets',
          detail: 'Advanced filtering by skills, experience, and location'
        },
        { 
          icon: Award, 
          text: 'Build employer brand',
          detail: 'Showcase company culture to potential candidates'
        },
        { 
          icon: Heart, 
          text: 'Support meaningful causes',
          detail: 'Invest in education and future talent development'
        },
        { 
          icon: TrendingUp, 
          text: 'Track impact and ROI',
          detail: 'Measure recruitment success and donation impact'
        }
      ],
      cta: 'Partner With Us',
      ctaIcon: Briefcase,
      testimonial: {
        quote: "We've hired 50+ exceptional candidates through Alumni Nexus partnerships",
        author: "David Park, Google Talent Acquisition"
      }
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Who Benefits From Alumni Nexus
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Built For Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our platform serves diverse stakeholders in the education ecosystem, creating value for everyone involved
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            const CtaIcon = useCase.ctaIcon;
            
            return (
              <div
                key={useCase.id}
                className={`group relative bg-gradient-to-br ${useCase.bgGradient} rounded-3xl p-8 lg:p-10 transition-all duration-700 hover:scale-105 hover:shadow-2xl border border-white/50 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(useCase.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-32 h-32">
                    <IconComponent className="w-full h-full" />
                  </div>
                </div>

                {/* Header */}
                <div className="relative mb-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${useCase.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold text-${useCase.accentColor}-600`}>
                        {useCase.stats.primary}
                      </div>
                      <div className="text-sm text-gray-600">
                        {useCase.stats.secondary}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className={`text-lg font-semibold text-${useCase.accentColor}-600 mb-3`}>{useCase.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-4 mb-8">
                  {useCase.benefits.map((benefit, benefitIndex) => {
                    const BenefitIcon = benefit.icon;
                    return (
                      <div
                        key={benefitIndex}
                        className={`flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm transition-all duration-300 ${
                          hoveredCard === useCase.id ? 'bg-white/80 translate-x-2' : ''
                        }`}
                        style={{ transitionDelay: `${benefitIndex * 50}ms` }}
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${useCase.gradient} text-white flex-shrink-0`}>
                          <BenefitIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">{benefit.text}</p>
                          <p className="text-sm text-gray-600">{benefit.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Testimonial */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${useCase.gradient} text-white`}>
                      <Star className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-gray-700 italic mb-2">"{useCase.testimonial.quote}"</p>
                      <p className="text-sm font-semibold text-gray-600">— {useCase.testimonial.author}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button 
                  onClick={() => handleDemoClick(useCase.id)}
                  className={`w-full bg-gradient-to-r ${useCase.gradient} text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group`}
                >
                  {useCase.cta}
                  <CtaIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Trusted by Leading Institutions Worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Institutions' },
              { number: '100k+', label: 'Active Alumni' },
              { number: '95%', label: 'Satisfaction Rate' },
              { number: '$50M+', label: 'Funds Raised' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Booking Modal */}
      {showModal && (
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
                    <p className="text-gray-600 mt-1">
                      {selectedUseCase && useCases.find(uc => uc.id === selectedUseCase)?.title} - Let's show you how Alumni Nexus can transform your network
                    </p>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
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
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default UseCases;