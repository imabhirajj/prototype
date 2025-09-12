import { useState, useEffect } from "react";
import {
  Target,
  Eye,
  Users,
  Rocket,
  Heart,
  Globe,
  ArrowRight,
  Linkedin,
  Mail,
  Sparkles,
  Star,
  TrendingUp,
  Shield,
  Award,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("mission");

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const developmentTeam = [
    {
      name: "Akshat Singh",
      role: "PHP & Backend Developer",
      image: "team/akshat.jpg",
      bio: "Passionate about building scalable backend solutions and API development.",
      expertise: ["PHP", "Backend Development", "API Design"],
      social: {
        linkedin: "https://www.linkedin.com/in/akshat-singh-1b001325b/",
        email: "akshat@sgca.live",
      },
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Abhiraj Singh",
      role: "Frontend Developer",
      image: "team/abhiraj.jpg",
      bio: "Creative frontend developer focused on user experience and modern web technologies.",
      expertise: ["React", "JavaScript", "UI Development"],
      social: {
        linkedin: "https://www.linkedin.com/in/abhiraj-singh-4898b8310",
        email: "abhiraj@sgca.live",
      },
      color: "from-green-500 to-green-600",
    },
    {
      name: "Shivansh",
      role: "Backend Developer",
      image: "team/shivansh.jpg",
      bio: "Expert in server-side development and database architecture.",
      expertise: [
        "Backend Development",
        "Database Design",
        "System Architecture",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/shivansh-sgca",
        email: "shivansh@sgca.live",
      },
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Ishita",
      role: "UI/UX Designer",
      image: "team/ishita.jpg",
      bio: "Design enthusiast creating beautiful and intuitive user experiences.",
      expertise: ["UI/UX Design", "Figma", "User Research"],
      social: {
        linkedin: "https://www.linkedin.com/in/ishitasingh-india",
        email: "ishita@sgca.com",
      },
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Arpit",
      role: "Frontend Developer",
      image: "team/arpit.jpg",
      bio: "Full-stack developer with a passion for creating responsive and dynamic interfaces.",
      expertise: ["Frontend Development", "JavaScript", "React"],
      social: {
        linkedin: "https://www.linkedin.com/in/arpit-yadav-4b14a8357",
        email: "arpit@sgca.live",
      },
      color: "from-orange-500 to-orange-600",
    },
  ];

  const mentors = [
    {
      name: "Dr. Suman Yadav",
      role: "Academic Mentor",
      image: "team/suman.jpeg",
      bio: "Experienced academic professional guiding our team with industry insights and research methodology.",
      expertise: [
        "Academic Research",
        "Industry Guidance",
        "Project Management",
      ],
      social: {
        linkedin:
          "https://www.linkedin.com/in/suman-avdhesh-yadav-ph-d-193b3a20",
        email: "suman@sgca.live",
      },
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Ritu Gothwal",
      role: "Industry Mentor",
      image: "team/ritu.jpeg",
      bio: "Industry expert providing strategic guidance and real-world business perspective.",
      expertise: ["Business Strategy", "Industry Experience", "Leadership"],
      social: {
        linkedin: "https://www.linkedin.com/in/ritu-gothwal-b0214689",
        email: "ritu@sgca.live",
      },
      color: "from-teal-500 to-teal-600",
    },
  ];

  const companyStats = [
    { number: "5", label: "Team Members", icon: Users },
    { number: "1", label: "Prototype Ready", icon: Rocket },
    { number: "∞", label: "Possibilities", icon: Target },
    { number: "2025", label: "Hackathon Year", icon: Globe },
  ];

  const milestones = [
    {
      year: "5 September 2025",
      title: "Idea Born",
      description: "Identified the gap between students and alumni communities",
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "6 September 2025",
      title: "Team Formation",
      description: "Brought together passionate developers and designers",
      color: "from-green-500 to-green-600",
    },
    {
      year: "8 September 2025",
      title: "Prototype Development",
      description: "Built our first working prototype with core features",
      color: "from-purple-500 to-purple-600",
    },
    {
      year: "12 September 2025",
      title: "Hackathon Ready",
      description: "Preparing to showcase our solution to the world",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description:
        "We believe in the power of connections to transform lives and create lasting impact.",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Your data is sacred. We maintain the highest standards of privacy and security.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description:
        "We never stop improving, always seeking better ways to serve our community.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "We set high standards for ourselves and deliver exceptional value to our users.",
      color: "from-yellow-500 to-orange-600",
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
            <Sparkles className="w-4 h-4" />
            Our Story
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            About Alumni Nexus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our journey started with a simple idea – to build a bridge between
            students and alumni. We identified the gap where students lacked
            mentorship and alumni needed a platform to connect back with their
            institute. From brainstorming and facing technical challenges to
            designing a user-friendly solution, our team worked with dedication
            to create a platform that fosters networking, guidance, and
            opportunities. This is just the beginning, and we aim to keep
            growing this alumni network stronger every day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {companyStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className={`text-center bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mb-20">
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
              {["mission", "vision", "values"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeSection === section
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            {activeSection === "mission" && (
              <div className="text-center">
                <Target className="w-16 h-16 mx-auto mb-8 text-blue-600" />
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  To empower educational institutions with innovative technology
                  that builds thriving, engaged alumni communities, driving
                  mutual success and creating lasting impact for current and
                  future generations of students.
                </p>
              </div>
            )}

            {activeSection === "vision" && (
              <div className="text-center">
                <Eye className="w-16 h-16 mx-auto mb-8 text-purple-600" />
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h3>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  A world where every graduate remains meaningfully connected to
                  their alma mater, contributing to a continuous cycle of
                  learning, growth, and opportunity that benefits the entire
                  educational ecosystem and society at large.
                </p>
              </div>
            )}

            {activeSection === "values" && (
              <div>
                <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
                  Our Values
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value) => {
                    const IconComponent = value.icon;
                    return (
                      <div
                        key={value.title}
                        className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div
                          className={`p-4 rounded-2xl bg-gradient-to-r ${value.color} text-white flex-shrink-0`}
                        >
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-3">
                            {value.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold text-center mb-12">
              Our Journey
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Alumni Nexus emerged from a simple observation: despite the
                digital revolution, most educational institutions still struggle
                to maintain meaningful connections with their alumni.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our team, with backgrounds in development and design, saw an
                opportunity to create something different—a platform that would
                not just manage data, but foster genuine relationships and
                community growth.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Today, we're building this vision into reality, creating
                innovative technology and thoughtful design to help institutions
                unlock the potential of their alumni networks.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Milestones
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } mb-12`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div
                      className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white font-bold mb-3`}
                    >
                      {milestone.year}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              Development Team
            </div>
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight py-2">
              Meet the Builders
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Talented developers and designers who brought Alumni Nexus to life
              with passion, creativity, and technical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentTeam.map((member, index) => (
              <div
                key={member.name}
                className={`group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-3xl mx-auto object-cover ring-4 ring-gray-100 group-hover:ring-blue-200 transition-all duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-r ${member.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}
                    >
                      <Star className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-lg font-semibold bg-white px-3 py-1 rounded-lg text-gray-700 mb-4 inline-block">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-white text-gray-700 text-xs font-medium rounded-full border border-gray-200 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-4xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to transform your alumni engagement? Let's build the future
              of educational communities together.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  const event = new CustomEvent("open-guided-demo");
                  window.dispatchEvent(event);
                }}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2 group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default About;
