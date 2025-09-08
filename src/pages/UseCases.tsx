import React from 'react';
import { Building, GraduationCap, Users, Briefcase } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: Building,
      title: 'Institutions',
      description: 'Universities and colleges seeking to strengthen alumni relationships',
      benefits: [
        'Increase alumni engagement by 60%+',
        'Streamline fundraising campaigns',
        'Build stronger institutional reputation',
        'Track alumni career progression',
        'Automate communication workflows'
      ],
      cta: 'Transform Your Alumni Network'
    },
    {
      icon: GraduationCap,
      title: 'Alumni',
      description: 'Graduates looking to stay connected and give back to their alma mater',
      benefits: [
        'Access exclusive networking events',
        'Mentor current students',
        'Discover career opportunities',
        'Stay updated with institution news',
        'Connect with classmates globally'
      ],
      cta: 'Reconnect Today'
    },
    {
      icon: Users,
      title: 'Students',
      description: 'Current students seeking mentorship and career guidance',
      benefits: [
        'Find experienced mentors',
        'Access internship opportunities',
        'Build professional network early',
        'Get industry insights',
        'Develop career readiness skills'
      ],
      cta: 'Start Your Journey'
    },
    {
      icon: Briefcase,
      title: 'Recruiters & Donors',
      description: 'Companies and philanthropists connecting with talented alumni',
      benefits: [
        'Access diverse talent pipeline',
        'Target specific skill sets',
        'Build employer brand',
        'Support meaningful causes',
        'Track impact and ROI'
      ],
      cta: 'Partner With Us'
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Who Benefits from Alumni Nexus
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform serves diverse stakeholders in the education ecosystem, 
            creating value for everyone involved.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <useCase.icon className="h-16 w-16 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                
                <div className="space-y-3 mb-8">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="h-2 w-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {useCase.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;