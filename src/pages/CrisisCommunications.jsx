import React from 'react';
import { Shield, Clock, Users, AlertTriangle, CheckCircle, Target, MessageCircle, Globe2, MessageSquare, Zap, Activity, Award, FileText, HeadphonesIcon, ArrowRight, BookOpen, Download, Star, Trophy, TrendingUp, Briefcase, Calendar, Rocket, Brain, Settings, Gauge, Timer, Crown } from 'lucide-react';
import CrisisReadinessAssessmentTool from '../components/CrisisReadinessAssessmentTool';
import ConversionPathRouter from '../components/ConversionPathRouter';
import { MarketUrgency, CapacityUrgency, EmergencyUrgency } from '../components/HonestUrgency';

const CrisisCommunications = () => {
  const trainingServices = [
    {
      icon: Shield,
      title: 'Crisis Communication Training',
      tagline: 'Be Ready Before Crisis Strikes',
      description: 'Professional certification in crisis communication protocols, media management, and stakeholder coordination.',
      features: [
        'PIO crisis response certification',
        'High-pressure media interview training',
        'Multi-stakeholder coordination protocols',
        'Real-time message development'
      ],
      timeline: '2-5 days intensive',
      investment: 'Custom pricing based on scope',
      outcomes: 'Certified crisis communicators ready for any scenario',
      ctaText: 'Get Team Certified',
      highlight: 'Most Popular Training'
    },
    {
      icon: Crown,
      title: 'Crisis Management Leadership',
      tagline: 'Lead Through Any Crisis',
      description: 'Executive-level training for senior leaders who must guide organizations through crisis situations.',
      features: [
        'Executive crisis decision-making',
        'Crisis team coordination and leadership',
        'Recovery communication planning',
        'Board and stakeholder communication'
      ],
      timeline: '3-7 days comprehensive',
      investment: 'Executive-level investment',
      outcomes: 'Crisis-ready leaders who inspire confidence',
      ctaText: 'Develop Leadership',
      highlight: 'Executive Level'
    },
    {
      icon: Rocket,
      title: 'Emergency Response Protocols',
      tagline: 'Rapid Deployment Ready',
      description: 'Intensive training in rapid response procedures and emergency communication deployment.',
      features: [
        'Rapid deployment procedures',
        'Real-time communication systems',
        'Multi-agency coordination',
        'Emergency alert systems'
      ],
      timeline: '1-3 days focused',
      investment: 'Streamlined investment',
      outcomes: 'Teams that respond in minutes, not hours',
      ctaText: 'Build Rapid Response',
      highlight: 'Quick Deploy'
    }
  ];

  const managementServices = [
    {
      icon: MessageCircle,
      title: 'Active Crisis Response',
      tagline: 'Expert Support When You Need It Most',
      description: 'Immediate chat support and expert consultation during active crisis situations.',
      features: [
        'Immediate chat consultation available',
        'Expert crisis team guidance',
        'Real-time message development',
        'Phone backup support available'
      ],
      timeline: 'Immediate response',
      investment: 'Chat consultation available now',
      outcomes: 'Expert guidance through active crisis',
      ctaText: 'Start Chat Support',
      highlight: 'Chat Available'
    },
    {
      icon: Settings,
      title: 'Crisis Preparedness Planning',
      tagline: 'Build Your Crisis Foundation',
      description: 'Comprehensive crisis communication plan development and organizational preparedness assessment.',
      features: [
        'Custom crisis communication plans',
        'Response protocol development',
        'Team structure and training design',
        'Testing and simulation programs'
      ],
      timeline: '4-8 weeks',
      investment: 'Strategic investment',
      outcomes: 'Complete crisis preparedness framework',
      ctaText: 'Build Preparedness',
      highlight: 'Comprehensive'
    },
    {
      icon: TrendingUp,
      title: 'Post-Crisis Recovery',
      tagline: 'Rebuild Trust and Confidence',
      description: 'Strategic communication support for reputation recovery and stakeholder re-engagement after crisis.',
      features: [
        'Reputation recovery planning',
        'Stakeholder re-engagement strategies',
        'Lessons learned integration',
        'Long-term trust rebuilding'
      ],
      timeline: '2-6 months',
      investment: 'Recovery-focused investment',
      outcomes: 'Stronger organization post-crisis',
      ctaText: 'Plan Recovery',
      highlight: 'Trust Rebuilding'
    }
  ];

  const handleEmergencyContact = () => {
    // TODO: This will trigger the chat widget when implemented
    alert('Chat widget will be available soon. For immediate assistance, call 1-813-686-7496');
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
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`
          }} 
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-background/95 via-primary-red/5 to-dark-background/90" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-5">
          <Shield size={300} className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-primary-red animate-pulse" />
          <Clock size={200} className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 text-primary-blue animate-float" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-primary font-bold mb-6 leading-tight">
            Crisis Communication{' '}
            <span className="text-gradient-hero">Training</span>
            {' '}+{' '}
            <span className="text-gradient-hero">Management</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Be Ready Before Crisis Strikes • Expert Support When It Does
          </h2>
          
          {/* Dual Value Proposition */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-dark-background/70 rounded-xl border border-primary-blue/30 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <BookOpen size={24} className="text-primary-blue" />
                <span className="text-primary-blue font-semibold">Crisis Training</span>
              </div>
              <p className="text-gray-300 text-sm">
                Professional certification and skill development for crisis communication readiness
              </p>
            </div>
            <div className="p-6 bg-dark-background/70 rounded-xl border border-primary-red/30 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Shield size={24} className="text-primary-red" />
                <span className="text-primary-red font-semibold">Crisis Management</span>
              </div>
              <p className="text-gray-300 text-sm">
                Immediate chat support and expert guidance during active crisis situations
              </p>
            </div>
          </div>
          
          {/* Market Reality */}
          <div className="mb-8">
            <MarketUrgency 
              service="emergency" 
              message="Crisis communication failures cost organizations $100K+ on average. Professional capabilities take 3-6 months to develop." 
            />
          </div>
          
          {/* Primary CTA */}
          <ConversionPathRouter variant="emergency" size="large" />
          
          {/* Emergency Support Notice */}
          <div className="mt-8">
            <EmergencyUrgency />
          </div>
        </div>
      </section>

      {/* Crisis Readiness Assessment Tool */}
      <CrisisReadinessAssessmentTool />

      {/* Training vs Management Services */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Training + Management Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive crisis communication solutions: Build readiness through training, get expert support during crisis.
            </p>
          </div>

          {/* Training Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-primary font-bold mb-4 text-primary-blue">
                Crisis Communication Training
              </h3>
              <p className="text-lg text-gray-300">
                Professional development and certification programs
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {trainingServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-blue transition-all duration-300 hover:transform hover:-translate-y-2"
                  >
                    <div className="text-center mb-6">
                      <div className="relative inline-block mb-4">
                        <IconComponent size={48} className="text-primary-blue" />
                        {service.highlight && (
                          <span className="absolute -top-2 -right-2 bg-primary-red text-white px-2 py-1 rounded-full text-xs font-bold">
                            {service.highlight}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-primary font-bold text-light-text mb-2">
                        {service.title}
                      </h4>
                      <p className="text-primary-blue font-semibold text-sm mb-3">
                        {service.tagline}
                      </p>
                      <p className="text-gray-300 text-sm mb-4">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-light-text mb-2">Training Includes:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle size={14} className="text-primary-blue" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        <div className="p-3 bg-gray-800/50 rounded-lg">
                          <div className="text-xs text-gray-400 mb-1">Timeline:</div>
                          <div className="text-primary-blue font-semibold text-sm">{service.timeline}</div>
                        </div>
                        <div className="p-3 bg-gray-800/50 rounded-lg">
                          <div className="text-xs text-gray-400 mb-1">Investment:</div>
                          <div className="text-primary-blue font-semibold text-sm">{service.investment}</div>
                        </div>
                      </div>

                      <div className="p-3 bg-primary-blue/10 rounded-lg border-l-4 border-primary-blue">
                        <div className="text-xs text-gray-400 mb-1">Outcome:</div>
                        <div className="text-primary-blue font-semibold text-sm">{service.outcomes}</div>
                      </div>

                      <button
                        onClick={goToBookDemo}
                        className="w-full bg-primary-blue hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300"
                      >
                        {service.ctaText}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Management Services */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-primary font-bold mb-4 text-primary-red">
                Crisis Management Services
              </h3>
              <p className="text-lg text-gray-300">
                Expert support and consultation during active crisis situations
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {managementServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-red transition-all duration-300 hover:transform hover:-translate-y-2"
                  >
                    <div className="text-center mb-6">
                      <div className="relative inline-block mb-4">
                        <IconComponent size={48} className="text-primary-red" />
                        {service.highlight && (
                          <span className="absolute -top-2 -right-2 bg-primary-blue text-white px-2 py-1 rounded-full text-xs font-bold">
                            {service.highlight}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-primary font-bold text-light-text mb-2">
                        {service.title}
                      </h4>
                      <p className="text-primary-red font-semibold text-sm mb-3">
                        {service.tagline}
                      </p>
                      <p className="text-gray-300 text-sm mb-4">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-light-text mb-2">Service Includes:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle size={14} className="text-primary-red" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        <div className="p-3 bg-gray-800/50 rounded-lg">
                          <div className="text-xs text-gray-400 mb-1">Response Time:</div>
                          <div className="text-primary-red font-semibold text-sm">{service.timeline}</div>
                        </div>
                        <div className="p-3 bg-gray-800/50 rounded-lg">
                          <div className="text-xs text-gray-400 mb-1">Consultation:</div>
                          <div className="text-primary-red font-semibold text-sm">{service.investment}</div>
                        </div>
                      </div>

                      <div className="p-3 bg-primary-red/10 rounded-lg border-l-4 border-primary-red">
                        <div className="text-xs text-gray-400 mb-1">Outcome:</div>
                        <div className="text-primary-red font-semibold text-sm">{service.outcomes}</div>
                      </div>

                      <button
                        onClick={service.title === 'Active Crisis Response' ? handleEmergencyContact : goToBookDemo}
                        className="w-full bg-primary-red hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300"
                      >
                        {service.ctaText}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red/10 to-primary-blue/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              Don't Wait for Crisis to <span className="text-gradient">Test Your Readiness</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Professional crisis communication capabilities take months to develop. Start building your readiness today.
            </p>

            {/* Capacity Constraint */}
            <div className="mb-8">
              <CapacityUrgency 
                service="emergency" 
                message="Emergency deployment teams: Priority scheduling for organizations in crisis preparation phase" 
              />
            </div>

            <div className="bg-dark-background/50 rounded-xl p-6 border border-primary-blue/30 mb-8">
              <h3 className="text-lg font-primary font-bold text-light-text mb-4">
                Take Action Today:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-left space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Get crisis readiness assessment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Identify preparation gaps</span>
                  </div>
                </div>
                <div className="text-left space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Build team capabilities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Establish emergency support</span>
                  </div>
                </div>
              </div>
            </div>

            <ConversionPathRouter variant="emergency" size="large" />

            <div className="mt-8">
              <EmergencyUrgency />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrisisCommunications;