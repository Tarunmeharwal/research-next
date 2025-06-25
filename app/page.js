"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { 
  FaSignInAlt, 
  FaUserPlus, 
  FaChartLine, 
  FaUsers, 
  FaCogs, 
  FaEye, 
  FaComments, 
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaCrown,
  FaUserTie,
  FaUser,
  FaShieldAlt,
  FaBars,
  FaTimes,
  FaPlayCircle,
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeRole, setActiveRole] = useState('admin');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;
        if (isInView) {
          setIsVisible(prev => ({ ...prev, [index]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const userRoles = [
    {
      id: 'admin',
      title: 'Admin Portal',
      icon: FaCrown,
      description: 'Complete platform oversight and management',
      features: ['Full system control', 'User management', 'Analytics dashboard', 'System configuration'],
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: 'stakeholder',
      title: 'Stakeholder Access',
      icon: FaUserTie,
      description: 'Strategic oversight and project approval',
      features: ['Project approval', 'Progress monitoring', 'Resource allocation', 'Strategic insights'],
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'teamlead',
      title: 'Team Lead Dashboard',
      icon: FaShieldAlt,
      description: 'Team coordination and project management',
      features: ['Team management', 'Task assignment', 'Progress tracking', 'Quality control'],
      color: 'from-green-600 to-green-800'
    },
    {
      id: 'user',
      title: 'Researcher Portal',
      icon: FaUser,
      description: 'Execute research tasks and collaborate',
      features: ['Task execution', 'Data collection', 'Collaboration tools', 'Progress updates'],
      color: 'from-cyan-600 to-cyan-800'
    }
  ];

  const automationSteps = [
    { 
      step: 1, 
      title: 'Project Initiation', 
      description: 'Stakeholders assign projects with clear objectives, scope, and expected impact.',
      icon: FaRocket
    },
    { 
      step: 2, 
      title: 'Team Onboarding', 
      description: 'Assign team members, share updates, and identify potential challenges.',
      icon: FaUsers
    },
    { 
      step: 3, 
      title: 'Pre-Briefing Call', 
      description: 'Discuss project details, set timelines, and align on deliverables.',
      icon: FaComments
    },
    { 
      step: 4, 
      title: 'Work Progress Updates', 
      description: 'Share sample data, get approvals, and provide regular updates.',
      icon: FaChartLine
    },
    { 
      step: 5, 
      title: 'Project Submission', 
      description: 'Submit projects on time with follow-up discussions and modification windows.',
      icon: FaCheckCircle
    },
    { 
      step: 6, 
      title: 'Feedback Collection', 
      description: 'Collect feedback within a week, with automated follow-up reminders.',
      icon: FaStar
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Research Director",
      company: "GlobalTech Solutions",
      quote: "This platform revolutionized our research process. We&apos;ve reduced project timelines by 40% while improving quality.",
      avatar: "🎯"
    },
    {
      name: "David Chen",
      role: "Market Analyst",
      company: "InnovateCorp",
      quote: "The automation features are incredible. What used to take weeks now happens in days with better accuracy.",
      avatar: "📊"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Strategy",
      company: "FutureTech Inc",
      quote: "Seamless collaboration and real-time insights have transformed how we approach market research.",
      avatar: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-800 font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <FaChartLine className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ResearchPulse
                </h1>
                <p className="text-gray-500 text-xs">Market Research Automation</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex space-x-6">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Features</a>
                <a href="#process" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Process</a>
                <a href="#roles" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">User Roles</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Reviews</a>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2 font-medium">
                  <FaSignInAlt className="text-sm" />
                  <span>Login</span>
                </Link>
                <Link href="/signup" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 font-medium shadow-lg hover:shadow-xl">
                  <FaUserPlus className="text-sm" />
                  <span>Sign Up</span>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Features</a>
                <a href="#process" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Process</a>
                <a href="#roles" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">User Roles</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Reviews</a>
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                  <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2 font-medium">
                    <FaSignInAlt className="text-sm" />
                    <span>Login</span>
                  </Link>
                  <Link href="/signup" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 font-medium">
                    <FaUserPlus className="text-sm" />
                    <span>Sign Up</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <FaRocket className="text-xs" />
              <span>Next-Generation Research Platform</span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="text-gray-800">Market Research</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Streamline your research projects with our cutting-edge automation solution. 
              Automate the entire research process from initiation to feedback, ensuring 
              <span className="font-semibold text-gray-800"> efficiency and visibility</span> across your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-3 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <FaRocket />
                <span>Get Started Free</span>
                <FaArrowRight className="text-sm" />
              </button>
              <button className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center space-x-3 font-semibold text-lg border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl">
                <FaPlayCircle />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-gray-600 font-medium">Faster Research</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600 font-medium">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our platform revolutionizes market research with intelligent automation and seamless collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div 
              data-animate
              className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center mb-6 shadow-lg">
                <FaCogs className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Streamlined Process</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Automate project initiation, updates, and submissions with a collaborative workflow designed for maximum efficiency and minimal friction.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-600">
                  <FaCheckCircle className="text-blue-600 text-sm" />
                  <span>Automated workflows</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <FaCheckCircle className="text-blue-600 text-sm" />
                  <span>Real-time collaboration</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <FaCheckCircle className="text-blue-600 text-sm" />
                  <span>Smart notifications</span>
                </li>
              </ul>
            </div>
            
            <div 
              data-animate
              className={`bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center mb-6 shadow-lg">
                <FaEye className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Enhanced Visibility</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ensure organization-wide access to research projects, perfectly aligned with industry coverage and stakeholder expectations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-600">
                  <FaCheckCircle className="text-purple-600 text-sm" />
                  <span>360° project overview</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <FaCheckCircle className="text-purple-600 text-sm" />
                  <span>Stakeholder dashboards</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <FaCheckCircle className="text-purple-600 text-sm" />
                  <span>Progress tracking</span>
                </li>
              </ul>
            </div>
            
            <div 
              data-animate
              className={`bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center mb-6 shadow-lg">
                <FaComments className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Improved Communication</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Facilitate seamless cross-functional team collaboration with pre-briefing calls, progress updates, and feedback loops.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-600">
                  <FaCheckCircle className="text-green-600 text-sm" />
                  <span>Integrated messaging</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <FaCheckCircle className="text-green-600 text-sm" />
                  <span>Video conferencing</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <FaCheckCircle className="text-green-600 text-sm" />
                  <span>Feedback management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section id="roles" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">Choose Your Portal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access tailored dashboards designed for your specific role and responsibilities
            </p>
          </div>

          {/* Role Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {userRoles.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeRole === role.id
                    ? `bg-gradient-to-r ${role.color} text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <role.icon className="text-lg" />
                <span>{role.title}</span>
              </button>
            ))}
          </div>

          {/* Active Role Display */}
          {userRoles.map((role) => (
            activeRole === role.id && (
              <div key={role.id} className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${role.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <role.icon className="text-white text-3xl" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{role.title}</h3>
                    <p className="text-xl text-gray-600 mb-8">{role.description}</p>
                    <button className={`bg-gradient-to-r ${role.color} text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center space-x-3 font-semibold`}>
                      <FaSignInAlt />
                      <span>Access {role.title}</span>
                    </button>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-6">Key Capabilities</h4>
                    <div className="space-y-4">
                      {role.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${role.color} flex items-center justify-center`}>
                            <FaCheckCircle className="text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Automation Process Section */}
      <section id="process" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">Our Automation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a streamlined research workflow that transforms complex processes into simple, automated steps
            </p>
          </div>
          
          <div className="space-y-8">
            {automationSteps.map((item, index) => (
              <div 
                key={index}
                data-animate
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } ${isVisible[index + 3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="lg:w-1/2">
                  <div className={`p-8 rounded-2xl ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-blue-50 to-purple-50' 
                      : 'bg-gradient-to-br from-purple-50 to-blue-50'
                  }`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${
                        index % 2 === 0 ? 'from-blue-600 to-purple-600' : 'from-purple-600 to-blue-600'
                      } flex items-center justify-center shadow-lg`}>
                        <item.icon className="text-white text-2xl" />
                      </div>
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                        index % 2 === 0 ? 'from-blue-600 to-purple-600' : 'from-purple-600 to-blue-600'
                      } flex items-center justify-center text-white font-bold text-xl`}>
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className={`w-64 h-64 rounded-2xl bg-gradient-to-br ${
                    index % 2 === 0 
                      ? 'from-blue-100 to-purple-100' 
                      : 'from-purple-100 to-blue-100'
                  } flex items-center justify-center shadow-lg`}>
                    <item.icon className={`text-8xl ${
                      index % 2 === 0 ? 'text-blue-600' : 'text-purple-600'
                    } opacity-20`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied researchers who have transformed their workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                data-animate
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible[index + 9] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                  <FaQuoteLeft className="text-blue-600 text-2xl opacity-20" />
                </div>
                <p className="text-gray-600 leading-relaxed italic">{testimonial.quote}</p>
                <div className="flex items-center space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Automate Your Research?</h2>
          <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Join our platform today and experience a smarter way to manage market research projects. 
            Start your free trial and see the difference automation makes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center space-x-3 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <FaRocket />
              <span>Start Free Trial</span>
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-3 font-semibold text-lg">
              <FaPlayCircle />
              <span>Schedule Demo</span>
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">14-Day</div>
              <div className="text-white/80">Free Trial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">No</div>
              <div className="text-white/80">Setup Fee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">Cancel</div>
              <div className="text-white/80">Anytime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <FaChartLine className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    ResearchPulse
                  </h3>
                  <p className="text-gray-400 text-sm">Market Research Automation Platform</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Transform your market research with our cutting-edge automation platform. 
                Streamline processes, enhance collaboration, and drive better insights.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors flex items-center justify-center cursor-pointer">
                  <span className="text-sm">📱</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors flex items-center justify-center cursor-pointer">
                  <span className="text-sm">🐦</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors flex items-center justify-center cursor-pointer">
                  <span className="text-sm">💼</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors flex items-center justify-center cursor-pointer">
                  <span className="text-sm">📧</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Platform</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">API Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Security</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-bold mb-6">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">System Status</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Training</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Community</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 lg:mb-0">
                © 2025 ResearchPulse - Market Research Automation Platform. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110">
          <FaComments className="text-xl" />
        </button>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 left-8 bg-white text-gray-600 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 z-40"
      >
        <FaArrowRight className="transform -rotate-90" />
      </button>
    </div>
  );
}