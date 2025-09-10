import { useState, useEffect } from 'react';
import { 
  Target, Eye, Users, Award, Rocket, Heart, Globe, 
  ArrowRight, Linkedin, Twitter, Mail,
  Sparkles, Star, TrendingUp, Shield
} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('mission');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former VP of Alumni Relations at Stanford with 10+ years transforming educational communities.',
      expertise: ['Alumni Strategy', 'Leadership', 'Product Vision'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@alumninexus.com'
      },
      achievements: ['Forbes 30 Under 30', 'EdTech Innovation Award']
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ex-Google engineer with expertise in scalable SaaS platforms and machine learning systems.',
      expertise: ['System Architecture', 'AI/ML', 'Cloud Infrastructure'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@alumninexus.com'
      },
      achievements: ['Google Cloud Architect', 'AWS Solutions Expert']
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'UX expert focused on creating intuitive experiences that drive user adoption and engagement.',
      expertise: ['UX/UI Design', 'User Research', 'Product Strategy'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@alumninexus.com'
      },
      achievements: ['Design Excellence Award', 'UX Innovation Leader']
    },
    {
      name: 'David Park',
      role: 'Head of Engineering',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack developer with 10+ years building enterprise software that scales globally.',
      expertise: ['Full-Stack Development', 'DevOps', 'Security'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@alumninexus.com'
      },
      achievements: ['Open Source Contributor', 'Tech Innovation Award']
    }
  ];

  const companyStats = [
    { number: '2023', label: 'Founded', icon: Rocket },
    { number: '500+', label: 'Institutions Served', icon: Target },
    { number: '100k+', label: 'Alumni Connected', icon: Users },
    { number: '50+', label: 'Countries Reached', icon: Globe }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize alumni engagement',
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2024',
      title: 'First 100 Institutions',
      description: 'Reached our first major milestone with leading universities',
      color: 'from-green-500 to-green-600'
    },
    {
      year: '2024',
      title: 'AI Features Launch',
      description: 'Introduced machine learning-powered matching and insights',
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Serving institutions across 50+ countries worldwide',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in the power of connections to transform lives and create lasting impact.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data is sacred. We maintain the highest standards of privacy and security.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'We never stop improving, always seeking better ways to serve our community.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We set high standards for ourselves and deliver exceptional value to our users.',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Our Story
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            About Alumni Nexus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform how educational institutions connect with their alumni communities worldwide
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {companyStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className={`text-center bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mission, Vision, Values Tabs */}
        <div className="mb-20">
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
              {['mission', 'vision', 'values'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            {activeSection === 'mission' && (
              <div className="text-center">
                <Target className="w-16 h-16 mx-auto mb-8 text-blue-600" />
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  To empower educational institutions with innovative technology that builds thriving, engaged alumni communities, 
                  driving mutual success and creating lasting impact for current and future generations of students.
                </p>
              </div>
            )}

            {activeSection === 'vision' && (
              <div className="text-center">
                <Eye className="w-16 h-16 mx-auto mb-8 text-purple-600" />
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  A world where every graduate remains meaningfully connected to their alma mater, contributing to a continuous 
                  cycle of learning, growth, and opportunity that benefits the entire educational ecosystem and society at large.
                </p>
              </div>
            )}

            {activeSection === 'values' && (
              <div>
                <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value) => {
                    const IconComponent = value.icon;
                    return (
                      <div key={value.title} className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${value.color} text-white flex-shrink-0`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold text-center mb-12">Our Journey</h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Founded in 2023, Alumni Nexus emerged from a simple observation: despite the digital revolution, 
                most educational institutions still struggled to maintain meaningful connections with their alumni.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our founders, with backgrounds in education technology and alumni relations, saw an opportunity to create 
                something different—a platform that would not just manage data, but foster genuine relationships and community growth.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Today, we serve hundreds of institutions worldwide, helping them unlock the potential of their alumni networks 
                through innovative technology and thoughtful design.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Milestones</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white font-bold mb-3`}>
                      {milestone.year}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to revolutionizing alumni engagement through innovation and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl mx-auto object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-4 border-white"></div>
                </div>

                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  {member.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      {achievement}
                    </div>
                  ))}
                </div>

                <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
                  <a href={member.social.linkedin} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.social.twitter} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-4xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to transform your alumni engagement? Let's build the future of educational communities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2 group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Our Team
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

export default About;