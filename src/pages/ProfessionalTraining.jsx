import React from 'react';
import { BookOpen, Users, Award, Clock, Video, FileText, Trophy, CheckCircle, Target, ArrowRight, Shield, Briefcase, Globe, Zap, Star, MessageCircle, Calendar } from 'lucide-react';
import CrisisReadinessAssessment from '../components/CrisisReadinessAssessment';
import ConversionPathRouter from '../components/ConversionPathRouter';
import { MarketUrgency, CapacityUrgency } from '../components/HonestUrgency';

const ProfessionalTraining = () => {
  const trainingSpecialties = [
    {
      icon: Users,
      title: 'Public Information Officers',
      description: 'Master the art of public communication and media relations with specialized PIO training.',
      highlights: [
        'Media interview techniques',
        'Press conference management',
        'Crisis messaging frameworks',
        'Digital communication strategies'
      ],
      audience: 'Government agencies, emergency services, public safety departments',
      outcomes: 'Confident, skilled PIOs ready for any communication challenge'
    },
    {
      icon: Shield,
      title: 'Public Affairs Officers',
      description: 'Develop expertise in strategic public affairs and stakeholder engagement.',
      highlights: [
        'Stakeholder relationship building',
        'Policy communication',
        'Community engagement strategies',
        'Government relations'
      ],
      audience: 'Military, federal agencies, government contractors',
      outcomes: 'Strategic communicators who build trust and understanding'
    },
    {
      icon: Briefcase,
      title: 'Corporate Communication',
      description: 'Transform your organization\'s internal and external communication capabilities.',
      highlights: [
        'Executive communication coaching',
        'Brand messaging alignment',
        'Internal communication systems',
        'Reputation management'
      ],
      audience: 'Fortune 500 companies, mid-size corporations, startups',
      outcomes: 'Unified communication that drives business results'
    },
    {
      icon: Globe,
      title: 'Public Administration Communications',
      description: 'Excel in citizen engagement and transparent government communication.',
      highlights: [
        'Citizen engagement strategies',
        'Transparent communication practices',
        'Public meeting facilitation',
        'Digital government communication'
      ],
      audience: 'City governments, county administrations, public utilities',
      outcomes: 'Trusted public servants who connect with communities'
    },
    {
      icon: Zap,
      title: 'Crisis Communications',
      description: 'Become the calm, clear voice your organization needs during critical moments.',
      highlights: [
        'Rapid response protocols',
        'Multi-channel crisis messaging',
        'Stakeholder coordination',
        'Post-crisis evaluation'
      ],
      audience: 'All sectors requiring crisis preparedness',
      outcomes: 'Crisis-ready professionals who protect and inform'
    },
    {
      icon: Target,
      title: 'Crisis Management',
      description: 'Lead your organization through any crisis with strategic communication leadership.',
      highlights: [
        'Crisis team leadership',
        'Strategic decision-making',
        'Resource coordination',
        'Recovery communication'
      ],
      audience: 'Senior executives, emergency managers, department heads',
      outcomes: 'Confident leaders who navigate crises successfully'
    }
  ];

  const trainingApproach = [
    {
      icon: Star,
      title: 'Real-World Scenarios',
      description: 'Train with actual crisis scenarios and communication challenges from our expert team\'s experience.',
      benefit: 'Practice makes perfect - be ready for anything'
    },
    {
      icon: Users,
      title: 'Expert-Led Instruction',
      description: 'Learn directly from professionals who have managed major crises and high-profile communications.',
      benefit: 'Learn from the best in the business'
    },
    {
      icon: Trophy,
      title: 'Hands-On Practice',
      description: 'Interactive workshops, simulations, and role-playing exercises that build confidence.',
      benefit: 'Build skills through doing, not just listening'
    },
    {
      icon: Zap,
      title: 'Immediate Application',
      description: 'Walk away with tools, templates, and strategies you can implement immediately.',
      benefit: 'See results from day one'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Track Record',
      stat: '500+',
      description: 'Professionals trained across government, corporate, and nonprofit sectors'
    },
    {
      icon: Clock,
      title: 'Rapid Deployment',
      stat: '48 Hours',
      description: 'Can deploy emergency training for active crisis situations'
    },
    {
      icon: Target,
      title: 'Success Rate',
      stat: '98%',
      description: 'Of trainees successfully apply skills in real-world situations'
    },
    {
      icon: Globe,
      title: 'Nationwide Reach',
      stat: '50 States',
      description: 'Training delivered across all 50 states and internationally'
    }
  ];

  const handleEmergencyContact = () => {
    // TODO: This will trigger the chat widget when implemented
    alert('Chat widget will be available soon. For immediate assistance, call 1-813-686-7496');
  };

  const scrollToContact = () => {
    window.location.href = '/book-demo';
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile First Design */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }} 
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-background/90 via-dark-background/80 to-primary-blue/20" />
        
        {/* Floating Elements - Hidden on mobile */}
        <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
          <BookOpen size={120} className="animate-float text-primary-blue" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 hidden lg:block">
          <Users size={100} className="animate-float-delayed text-primary-red" />
        </div>
        
        {/* Content - Mobile First */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Main Title - Mobile First */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-primary font-bold mb-4 sm:mb-6 leading-tight">
            Elite{' '}
            <span className="text-gradient-hero">Communication Training</span>
            {' '}That Saves Lives
          </h1>
          
          {/* Subtitle - Responsive */}
          <h2 className="text-lg sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8 font-light">
            When Crisis Strikes, Are Your Communicators Ready?
          </h2>
          
          {/* Value Proposition - Mobile Optimized */}
          <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-dark-background/70 rounded-xl border border-primary-red/30 backdrop-blur-sm max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4">
              <strong className="text-primary-red">Professional Training in 6 Critical Areas:</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="flex flex-col items-center space-y-1">
                <Users size={20} className="sm:w-6 sm:h-6 text-primary-blue" />
                <span className="text-gray-300 text-xs sm:text-sm">Public Information Officers</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Shield size={20} className="sm:w-6 sm:h-6 text-primary-red" />
                <span className="text-gray-300 text-xs sm:text-sm">Public Affairs Officers</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Briefcase size={20} className="sm:w-6 sm:h-6 text-primary-blue" />
                <span className="text-gray-300 text-xs sm:text-sm">Corporate Communication</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Globe size={20} className="sm:w-6 sm:h-6 text-primary-red" />
                <span className="text-gray-300 text-xs sm:text-sm">Public Administration</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Zap size={20} className="sm:w-6 sm:h-6 text-primary-blue" />
                <span className="text-gray-300 text-xs sm:text-sm">Crisis Communications</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Target size={20} className="sm:w-6 sm:h-6 text-primary-red" />
                <span className="text-gray-300 text-xs sm:text-sm">Crisis Management</span>
              </div>
            </div>
          </div>
          
          {/* Market Reality */}
          <div className="mb-6 sm:mb-8">
            <MarketUrgency 
              service="training" 
              message="Professional communication capabilities take 3-6 months to develop properly. Crisis-ready organizations respond 75% faster." 
            />
          </div>
          
          {/* Primary CTA - Mobile First */}
          <ConversionPathRouter variant="training" size="large" />
          
          {/* Trust Indicators - Mobile Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center mt-8">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-red">500+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Professionals Trained</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-blue">98%</div>
              <div className="text-gray-400 text-xs sm:text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-red">48hrs</div>
              <div className="text-gray-400 text-xs sm:text-sm">Emergency Deployment</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-blue">50</div>
              <div className="text-gray-400 text-xs sm:text-sm">States Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Readiness Assessment - Mobile First */}
      <CrisisReadinessAssessment />

      {/* Training Specialties - Mobile First */}
      <section className="py-16 sm:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold mb-4 sm:mb-6">
              <span className="text-gradient">Professional Training Specialties</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized training programs designed for the unique challenges of each communication role.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {trainingSpecialties.map((specialty, index) => {
              const IconComponent = specialty.icon;
              return (
                <div
                  key={index}
                  className="bg-dark-background border border-gray-accents rounded-xl p-4 sm:p-6 hover:border-primary-blue transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <div className="text-center mb-4 sm:mb-6">
                    <IconComponent size={40} className="sm:w-12 sm:h-12 text-primary-red mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-primary font-bold text-light-text mb-2">
                      {specialty.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="font-semibold text-light-text mb-2 text-sm sm:text-base">Training Focus:</h4>
                      <ul className="space-y-1">
                        {specialty.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-center space-x-2">
                            <CheckCircle size={14} className="sm:w-4 sm:h-4 text-primary-blue" />
                            <span className="text-gray-300 text-xs sm:text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-gray-600 pt-3 sm:pt-4">
                      <div className="text-xs text-gray-400 mb-2">
                        <strong>Ideal for:</strong> {specialty.audience}
                      </div>
                      <div className="text-xs sm:text-sm text-primary-blue font-semibold">
                        <strong>Outcome:</strong> {specialty.outcomes}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA in section - Mobile First */}
          <div className="text-center mt-8 sm:mt-12">
            <ConversionPathRouter variant="training" size="medium" showSecondary={false} />
          </div>
        </div>
      </section>

      {/* Why Choose Us - Mobile First */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold mb-4 sm:mb-6">
              Why <span className="text-gradient">CommSync Training</span> Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              When lives and reputations are on the line, you need training that delivers real results.
            </p>
          </div>

          {/* Stats Grid - Mobile First */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-dark-background border border-gray-accents rounded-xl p-4 sm:p-6 hover:border-primary-blue transition-all duration-300">
                    <IconComponent size={40} className="sm:w-12 sm:h-12 text-primary-red mx-auto mb-3 sm:mb-4" />
                    <div className="text-2xl sm:text-3xl font-bold text-primary-blue mb-2">{reason.stat}</div>
                    <h3 className="text-base sm:text-lg font-primary font-bold text-light-text mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Training Approach - Mobile First */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {trainingApproach.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <div
                  key={index}
                  className="bg-dark-background border border-gray-accents rounded-xl p-4 sm:p-6 hover:border-primary-blue transition-all duration-300"
                >
                  <IconComponent size={28} className="sm:w-8 sm:h-8 text-primary-blue mb-3" />
                  <h3 className="text-base sm:text-lg font-primary font-bold text-light-text mb-2">
                    {approach.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-3">
                    {approach.description}
                  </p>
                  <div className="text-primary-red font-semibold text-xs">
                    {approach.benefit}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Urgency CTA Section - Mobile First */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary-red/10 to-primary-blue/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold mb-4 sm:mb-6">
              Ready to <span className="text-gradient">Transform Your Team?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Every day you wait is another day your team isn't prepared. Professional crisis communication capabilities take months to develop properly.
            </p>

            {/* Capacity Constraints */}
            <div className="mb-6 sm:mb-8">
              <CapacityUrgency 
                service="training" 
                message="Next professional training cohort: 8 spots available, starts March 2024" 
              />
            </div>

            {/* Benefits Box - Mobile First */}
            <div className="bg-dark-background/50 rounded-xl p-4 sm:p-6 border border-primary-blue/30 mb-6 sm:mb-8 max-w-2xl mx-auto">
              <h3 className="text-base sm:text-lg font-bold text-light-text mb-3">Your Free Strategy Session Includes:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-left">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={14} className="sm:w-4 sm:h-4 text-primary-blue" />
                  <span className="text-gray-300 text-xs sm:text-sm">Training needs assessment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={14} className="sm:w-4 sm:h-4 text-primary-blue" />
                  <span className="text-gray-300 text-xs sm:text-sm">Custom program recommendations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={14} className="sm:w-4 sm:h-4 text-primary-blue" />
                  <span className="text-gray-300 text-xs sm:text-sm">ROI projections</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={14} className="sm:w-4 sm:h-4 text-primary-blue" />
                  <span className="text-gray-300 text-xs sm:text-sm">Implementation timeline</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Mobile First */}
            <ConversionPathRouter variant="training" size="large" />

            {/* Chat Support Info - Mobile First */}
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-primary-red/10 rounded-lg border border-primary-red/30 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2">
                <MessageCircle size={16} className="sm:w-5 sm:h-5 text-primary-red" />
                <span className="text-primary-red font-semibold text-sm sm:text-base">Need Immediate Training?</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">
                Chat support available for urgent training needs. Phone backup: 1-813-686-7496
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalTraining;