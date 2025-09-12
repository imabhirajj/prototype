import { useState, useEffect } from "react";
import {
  Check,
  Star,
  Zap,
  Shield,
  Globe,
  X,
  TrendingUp,
  Users,
  CreditCard,
  Database,
  Target,
  Calendar,
  Mail,
  CheckCircle,
} from "lucide-react";

const WhyAlumniNexus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateTable, setAnimateTable] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    institution: "",
    role: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
    setTimeout(() => setAnimateTable(true), 500);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setShowDemoModal(false);
      setIsSubmitted(false);
      setDemoForm({
        name: "",
        email: "",
        institution: "",
        role: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (e) => {
    setDemoForm({ ...demoForm, [e.target.name]: e.target.value });
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹7,999",
      period: "/month",
      description: "Perfect for small institutions",
      features: [
        "Up to 1,000 alumni",
        "Basic analytics",
        "Email support",
        "Standard integrations",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹24,999",
      period: "/month",
      description: "Most popular for growing institutions",
      features: [
        "Up to 10,000 alumni",
        "Advanced analytics",
        "Priority support",
        "All integrations",
        "Custom branding",
        "API access",
        "Advanced automation",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large institutions with complex needs",
      features: [
        "Unlimited alumni",
        "Custom analytics",
        "Dedicated support",
        "Custom integrations",
        "White-label solution",
        "Advanced security",
        "Custom workflows",
      ],
      popular: false,
    },
  ];

  const comparisonData = [
    {
      feature: "Multi-tenant SaaS Architecture",
      traditional: false,
      alumniNexus: true,
      description: "Scalable platform serving multiple institutions",
    },
    {
      feature: "Notion-like User Interface",
      traditional: false,
      alumniNexus: true,
      description: "Intuitive, modern design requiring minimal training",
    },
    {
      feature: "Integrated Payment Processing",
      traditional: false,
      alumniNexus: true,
      description: "Built-in donation handling with multiple gateways",
    },
    {
      feature: "LinkedIn/CRM/Maps Integration",
      traditional: false,
      alumniNexus: true,
      description: "Seamless connectivity with essential business tools",
    },
    {
      feature: "AI-Powered Matching",
      traditional: false,
      alumniNexus: true,
      description: "Machine learning for optimal mentor-mentee pairing",
    },
    {
      feature: "Real-time Analytics",
      traditional: false,
      alumniNexus: true,
      description: "Live insights with actionable recommendations",
    },
    {
      feature: "Mobile-First Design",
      traditional: false,
      alumniNexus: true,
      description: "Native mobile experience across all devices",
    },
    {
      feature: "Automated Workflows",
      traditional: false,
      alumniNexus: true,
      description: "Smart automation reducing manual administrative work",
    },
    {
      feature: "Custom Branding",
      traditional: true,
      alumniNexus: true,
      description: "Full white-label customization capabilities",
    },
    {
      feature: "Basic Event Management",
      traditional: true,
      alumniNexus: true,
      description: "Standard event creation and RSVP tracking",
    },
  ];

  const uniqueFeatures = [
    {
      icon: Zap,
      title: "Modern Performance",
      description:
        "Built with cutting-edge web technologies for optimal speed and reliability",
      gradient: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      stats: "Fast",
      statsLabel: "Load Time",
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description:
        "Built with security-first approach and data protection in mind",
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      stats: "Secure",
      statsLabel: "Data Protection",
    },
    {
      icon: Globe,
      title: "Scalable Architecture",
      description: "Cloud-native design that can grow with your alumni network",
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      stats: "Scalable",
      statsLabel: "Growth Ready",
    },
    {
      icon: Star,
      title: "User-Friendly Design",
      description:
        "Intuitive interface designed for easy adoption and engagement",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      stats: "Easy",
      statsLabel: "To Use",
    },
  ];

  const competitiveAdvantages = [
    {
      icon: TrendingUp,
      title: "Innovation-Focused",
      description:
        "Cutting-edge technology designed to transform alumni engagement",
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Built by students, for students and alumni communities",
    },
    {
      icon: CreditCard,
      title: "Transparent Pricing",
      description: "Clear, affordable pricing with no hidden costs",
    },
    {
      icon: Database,
      title: "Data Ownership",
      description:
        "Your data remains yours with easy export and migration options",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Target className="w-4 h-4" />
            Competitive Advantage
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Why Choose Alumni Nexus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we stack up against traditional alumni management solutions
            with our modern, comprehensive approach
          </p>
        </div>

        <div
          className={`mb-20 transition-all duration-1000 ${
            animateTable
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b border-gray-200">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Feature Comparison
                  </h3>
                </div>
                <div className="col-span-3 text-center">
                  <div className="bg-gray-100 rounded-2xl p-4">
                    <h4 className="text-lg font-semibold text-gray-700">
                      Traditional Solutions
                    </h4>
                  </div>
                </div>
                <div className="col-span-3 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 text-white">
                    <h4 className="text-lg font-semibold">Alumni Nexus</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {comparisonData.map((item, index) => (
                <div
                  key={item.feature}
                  className={`px-8 py-6 hover:bg-gray-50/50 transition-all duration-300 ${
                    animateTable ? "animate-fade-in-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.feature}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                    <div className="col-span-3 text-center">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                          item.traditional
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.traditional ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          <span className="text-2xl font-bold">-</span>
                        )}
                      </div>
                    </div>
                    <div className="col-span-3 text-center">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                          item.alumniNexus
                            ? "bg-blue-100 text-blue-600 hover:scale-110"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.alumniNexus ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          <span className="text-2xl font-bold">-</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-white">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">
                  Ready to Experience the Difference?
                </h4>
                <p className="text-blue-100">
                  Join hundreds of institutions already transforming their
                  alumni relationships
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with deep
              understanding of alumni management needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniqueFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`group relative ${
                    feature.bgColor
                  } rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/50 ${
                    isVisible ? "animate-fade-in-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                    >
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
                    <h4 className="font-bold text-gray-900 mb-2">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {advantage.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-4 text-gray-900">
              Ready to Transform Your Alumni Network?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the growing community of institutions that are
              revolutionizing alumni engagement with Alumni Nexus. Experience
              the difference that modern technology and thoughtful design can
              make.
            </p>
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
                <p className="text-gray-700 font-semibold">
                  "The future of alumni management starts here"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDemoModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {isSubmitted ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Demo Requested!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest! Our team will contact you within
                  24 hours to schedule your personalized demo.
                </p>
                <div className="flex items-center justify-center gap-2 text-blue-600">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">
                    You'll receive a confirmation email shortly
                  </span>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between p-8 border-b border-gray-200">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Schedule Your Demo
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Experience the future of alumni management
                    </p>
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
                          <p className="font-semibold text-blue-900">
                            What happens next?
                          </p>
                          <p className="text-sm text-blue-700">
                            We'll contact you within 24 hours to schedule a
                            30-minute personalized demo tailored to your
                            specific needs.
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

      {showPricingModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-8 border-b border-gray-200">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600 mt-1">
                  Choose the plan that fits your institution's needs
                </p>
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
                      plan.popular
                        ? "border-blue-500 shadow-lg scale-105"
                        : "border-gray-200"
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
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h4>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">
                          {plan.price}
                        </span>
                        <span className="text-gray-600 ml-1">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
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
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      {plan.name === "Enterprise"
                        ? "Contact Sales"
                        : "Get Started"}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Need a custom solution?
                </h4>
                <p className="text-gray-600 mb-6">
                  We offer custom pricing for institutions with unique
                  requirements. Contact our sales team for a personalized quote.
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
                    <Mail className="w-4 h-4" />
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default WhyAlumniNexus;

