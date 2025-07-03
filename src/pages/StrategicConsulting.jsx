import React from 'react';
import { Briefcase, Target, TrendingUp, Users, FileText, Lightbulb, BarChart, Settings, Compass, ArrowRight, Award, CheckCircle, Clock, Zap, Shield, Globe, Star, Trophy, Brain, Rocket, Calendar, Phone, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CrisisSimulator from '../components/CrisisSimulator';
import StrategicFrameworkVisualizer from '../components/StrategicFrameworkVisualizer';
import DeploymentTimeline from '../components/DeploymentTimeline';

const StrategicConsulting = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Target,
      title: 'Communication Strategy Development',
      description: 'Comprehensive strategic planning informed by FEMA-certified protocols and real-world deployment experience.',
      deliverables: ['Strategic framework development', 'Implementation roadmap', 'Resource allocation planning', 'Success measurement framework'],
      detailedDescription: 'Transform your communication approach with proven methodologies tested across hundreds of incidents.',
      timeline: '4-6 weeks',
      valueProposition: 'Frameworks proven in real-world crisis deployments'
    },
    {
      icon: Users,
      title: 'Stakeholder Analysis & Engagement',
      description: 'Multi-agency coordination strategies based on deployment experience across government, emergency services, and private sector.',
      deliverables: ['Stakeholder mapping matrix', 'Engagement strategy framework', 'Coordination protocols', 'Communication preferences analysis'],
      detailedDescription: 'Build stronger relationships through systematic analysis informed by multi-agency deployment experience.',
      timeline: '2-3 weeks',
      valueProposition: 'Multi-agency coordination expertise from actual deployments'
    },
    {
      icon: FileText,
      title: 'Policy & Procedure Development',
      description: 'Robust communication policies incorporating FEMA ICS protocols and industry best practices.',
      deliverables: ['Policy documentation suite', 'Standard operating procedures', 'Training program framework', 'Compliance guidelines'],
      detailedDescription: 'Establish clear guidelines based on proven protocols from emergency management deployments.',
      timeline: '3-4 weeks',
      valueProposition: 'FEMA-certified protocols adapted for your organization'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics & Optimization',
      description: 'Measurement frameworks based on deployment metrics and international best practices.',
      deliverables: ['Performance dashboard setup', 'KPI framework', 'Analytics implementation', 'Reporting templates'],
      detailedDescription: 'Data-driven optimization using metrics proven effective in actual crisis responses.',
      timeline: '2-3 weeks',
      valueProposition: 'Measurement systems tested in real-world deployments'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Best Practices',
      description: 'Cutting-edge methodologies from international training and convention presentations.',
      deliverables: ['Innovation assessment', 'Best practice integration', 'Technology recommendations', 'Implementation roadmap'],
      detailedDescription: 'Access to latest innovations from international training and convention experiences.',
      timeline: '3-5 weeks',
      valueProposition: 'International best practices from convention training experience'
    },
    {
      icon: Briefcase,
      title: 'Organizational Readiness Assessment',
      description: 'Comprehensive evaluation using FEMA assessment protocols and deployment readiness standards.',
      deliverables: ['Readiness assessment report', 'Gap analysis', 'Improvement recommendations', 'Action planning'],
      detailedDescription: 'Understand your preparedness using standards applied across hundreds of incidents.',
      timeline: '1-2 weeks',
      valueProposition: 'Assessment standards proven across hundreds of incidents'
    }
  ];

  const valuePackages = [
    {
      name: 'Strategic Foundation',
      level: 'Essential Consulting Package',
      duration: '4-6 weeks',
      description: 'Essential strategic framework incorporating FEMA-certified protocols for foundational improvement.',
      expertiseHighlight: 'FEMA-certified assessment and planning protocols',
      deploymentConnection: 'Methodologies proven across emergency deployments',
      includes: [
        'Comprehensive organizational assessment using FEMA protocols',
        'Strategic framework development with deployment insights',
        'Basic stakeholder mapping and engagement planning',
        'Implementation roadmap with realistic timelines',
        'Performance metrics framework',
        '30-day implementation support'
      ],
      bestFor: 'Organizations beginning strategic communication transformation',
      deliverables: '6 key strategic deliverables',
      consultationNote: 'Custom approach designed during strategy consultation',
      ctaText: 'Discuss Foundation Strategy',
      highlight: 'Getting Started'
    },
    {
      name: 'Complete Transformation',
      level: 'Comprehensive Consulting Package', 
      duration: '8-12 weeks',
      description: 'Complete strategic transformation using deployment experience and international best practices.',
      expertiseHighlight: 'Multi-agency coordination and deployment expertise',
      deploymentConnection: 'Frameworks tested in hundreds of real incidents',
      includes: [
        'Everything in Strategic Foundation package',
        'Advanced multi-stakeholder analysis and coordination',
        'Comprehensive policy and procedure development',
        'Team capability development programs',
        'Technology integration recommendations',
        'Crisis preparedness planning',
        '90-day optimization support with performance review'
      ],
      bestFor: 'Organizations requiring comprehensive communication enhancement',
      deliverables: '15 comprehensive strategic deliverables',
      consultationNote: 'Tailored solution based on organizational complexity',
      ctaText: 'Plan Comprehensive Transformation',
      popular: true,
      highlight: 'Most Comprehensive'
    },
    {
      name: 'Enterprise Excellence',
      level: 'Executive Strategic Partnership',
      duration: '12-16 weeks',
      description: 'Premium strategic partnership combining all expertise areas with ongoing optimization.',
      expertiseHighlight: 'Full deployment experience and international training expertise',
      deploymentConnection: 'Complete methodology suite from all deployment types',
      includes: [
        'Everything in Complete Transformation package',
        'Executive strategic coaching and development',
        'Advanced analytics and optimization systems',
        'Innovation integration from international best practices',
        'Change management and cultural transformation support',
        '6-month strategic partnership with ongoing optimization',
        'Priority access for emergency consultation'
      ],
      bestFor: 'Enterprise organizations and complex multi-agency environments',
      deliverables: '25+ executive-level strategic deliverables',
      consultationNote: 'White-glove strategic partnership with dedicated expert advisor',
      ctaText: 'Explore Executive Partnership',
      highlight: 'Premium Partnership'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const goToBookDemo = () => {
    navigate('/book-demo');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15" 
             style={{backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80')`}} />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-background/95 via-primary-blue/5 to-dark-background/90" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <Briefcase size={400} className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-primary-blue animate-pulse" />
          <Target size={300} className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 text-primary-red animate-float" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-20">
          {/* Authority Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-red to-primary-blue px-6 py-3 rounded-full text-white font-semibold text-lg">
              <Award size={24} />
              <span>FEMA-Certified • Deployment-Tested • Internationally Recognized</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-primary font-bold mb-6 leading-tight">
            Strategic{' '}
            <span className="text-gradient-hero">Communication</span>
            {' '}Consulting
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            FEMA-Certified Expertise • Deployment-Proven Methodologies
          </h2>

          {/* Credibility Highlights */}
          <div className="mb-8 p-6 bg-dark-background/70 rounded-xl border border-primary-blue/30 backdrop-blur-sm">
            <p className="text-xl text-gray-300 mb-4">
              <strong className="text-primary-blue">Deployment-Tested Strategic Consulting</strong> backed by:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Shield size={24} className="text-primary-red" />
                <span className="text-gray-300">FEMA Certifications</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Globe size={24} className="text-primary-blue" />
                <span className="text-gray-300">International Training</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Zap size={24} className="text-primary-red" />
                <span className="text-gray-300">Active Deployments</span>
              </div>
            </div>
          </div>

          {/* Experience Emphasis */}
          <div className="mb-8 p-4 bg-gradient-to-r from-primary-blue/10 to-primary-red/10 rounded-lg border border-gray-accents/20">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <Trophy size={24} className="text-primary-blue" />
              <span className="text-primary-blue font-semibold">Real-World Deployment Experience</span>
            </div>
            <p className="text-gray-300 text-sm">
              Hundreds of incidents • Multi-state coordination • Federal agency collaboration • International best practices
            </p>
          </div>

          {/* Success Stats */}
          <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-blue mb-2">Hundreds</div>
              <div className="text-gray-400 text-sm">Incidents Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-red mb-2">Multi-State</div>
              <div className="text-gray-400 text-sm">Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-blue mb-2">FEMA</div>
              <div className="text-gray-400 text-sm">Certified Team</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-red mb-2">International</div>
              <div className="text-gray-400 text-sm">Training Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={goToBookDemo}
              className="group bg-primary-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center space-x-2"
            >
              <Calendar size={20} />
              <span>Book Strategic Consultation</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <button 
              onClick={scrollToContact}
              className="group bg-transparent border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Discuss Your Needs</span>
            </button>
          </div>

          {/* Consultation Value */}
          <div className="p-4 bg-primary-red/10 rounded-lg border border-primary-red/30 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <Brain size={20} className="text-primary-red" />
              <span className="text-primary-red font-semibold">Complimentary Strategic Consultation</span>
            </div>
            <p className="text-gray-300 text-sm">
              60-minute assessment with FEMA-certified strategic consultant
            </p>
          </div>
        </div>
      </section>

      {/* Crisis Simulator */}
      <CrisisSimulator />

      {/* Strategic Framework Visualizer */}
      <StrategicFrameworkVisualizer />

      {/* Deployment Timeline */}
      <DeploymentTimeline />

      {/* Services Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Strategic Consulting Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              FEMA-certified expertise and deployment experience applied to your strategic communication challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-blue transition-all duration-300 hover:transform hover:-translate-y-2">
                  <IconComponent size={48} className="text-primary-blue mb-4" />
                  <h3 className="text-xl font-primary font-semibold mb-3 text-light-text">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4 p-3 bg-primary-blue/10 rounded-lg">
                    <p className="text-primary-blue font-semibold text-sm">
                      💡 {service.valueProposition}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-light-text mb-2">Key Deliverables:</h4>
                    <ul className="space-y-1">
                      {service.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                          <span className="text-gray-300 text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-600 pt-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">
                      Timeline: {service.timeline}
                    </div>
                    <button 
                      onClick={goToBookDemo}
                      className="text-primary-blue hover:text-primary-red transition-colors duration-300 font-semibold text-sm"
                    >
                      Discuss Application →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Strategic Consulting Packages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the level of strategic transformation that matches your organizational needs and complexity.
            </p>
            <div className="mt-4 p-3 bg-primary-blue/10 rounded-lg border border-primary-blue/30 inline-block">
              <p className="text-primary-blue font-semibold">
                📋 All packages include custom strategy development and deployment-informed methodologies
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {valuePackages.map((pkg, index) => (
              <div key={index} className={`relative bg-dark-background border rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 ${
                pkg.popular ? 'border-primary-blue shadow-2xl scale-105' : 'border-gray-accents hover:border-primary-blue'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-blue text-white px-6 py-2 rounded-full text-sm font-semibold">
                    {pkg.highlight}
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-primary font-bold mb-2 text-light-text">
                    {pkg.name}
                  </h3>
                  <p className="text-primary-blue font-semibold text-lg mb-4">
                    {pkg.level}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                  
                  {/* Expertise Highlight */}
                  <div className="mb-4 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                    <div className="text-green-400 font-bold text-sm mb-1">Expertise Applied:</div>
                    <div className="text-green-300 text-xs">{pkg.expertiseHighlight}</div>
                    <div className="text-green-300 text-xs mt-1">{pkg.deploymentConnection}</div>
                  </div>
                  
                  {/* Custom Consultation Note */}
                  <div className="p-3 bg-primary-red/10 rounded-lg border border-primary-red/30 mb-4">
                    <div className="text-primary-red font-semibold text-sm">Custom Strategy Development</div>
                    <div className="text-gray-300 text-xs">{pkg.consultationNote}</div>
                  </div>
                  
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>Duration: {pkg.duration}</div>
                    <div>Best for: {pkg.bestFor}</div>
                    <div>Deliverables: {pkg.deliverables}</div>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.includes.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={goToBookDemo}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 ${
                    pkg.popular ? 'bg-primary-blue hover:bg-blue-700 text-white' : 'bg-primary-red hover:bg-red-700 text-white'
                  }`}
                >
                  {pkg.ctaText}
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="p-6 bg-dark-background/50 rounded-xl border border-primary-blue/30 max-w-2xl mx-auto">
              <h3 className="text-xl font-primary font-bold text-light-text mb-4">
                Why Custom Strategic Development?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">FEMA-certified methodology adaptation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Deployment experience integration</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">International best practices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Proven implementation support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue/10 to-primary-red/10">
        <div className="container mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              Ready to <span className="text-gradient">Apply Deployment-Tested Expertise?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's develop a strategic communication approach using methodologies proven across hundreds of real-world incidents.
            </p>
            
            <div className="mb-8 p-6 bg-dark-background/50 rounded-xl border border-primary-blue/30 max-w-md mx-auto">
              <h3 className="text-lg font-primary font-bold text-light-text mb-4">
                Your Strategic Consultation Includes:
              </h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-primary-blue" />
                  <span className="text-gray-300 text-sm">FEMA-certified capability assessment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-primary-blue" />
                  <span className="text-gray-300 text-sm">Deployment experience application</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-primary-blue" />
                  <span className="text-gray-300 text-sm">Custom strategic recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-primary-blue" />
                  <span className="text-gray-300 text-sm">Implementation roadmap development</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={goToBookDemo}
                className="bg-primary-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                Book Strategic Consultation
              </button>
              <button 
                onClick={scrollToContact}
                className="bg-transparent border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Discuss Your Strategic Needs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategicConsulting;