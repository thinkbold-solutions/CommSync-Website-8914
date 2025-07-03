import React from 'react';
import {Target,Edit,Users,Zap,BarChart,Lightbulb,ArrowRight,CheckCircle,Star,Trophy,Shield,Clock,Phone,MessageCircle,AlertTriangle,Globe,Briefcase,FileText,Award,TrendingUp,Brain,Calendar,Rocket,Crown,Heart,Calculator,Timer,Gauge} from 'lucide-react';

const MessageDevelopment = () => {
  const services = [
    {
      icon: AlertTriangle,
      title: 'Crisis & Emergency Messaging',
      tagline: 'When Every Word Can Save Lives',
      priority: 'URGENT',
      description: 'Professional crisis communication that protects communities and maintains trust during critical situations.',
      services: [
        'Emergency Alerts & Evacuation Orders',
        'Crisis Response Statements & Updates',
        'Multi-Agency Coordination Messages',
        'Post-Crisis Recovery Communications'
      ],
      timeline: '0-4 hours emergency response',
      investment: 'Emergency consultation available',
      successMetric: '100% evacuation compliance achieved for major wildfire',
      conversionHook: 'Crisis-ready messaging can save lives and protect trust',
      ctaText: 'Get Crisis-Ready',
      availability: '24/7 emergency consultation for active situations',
      bgColor: 'from-red-500/10 to-orange-500/10',
      borderColor: 'border-red-500/30'
    },
    {
      icon: Globe,
      title: 'Digital Marketing & Content',
      tagline: 'Messages That Drive Engagement & Results',
      priority: 'HIGH ROI',
      description: 'Strategic digital messaging designed to enhance online presence and audience engagement.',
      services: [
        'Social Media Campaign Copy',
        'Website Content & SEO Optimization',
        'Email Marketing Campaigns',
        'Digital Advertising Copy'
      ],
      timeline: '1-2 weeks standard delivery',
      investment: 'Strategic investment based on scope',
      successMetric: '300% average ROI improvement for digital campaigns',
      conversionHook: 'Professional messaging drives measurable digital results',
      ctaText: 'Boost Digital Performance',
      availability: 'Strategy sessions available this week',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Briefcase,
      title: 'Strategic Communications',
      tagline: 'Align Every Message With Your Mission',
      priority: 'STRATEGIC',
      description: 'Comprehensive communication strategy that drives organizational goals and stakeholder engagement.',
      services: [
        'Executive Communications',
        'Stakeholder Engagement Plans',
        'Policy Communication Strategies',
        'Change Management Messaging'
      ],
      timeline: '2-4 weeks comprehensive planning',
      investment: 'Enterprise-level investment',
      successMetric: '85% stakeholder alignment improvement achieved',
      conversionHook: 'Strategic messaging drives organizational success',
      ctaText: 'Align Your Communications',
      availability: 'Senior strategist availability limited',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: FileText,
      title: 'Media Relations & PR',
      tagline: 'Get Noticed for the Right Reasons',
      priority: 'VISIBILITY',
      description: 'Professional media messaging that enhances relationships and coverage opportunities.',
      services: [
        'Press Releases & Media Statements',
        'Executive Interview Preparation',
        'Media Kit Development',
        'Crisis Media Response'
      ],
      timeline: '1-3 weeks depending on scope',
      investment: 'Media-focused investment',
      successMetric: '400% increase in positive media coverage',
      conversionHook: 'Professional media relations build credibility',
      ctaText: 'Enhance Media Relations',
      availability: 'Media strategy sessions available',
      bgColor: 'from-green-500/10 to-teal-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      icon: Users,
      title: 'Internal Communications',
      tagline: 'Unite Your Team With Clear Direction',
      priority: 'EFFICIENCY',
      description: 'Clear internal messaging that improves employee engagement and organizational alignment.',
      services: [
        'Employee Communication Programs',
        'Leadership Message Development',
        'Change Communication Plans',
        'Training & Procedure Documentation'
      ],
      timeline: '1-3 weeks standard delivery',
      investment: 'Internal-focused investment',
      successMetric: '75% improvement in employee engagement scores',
      conversionHook: 'Clear internal communication drives productivity',
      ctaText: 'Improve Team Alignment',
      availability: 'Internal communication audits available',
      bgColor: 'from-indigo-500/10 to-blue-500/10',
      borderColor: 'border-indigo-500/30'
    },
    {
      icon: Heart,
      title: 'Community & Public Engagement',
      tagline: 'Build Trust Through Transparency',
      priority: 'TRUST',
      description: 'Community-focused messaging that builds public trust and stakeholder confidence.',
      services: [
        'Public Meeting Communications',
        'Community Newsletter Content',
        'Transparency Initiative Messaging',
        'Public Feedback Integration'
      ],
      timeline: '2-4 weeks collaborative development',
      investment: 'Community-focused investment',
      successMetric: '60% increase in community engagement',
      conversionHook: 'Transparent communication builds lasting trust',
      ctaText: 'Strengthen Community Relations',
      availability: 'Public engagement strategy sessions available',
      bgColor: 'from-yellow-500/10 to-orange-500/10',
      borderColor: 'border-yellow-500/30'
    }
  ];

  const processSteps = [
    {
      phase: 'Strategic Discovery & Analysis',
      duration: '24-48 hours',
      description: 'Comprehensive assessment of your communication needs, audience analysis, and strategic objectives.',
      activities: [
        'Situation analysis and stakeholder mapping',
        'Competitive communication review',
        'Audience research and insights',
        'Strategic objective alignment'
      ],
      deliverables: [
        'Discovery report with key findings',
        'Audience analysis and personas',
        'Communication opportunity assessment',
        'Strategic recommendations framework'
      ]
    },
    {
      phase: 'Strategic Planning & Framework',
      duration: '2-3 days',
      description: 'Development of comprehensive messaging strategy with clear objectives and success metrics.',
      activities: [
        'Message architecture development',
        'Channel strategy and timeline',
        'Success metrics definition',
        'Risk assessment and mitigation'
      ],
      deliverables: [
        'Comprehensive strategy document',
        'Message framework and guidelines',
        'Implementation roadmap',
        'Success measurement plan'
      ]
    },
    {
      phase: 'Expert Content Development',
      duration: '3-7 days',
      description: 'Professional content creation with collaborative review cycles and optimization.',
      activities: [
        'Expert copywriting and development',
        'Collaborative review processes',
        'Testing and optimization',
        'Final approval and delivery'
      ],
      deliverables: [
        'Professional message content',
        'Multiple format adaptations',
        'Usage guidelines and training',
        'Quality assurance documentation'
      ]
    },
    {
      phase: 'Implementation & Optimization',
      duration: 'Ongoing support',
      description: 'Deployment guidance with performance monitoring and continuous improvement.',
      activities: [
        'Launch support and training',
        'Performance monitoring setup',
        'Feedback collection and analysis',
        'Optimization recommendations'
      ],
      deliverables: [
        'Implementation support',
        'Performance tracking tools',
        'Optimization recommendations',
        'Ongoing consultation access'
      ]
    }
  ];

  const roiCalculatorData = [
    {
      scenario: 'Crisis Communication Preparedness',
      withoutProfessional: 'Potential reputation damage, stakeholder confusion, extended recovery time',
      withProfessional: 'Protected reputation, clear communication, faster recovery',
      estimatedSavings: 'Significant damage mitigation and faster recovery',
      timeframe: 'Per crisis incident'
    },
    {
      scenario: 'Digital Marketing Optimization',
      withoutProfessional: 'Low engagement, poor conversion, wasted ad spend',
      withProfessional: 'Higher engagement, better conversion, optimized spend',
      estimatedSavings: '200-400% improvement in campaign ROI',
      timeframe: 'Within 3-6 months'
    },
    {
      scenario: 'Internal Communication Efficiency',
      withoutProfessional: 'Confused employees, reduced productivity, higher turnover',
      withProfessional: 'Aligned teams, improved productivity, better retention',
      estimatedSavings: 'Substantial productivity gains and retention improvement',
      timeframe: 'Annually'
    }
  ];

  const availabilityStatus = [
    {
      service: 'Emergency Crisis Consultation',
      status: 'Available 24/7',
      nextSlot: 'Immediate',
      urgency: 'high'
    },
    {
      service: 'Strategy Session Bookings',
      status: '7 slots remaining this week',
      nextSlot: 'Tomorrow 2:00 PM',
      urgency: 'medium'
    },
    {
      service: 'Senior Strategist Consultation',
      status: '3 slots available this month',
      nextSlot: 'Next week',
      urgency: 'high'
    }
  ];

  const customSolutionFactors = [
    'Scope and complexity of messaging needs',
    'Timeline requirements and urgency level',
    'Industry specialization and compliance needs',
    'Stakeholder complexity and engagement requirements',
    'Integration with existing communication systems',
    'Ongoing support and optimization preferences'
  ];

  const consultationIncludes = [
    'Comprehensive communication needs assessment',
    'Custom solution recommendations and scope',
    'Detailed timeline and investment proposal',
    'Success metrics and ROI projections',
    'Implementation strategy and support plan',
    'Risk assessment and mitigation strategies'
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
    window.location.href = '/book-demo';
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15" 
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }} 
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-background/95 via-primary-blue/5 to-dark-background/90" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-5">
          <Target size={400} className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-primary-blue animate-pulse" />
          <Edit size={300} className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 text-primary-red animate-float" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Availability Status */}
          <div className="mb-6">
            <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-red to-primary-blue px-6 py-3 rounded-full text-white font-semibold text-lg">
              <Timer size={24} />
              <span>Strategy sessions available this week</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-primary font-bold mb-6 leading-tight">
            Professional Message{' '}
            <span className="text-gradient-hero">Development</span>
            {' '}That Drives Results
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            From Crisis Response to Growth Strategy - Every Message Matters
          </h2>

          {/* Value Proposition Grid */}
          <div className="mb-8 p-6 bg-dark-background/70 rounded-xl border border-primary-blue/30 backdrop-blur-sm">
            <p className="text-xl text-gray-300 mb-4">
              <strong className="text-primary-blue">Six Core Specializations</strong> designed for modern communication challenges:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center space-y-1">
                <AlertTriangle size={24} className="text-primary-red" />
                <span className="text-gray-300 text-sm">Crisis & Emergency</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Globe size={24} className="text-primary-blue" />
                <span className="text-gray-300 text-sm">Digital Marketing</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Briefcase size={24} className="text-primary-red" />
                <span className="text-gray-300 text-sm">Strategic Communications</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <FileText size={24} className="text-primary-blue" />
                <span className="text-gray-300 text-sm">Media Relations</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Users size={24} className="text-primary-red" />
                <span className="text-gray-300 text-sm">Internal Communications</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Heart size={24} className="text-primary-blue" />
                <span className="text-gray-300 text-sm">Community Engagement</span>
              </div>
            </div>
          </div>

          {/* ROI Preview */}
          <div className="mb-8 p-4 bg-gradient-to-r from-primary-blue/10 to-primary-red/10 rounded-lg border border-gray-accents/20">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <TrendingUp size={24} className="text-primary-blue" />
              <span className="text-primary-blue font-semibold">Average Client Results</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-primary-red font-bold">300% ROI</div>
                <div className="text-gray-300">Digital campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-primary-blue font-bold">85% Improvement</div>
                <div className="text-gray-300">Message consistency</div>
              </div>
              <div className="text-center">
                <div className="text-primary-red font-bold">75% Increase</div>
                <div className="text-gray-300">Stakeholder engagement</div>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={goToBookDemo}
              className="group bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center space-x-2"
            >
              <Calendar size={20} />
              <span>Book Strategy Session</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <button 
              onClick={scrollToContact}
              className="group bg-transparent border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Emergency Consultation</span>
            </button>
          </div>

          {/* Availability Notice */}
          <div className="p-4 bg-primary-red/10 rounded-lg border border-primary-red/30 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <Clock size={20} className="text-primary-red" />
              <span className="text-primary-red font-semibold">Limited Availability</span>
            </div>
            <p className="text-gray-300 text-sm">
              Senior strategist consultations limited to 3 slots this month
            </p>
          </div>
        </div>
      </section>

      {/* Live Availability Status */}
      <section className="py-12 bg-gradient-to-r from-primary-blue/10 to-primary-red/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-primary font-bold mb-4">
              <span className="text-gradient">Live Availability Status</span>
            </h2>
            <p className="text-gray-300">Current consultation availability for this week</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {availabilityStatus.map((item, index) => (
              <div key={index} className="bg-dark-background/80 border border-gray-accents rounded-xl p-6 text-center">
                <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                  item.urgency === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                }`}>
                  <Gauge size={16} />
                  <span>{item.status}</span>
                </div>
                <h3 className="font-semibold text-light-text mb-2">{item.service}</h3>
                <p className="text-primary-blue text-sm">Next available: {item.nextSlot}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Investment vs. Impact Analysis</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the cost of professional messaging vs. the cost of communication gaps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roiCalculatorData.map((scenario, index) => (
              <div key={index} className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-blue transition-all duration-300">
                <h3 className="text-xl font-primary font-bold text-primary-blue mb-4">
                  {scenario.scenario}
                </h3>
                
                <div className="space-y-4">
                  <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/30">
                    <h4 className="font-semibold text-red-400 mb-2">Without Professional Messaging:</h4>
                    <p className="text-gray-300 text-sm">{scenario.withoutProfessional}</p>
                  </div>
                  
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                    <h4 className="font-semibold text-green-400 mb-2">With Professional Messaging:</h4>
                    <p className="text-gray-300 text-sm">{scenario.withProfessional}</p>
                  </div>
                  
                  <div className="p-3 bg-primary-blue/10 rounded-lg border border-primary-blue/30">
                    <h4 className="font-semibold text-primary-blue mb-2">Estimated Impact:</h4>
                    <p className="text-gray-300 text-sm font-bold">{scenario.estimatedSavings}</p>
                    <p className="text-gray-400 text-xs">{scenario.timeframe}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={goToBookDemo}
              className="bg-primary-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Calculate Your Custom ROI - Book Strategy Session
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Services Portfolio */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Professional Message Development Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive messaging solutions for every communication challenge your organization faces.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className={`bg-gradient-to-br ${service.bgColor} border ${service.borderColor} rounded-xl p-8 hover:border-primary-blue transition-all duration-300 hover:transform hover:-translate-y-2`}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <IconComponent size={48} className="text-primary-red flex-shrink-0" />
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-primary font-bold text-light-text">
                          {service.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          service.priority === 'URGENT' ? 'bg-red-500 text-white' :
                          service.priority === 'HIGH ROI' ? 'bg-green-500 text-white' :
                          'bg-blue-500 text-white'
                        }`}>
                          {service.priority}
                        </span>
                      </div>
                      <p className="text-primary-blue font-semibold text-lg mb-3">
                        {service.tagline}
                      </p>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-light-text mb-3">Core Services:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.services.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-primary-blue" />
                            <span className="text-gray-300 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-800/50 rounded-lg">
                        <h5 className="font-semibold text-light-text text-sm mb-1">Timeline:</h5>
                        <p className="text-primary-blue text-sm">{service.timeline}</p>
                      </div>
                      <div className="p-3 bg-gray-800/50 rounded-lg">
                        <h5 className="font-semibold text-light-text text-sm mb-1">Investment:</h5>
                        <p className="text-primary-blue text-sm">{service.investment}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-primary-blue">
                      <p className="text-primary-blue font-semibold text-sm mb-1">Success Example:</p>
                      <p className="text-gray-300 text-sm italic">"{service.successMetric}"</p>
                    </div>

                    <div className="p-3 bg-primary-red/10 rounded-lg">
                      <p className="text-primary-red font-semibold text-sm">
                        💡 {service.conversionHook}
                      </p>
                    </div>

                    <button 
                      onClick={goToBookDemo}
                      className="w-full bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      {service.ctaText} - Book Custom Strategy Session
                    </button>

                    {service.availability && (
                      <p className="text-primary-blue text-xs font-semibold text-center">
                        🎯 {service.availability}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Process Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              Our <span className="text-gradient">Proven Development Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach ensuring every message meets your strategic objectives and delivers results.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="bg-dark-background border border-gray-accents rounded-xl p-8 hover:border-primary-blue transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      <span className="text-primary-blue font-semibold text-sm bg-primary-blue/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-primary font-bold text-light-text mb-3">
                        {step.phase}
                      </h3>
                      <p className="text-gray-300 text-lg mb-6">
                        {step.description}
                      </p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-light-text mb-3">Key Activities:</h4>
                          <ul className="space-y-2">
                            {step.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                                <span className="text-gray-300 text-sm">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-light-text mb-3">Deliverables:</h4>
                          <ul className="space-y-2">
                            {step.deliverables.map((deliverable, delIndex) => (
                              <li key={delIndex} className="flex items-center space-x-2">
                                <CheckCircle size={16} className="text-primary-red" />
                                <span className="text-gray-300 text-sm">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="mb-6">
              <p className="text-primary-blue font-semibold">Full Transparency & Collaboration Throughout</p>
              <p className="text-primary-red font-semibold">Emergency Projects: Accelerated 48-Hour Timeline Available</p>
            </div>
            <button 
              onClick={goToBookDemo}
              className="bg-primary-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Experience Our Professional Process - Book Strategy Session
            </button>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
                Custom Solutions for <span className="text-gradient">Every Organization</span>
              </h2>
              <p className="text-xl text-gray-300">
                No two organizations are identical. Every solution is tailored to your specific needs and objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-primary font-bold mb-6 text-light-text">
                  Why Custom Solutions Deliver Better Results:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Target size={24} className="text-primary-blue mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-primary-blue font-semibold">Precision Targeting:</span>
                      <span className="text-gray-300 ml-2">Solutions designed for your specific audience and objectives</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <BarChart size={24} className="text-primary-red mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-primary-red font-semibold">Optimized Investment:</span>
                      <span className="text-gray-300 ml-2">Budget focused on your highest-priority communication needs</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap size={24} className="text-primary-blue mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-primary-blue font-semibold">Faster Implementation:</span>
                      <span className="text-gray-300 ml-2">Streamlined process focused on what matters most</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp size={24} className="text-primary-red mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-primary-red font-semibold">Measurable Impact:</span>
                      <span className="text-gray-300 ml-2">Success metrics aligned with your business objectives</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-primary font-bold mb-6 text-light-text">
                  Factors That Shape Your Custom Solution:
                </h3>
                <ul className="space-y-3 mb-8">
                  {customSolutionFactors.map((factor, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-primary-red" />
                      <span className="text-gray-300 text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-dark-background border border-gray-accents rounded-xl p-6">
                  <h4 className="text-lg font-primary font-bold text-light-text mb-4">
                    Your Strategy Session Includes:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {consultationIncludes.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle size={12} className="text-white" />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-3 bg-primary-red/10 rounded-lg mb-4">
                    <p className="text-primary-red font-semibold text-sm">
                      VALUE: Professional strategy consultation - Provided complimentary
                    </p>
                  </div>
                  
                  <button 
                    onClick={goToBookDemo}
                    className="w-full bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Book Your Custom Strategy Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Urgency Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-8">
              Don't Wait Until You <span className="text-gradient">Need Emergency Communication</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-dark-background border border-yellow-500/30 rounded-xl p-6">
                <h3 className="text-lg font-primary font-bold text-yellow-400 mb-4">Market Reality</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <Zap size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Organizations with professional messaging respond 75% faster to crises</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Zap size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Professional communication capabilities take 3-6 months to develop properly</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Zap size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Crisis communication failures cost organizations significantly</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-dark-background border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-lg font-primary font-bold text-blue-400 mb-4">Capacity Considerations</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <Clock size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Senior strategist availability limited to 3 new projects monthly</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Clock size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Emergency response clients receive priority scheduling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Clock size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Strategy sessions book 2-3 weeks in advance during peak periods</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-red/10 to-primary-blue/10 rounded-xl p-8 border border-gray-accents/30 mb-8">
              <h3 className="text-xl font-primary font-bold text-light-text mb-4">Risk-Free Assessment Guarantee</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-400" />
                    <span className="text-gray-300 text-sm">No-obligation strategy session</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-400" />
                    <span className="text-gray-300 text-sm">Professional consultation approach</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-400" />
                    <span className="text-gray-300 text-sm">Custom solutions for every budget</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-400" />
                    <span className="text-gray-300 text-sm">Immediate value in first session</span>
                  </li>
                </ul>
              </div>
            </div>

            <button 
              onClick={goToBookDemo}
              className="bg-primary-red hover:bg-red-700 text-white px-10 py-5 rounded-lg text-xl font-bold transition-all duration-300 hover:transform hover:scale-105"
            >
              Secure Your Strategy Session - Book Now
            </button>
            
            <p className="text-gray-400 text-sm mt-4">
              *Results vary by organization. Professional messaging impact depends on implementation and market factors.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue/10 to-primary-red/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-8">
              Your Next Message Deserves <span className="text-gradient">Professional Development</span>
            </h2>
            
            <div className="bg-dark-background/80 rounded-xl p-8 border border-gray-accents/30 mb-8">
              <h3 className="text-2xl font-primary font-bold text-light-text mb-6">
                What to Expect in Your Strategy Session:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <span className="font-semibold text-light-text">Communication Assessment</span>
                      <span className="text-gray-400 text-sm ml-2">(15 minutes)</span>
                      <p className="text-gray-300 text-xs">Current messaging effectiveness review</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <span className="font-semibold text-light-text">Opportunity Analysis</span>
                      <span className="text-gray-400 text-sm ml-2">(15 minutes)</span>
                      <p className="text-gray-300 text-xs">Improvement opportunities identification</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <span className="font-semibold text-light-text">Custom Strategy</span>
                      <span className="text-gray-400 text-sm ml-2">(20 minutes)</span>
                      <p className="text-gray-300 text-xs">Tailored recommendations for your situation</p>
                    </div>
                  </div>
                </div>
                <div className="text-left space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div>
                      <span className="font-semibold text-light-text">Implementation Plan</span>
                      <span className="text-gray-400 text-sm ml-2">(15 minutes)</span>
                      <p className="text-gray-300 text-xs">Practical next steps and timeline</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div>
                      <span className="font-semibold text-light-text">Investment Discussion</span>
                      <span className="text-gray-400 text-sm ml-2">(15 minutes)</span>
                      <p className="text-gray-300 text-xs">Options and investment ranges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-blue/10 rounded-xl p-6 border border-primary-blue/30 mb-8">
              <h3 className="text-lg font-primary font-bold text-light-text mb-4">
                Your Complimentary Consultation Includes:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <Trophy size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Professional communication audit</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Trophy size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Custom improvement recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Trophy size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">ROI projections and timeline</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <Trophy size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Industry best practice insights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Trophy size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Implementation roadmap</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Trophy size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Follow-up resource recommendations</span>
                  </li>
                </ul>
              </div>
              <p className="text-primary-blue font-semibold text-sm mt-4">
                VALUE: Professional consultation services - Provided complimentary
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-primary font-bold text-light-text">
                Ready to Transform Your Communication?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={goToBookDemo}
                  className="bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Calendar size={20} />
                  <span>Book Your Strategy Session</span>
                </button>
                <button 
                  onClick={scrollToContact}
                  className="bg-primary-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Discuss Your Needs</span>
                </button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-primary-blue font-semibold mb-3">
                Professional consultations available - Limited slots this month
              </p>
              <p className="text-gray-400 text-xs">
                <strong>Disclaimer:</strong> This consultation assesses your communication needs and provides professional recommendations. 
                Results vary by organization and implementation approach. No specific outcomes guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MessageDevelopment;