import { useState, useEffect } from 'react';
import { 
  Mail, Phone, Send, Calendar,
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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your alumni network? We're here to help.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a
                key={method.title}
                href={method.action}
                className={`group ${method.bgColor} rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl border border-white/50 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${method.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-base font-semibold text-blue-600 mb-1">{method.value}</p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </a>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send us a Message</h3>
                <p className="text-gray-600">
                  Whether you're looking to revitalize your alumni engagement or build a comprehensive network from scratch, our team is here to help.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Type Selector */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">I'm interested in:</label>
                  <div className="grid grid-cols-2 gap-3">
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
                          className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
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
                          <IconComponent className="w-4 h-4" />
                          <span className="font-semibold text-sm">{type.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="institution" className="block text-sm font-semibold text-gray-700 mb-2">
                      Institution Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your university or college"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Role
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your goals and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Office Locations */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-600" />
                Our Offices
              </h3>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div key={office.city} className={`p-3 rounded-xl ${office.isHeadquarters ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-gray-900 text-sm">{office.city}, {office.country}</h4>
                      {office.isHeadquarters && (
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">HQ</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-xs mb-2">{office.address}</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-3 h-3" />
                        {office.phone}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-3 h-3" />
                        {office.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Answers</h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{faq.question}</h4>
                    <p className="text-gray-600 text-xs">{faq.answer}</p>
                  </div>
                ))}
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