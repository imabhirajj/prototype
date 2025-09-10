import { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Send, Calendar,
  MessageSquare, Sparkles, CheckCircle,
  Building, User, Briefcase, Heart
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    role: '',
    message: '',
    type: 'demo'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@alumninexus.com',
      description: 'Send us an email anytime',
      action: 'mailto:hello@alumninexus.com',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9am-6pm PST',
      action: 'tel:+15551234567',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      value: 'Start Conversation',
      description: '24/7 support available',
      action: '#',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Calendar,
      title: 'Schedule Demo',
      value: 'Book 30-min Call',
      description: 'Personalized walkthrough',
      action: '#',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      country: 'USA',
      address: '123 Innovation Drive, San Francisco, CA 94107',
      phone: '+1 (555) 123-4567',
      email: 'sf@alumninexus.com',
      isHeadquarters: true
    },
    {
      city: 'New York',
      country: 'USA', 
      address: '456 Business Ave, New York, NY 10001',
      phone: '+1 (555) 234-5678',
      email: 'ny@alumninexus.com',
      isHeadquarters: false
    },
    {
      city: 'London',
      country: 'UK',
      address: '789 Tech Street, London, UK EC1A 1BB',
      phone: '+44 20 7946 0958',
      email: 'london@alumninexus.com',
      isHeadquarters: false
    }
  ];

  const faqs = [
    {
      question: 'How quickly can we get started?',
      answer: 'Most institutions are up and running within 2-4 weeks, including data migration and team training.'
    },
    {
      question: 'Do you offer custom integrations?',
      answer: 'Yes, we have a robust API and can build custom integrations with your existing systems.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 chat support, dedicated customer success managers, and comprehensive training programs.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 30-day free trial with full access to all features and dedicated onboarding support.'
    }
  ];

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-8">
              We've received your message and will get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all"
              >
                Send Another Message
              </button>
              <a 
                href="/"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-gray-400 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Let's Connect
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your alumni network? Let's start a conversation about your institution's unique needs and goals.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a
                key={method.title}
                href={method.action}
                className={`group ${method.bgColor} rounded-3xl p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/50 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${method.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-lg font-semibold text-blue-600 mb-2">{method.value}</p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </a>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h3>
                <p className="text-gray-600">
                  Whether you're looking to revitalize your alumni engagement or build a comprehensive network from scratch, our team is here to help.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Type Selector */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">I'm interested in:</label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: 'demo', label: 'Scheduling a Demo', icon: Calendar },
                      { id: 'pricing', label: 'Getting Pricing', icon: Briefcase },
                      { id: 'partnership', label: 'Partnership', icon: Heart },
                      { id: 'support', label: 'Technical Support', icon: MessageSquare }
                    ].map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <label
                          key={type.id}
                          className={`flex items-center gap-3 p-4 rounded-2xl cursor-pointer transition-all ${
                            formData.type === type.id
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="type"
                            value={type.id}
                            checked={formData.type === type.id}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <IconComponent className="w-5 h-5" />
                          <span className="font-semibold text-sm">{type.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="institution" className="block text-sm font-semibold text-gray-700 mb-2">
                      Institution Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your university or college"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Role
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="e.g., Alumni Relations Director"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your goals and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                Our Offices
              </h3>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div key={office.city} className={`p-4 rounded-2xl ${office.isHeadquarters ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-gray-900">{office.city}, {office.country}</h4>
                      {office.isHeadquarters && (
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">HQ</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{office.address}</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        {office.phone}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        {office.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Answers</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Demo CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">See Alumni Nexus in Action</h3>
              <p className="text-blue-100 mb-6">Book a personalized 30-minute demo and see how we can transform your alumni engagement.</p>
              <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-2xl font-semibold hover:bg-gray-100 transition-colors">
                Schedule Demo Now
              </button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl p-4 shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-100 to-blue-100 rounded-2xl p-16 text-center">
              <MapPin className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Us on the Map</h3>
              <p className="text-gray-600 mb-6">Visit our headquarters in San Francisco or connect with our global team</p>
              <div className="bg-blue-600 text-white px-6 py-2 rounded-xl inline-block text-sm font-semibold">
                Interactive Map Coming Soon
              </div>
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

export default Contact;