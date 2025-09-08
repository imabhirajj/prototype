import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = 'Please enter your full name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'Enter a valid email address';
    if (!formData.message.trim()) next.message = 'Please add a short message';
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSubmitting(true);
    setSuccess(null);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess('Thanks! We will get back to you shortly.');
      setFormData({ name: '', email: '', institution: '', message: '' });
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your alumni network? Let's start a conversation 
            about your institution's unique needs.
          </p>
        </div>
      </div>

      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Let's Discuss Your Vision
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're looking to revitalize your alumni engagement or 
                build a comprehensive network from scratch, our team is here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@alumninexus.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 Innovation Drive<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-xl">
                <Calendar className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Schedule a Demo
                </h3>
                <p className="text-gray-600 mb-4">
                  See Alumni Nexus in action with a personalized 30-minute demo.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book Demo Call
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
                    required
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                    required
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                    Institution Name
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-gray-300'}`}
                    placeholder="Tell us about your alumni network goals..."
                    required
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                >
                  <Send className="h-5 w-5" />
                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                </button>
                {success && <p role="status" className="text-green-600 text-sm">{success}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map section removed as requested */}
    </div>
  );
};

export default Contact;