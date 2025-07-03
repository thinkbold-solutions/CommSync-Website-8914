import React, { useState } from 'react';
import { Target, ArrowRight, CheckCircle, AlertTriangle, Users, Briefcase, Shield, Globe, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceRecommendationEngine = () => {
  const [selectedOrgType, setSelectedOrgType] = useState('');
  const [selectedUrgency, setSelectedUrgency] = useState('');
  const [showRecommendation, setShowRecommendation] = useState(false);
  const navigate = useNavigate();

  const organizationTypes = [
    {
      id: 'government',
      name: 'Government/Municipal',
      icon: Shield,
      description: 'City, county, state agencies',
      commonNeeds: ['Public accountability', 'Multi-agency coordination', 'Crisis preparedness']
    },
    {
      id: 'emergency',
      name: 'Emergency Services',
      icon: AlertTriangle,
      description: 'Fire, police, EMS, emergency management',
      commonNeeds: ['Rapid response', 'Public safety messaging', 'Media management']
    },
    {
      id: 'corporate',
      name: 'Corporate/Private',
      icon: Briefcase,
      description: 'Private companies and enterprises',
      commonNeeds: ['Reputation management', 'Crisis response', 'Stakeholder relations']
    },
    {
      id: 'nonprofit',
      name: 'Nonprofit/NGO',
      icon: Globe,
      description: 'Non-profit organizations',
      commonNeeds: ['Community engagement', 'Donor relations', 'Mission communication']
    }
  ];

  const urgencyLevels = [
    {
      id: 'emergency',
      name: 'Active Crisis',
      description: 'Currently managing an incident',
      indicator: 'Immediate Response Needed',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
    },
    {
      id: 'urgent',
      name: 'Crisis Preparation',
      description: 'Need to be ready soon',
      indicator: 'Within 30 Days',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    },
    {
      id: 'strategic',
      name: 'Strategic Planning',
      description: 'Building long-term capabilities',
      indicator: 'Next 3-6 Months',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'development',
      name: 'Skill Development',
      description: 'Team training and growth',
      indicator: 'Ongoing Development',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    }
  ];

  const getRecommendation = () => {
    const recommendations = {
      'government-emergency': {
        primary: 'Emergency Crisis Support',
        secondary: 'Crisis Communications Training',
        action: 'emergency',
        phone: '1-813-686-7496',
        message: 'Immediate expert support for your active crisis situation.',
        route: '/crisis-communications'
      },
      'government-urgent': {
        primary: 'Crisis Readiness Assessment',
        secondary: 'Strategic Consulting',
        action: 'assessment',
        message: 'Rapid capability building to meet your timeline.',
        route: '/strategic-consulting'
      },
      'government-strategic': {
        primary: 'Strategic Consulting',
        secondary: 'Professional Training',
        action: 'demo',
        message: 'Comprehensive strategic framework development.',
        route: '/strategic-consulting'
      },
      'government-development': {
        primary: 'Professional Training',
        secondary: 'PIO Community Network',
        action: 'demo',
        message: 'Build your team\'s capabilities systematically.',
        route: '/professional-training'
      },
      'emergency-emergency': {
        primary: 'Emergency Crisis Support',
        secondary: 'Rapid Response Training',
        action: 'emergency',
        phone: '1-813-686-7496',
        message: 'Immediate deployment-ready support.',
        route: '/crisis-communications'
      },
      'emergency-urgent': {
        primary: 'Crisis Communications Training',
        secondary: 'Emergency Protocols',
        action: 'demo',
        message: '48-hour emergency training deployment available.',
        route: '/crisis-communications'
      },
      'emergency-strategic': {
        primary: 'Strategic Consulting',
        secondary: 'Crisis Communications Training',
        action: 'demo',
        message: 'Build comprehensive emergency communication capabilities.',
        route: '/strategic-consulting'
      },
      'emergency-development': {
        primary: 'Professional Training',
        secondary: 'Crisis Communications',
        action: 'demo',
        message: 'Specialized training for emergency professionals.',
        route: '/professional-training'
      },
      'corporate-emergency': {
        primary: 'Emergency Crisis Support',
        secondary: 'Reputation Management',
        action: 'emergency',
        phone: '1-813-686-7496',
        message: 'Immediate corporate crisis communication support.',
        route: '/crisis-communications'
      },
      'corporate-urgent': {
        primary: 'Strategic Consulting',
        secondary: 'Message Development',
        action: 'demo',
        message: 'Rapid strategic communication framework.',
        route: '/strategic-consulting'
      },
      'corporate-strategic': {
        primary: 'Strategic Consulting',
        secondary: 'Professional Training',
        action: 'demo',
        message: 'Comprehensive corporate communication strategy.',
        route: '/strategic-consulting'
      },
      'corporate-development': {
        primary: 'Professional Training',
        secondary: 'Media Relations',
        action: 'demo',
        message: 'Build internal communication capabilities.',
        route: '/professional-training'
      },
      'nonprofit-emergency': {
        primary: 'Emergency Crisis Support',
        secondary: 'Community Communication',
        action: 'emergency',
        phone: '1-813-686-7496',
        message: 'Immediate crisis support for your organization.',
        route: '/crisis-communications'
      },
      'nonprofit-urgent': {
        primary: 'Message Development',
        secondary: 'Strategic Consulting',
        action: 'demo',
        message: 'Rapid message development and strategy.',
        route: '/message-development'
      },
      'nonprofit-strategic': {
        primary: 'Strategic Consulting',
        secondary: 'Community Engagement',
        action: 'demo',
        message: 'Strategic approach to mission communication.',
        route: '/strategic-consulting'
      },
      'nonprofit-development': {
        primary: 'Professional Training',
        secondary: 'PIO Community Network',
        action: 'demo',
        message: 'Build your communication team\'s skills.',
        route: '/professional-training'
      }
    };

    return recommendations[`${selectedOrgType}-${selectedUrgency}`] || {
      primary: 'Strategic Consultation',
      secondary: 'Professional Assessment',
      action: 'demo',
      message: 'Let\'s discuss your specific needs.',
      route: '/strategic-consulting'
    };
  };

  const handleGetRecommendation = () => {
    if (selectedOrgType && selectedUrgency) {
      setShowRecommendation(true);
    }
  };

  const handleTakeAction = () => {
    const recommendation = getRecommendation();
    
    if (recommendation.action === 'emergency') {
      window.open('tel:+18136867496', '_self');
    } else if (recommendation.action === 'assessment') {
      // Scroll to assessment on current page
      const element = document.getElementById('assessment');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If no assessment on current page, go to homepage assessment
        window.location.href = '/#assessment';
      }
    } else {
      // Navigate to the recommended service page
      navigate(recommendation.route);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLearnMore = () => {
    const recommendation = getRecommendation();
    navigate(recommendation.route);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleBookDemo = () => {
    navigate('/book-demo');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const recommendation = getRecommendation();
  const selectedOrgData = organizationTypes.find(org => org.id === selectedOrgType);
  const selectedUrgencyData = urgencyLevels.find(urgency => urgency.id === selectedUrgency);

  return (
    <section className="py-16 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Target size={32} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-primary font-bold mb-4">
              <span className="text-gradient">Find Your Starting Point</span>
            </h2>
            <p className="text-xl text-gray-300">
              Get personalized service recommendations based on your organization and timeline
            </p>
          </div>

          {!showRecommendation ? (
            <div className="space-y-8">
              {/* Organization Type Selection */}
              <div>
                <h3 className="text-xl font-primary font-bold mb-6 text-center">
                  What type of organization are you?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {organizationTypes.map((org) => {
                    const IconComponent = org.icon;
                    return (
                      <button
                        key={org.id}
                        onClick={() => setSelectedOrgType(org.id)}
                        className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                          selectedOrgType === org.id
                            ? 'border-primary-blue bg-primary-blue/10 shadow-lg'
                            : 'border-gray-accents bg-dark-background hover:border-primary-blue/50'
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <IconComponent 
                            size={32} 
                            className={selectedOrgType === org.id ? 'text-primary-blue' : 'text-gray-400'} 
                          />
                          <div>
                            <h4 className="font-semibold text-light-text mb-2">{org.name}</h4>
                            <p className="text-gray-300 text-sm mb-3">{org.description}</p>
                            {selectedOrgType === org.id && (
                              <div className="space-y-1">
                                <div className="text-xs text-gray-400">Common needs:</div>
                                {org.commonNeeds.map((need, index) => (
                                  <div key={index} className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                                    <span className="text-xs text-gray-300">{need}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Urgency Level Selection */}
              {selectedOrgType && (
                <div>
                  <h3 className="text-xl font-primary font-bold mb-6 text-center">
                    What's your timeline?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {urgencyLevels.map((urgency) => (
                      <button
                        key={urgency.id}
                        onClick={() => setSelectedUrgency(urgency.id)}
                        className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                          selectedUrgency === urgency.id
                            ? `${urgency.borderColor} ${urgency.bgColor} shadow-lg`
                            : 'border-gray-accents bg-dark-background hover:border-primary-blue/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-light-text">{urgency.name}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${urgency.bgColor} ${urgency.color}`}>
                            {urgency.indicator}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{urgency.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Get Recommendation Button */}
              {selectedOrgType && selectedUrgency && (
                <div className="text-center">
                  <button
                    onClick={handleGetRecommendation}
                    className="bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center space-x-2"
                  >
                    <span>Get My Recommendation</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Recommendation Display
            <div className="bg-dark-background border border-gray-accents rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-primary font-bold text-light-text mb-2">
                  Your Personalized Recommendation
                </h3>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <span>{selectedOrgData?.name}</span>
                  <span>•</span>
                  <span className={selectedUrgencyData?.color}>{selectedUrgencyData?.indicator}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-primary-blue/10 rounded-lg border border-primary-blue/30">
                  <h4 className="font-semibold text-primary-blue mb-2">Recommended Starting Point:</h4>
                  <p className="text-light-text font-semibold text-lg">{recommendation.primary}</p>
                </div>
                <div className="p-6 bg-gray-800/50 rounded-lg">
                  <h4 className="font-semibold text-gray-400 mb-2">Follow-up Service:</h4>
                  <p className="text-gray-300">{recommendation.secondary}</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-red/10 to-primary-blue/10 rounded-lg p-6 mb-6">
                <p className="text-gray-300 text-center">
                  <strong className="text-primary-blue">Why this recommendation:</strong> {recommendation.message}
                </p>
              </div>

              <div className="text-center space-y-4">
                {recommendation.action === 'emergency' ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                      <p className="text-red-400 font-semibold mb-2">🚨 Emergency Crisis Support Available</p>
                      <p className="text-gray-300 text-sm">Immediate expert consultation for active crisis situations</p>
                    </div>
                    <button
                      onClick={handleTakeAction}
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center space-x-2"
                    >
                      <Phone size={20} />
                      <span>Call Emergency Hotline Now</span>
                    </button>
                    <p className="text-red-400 font-mono text-sm">{recommendation.phone}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <button
                      onClick={handleTakeAction}
                      className="bg-primary-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center space-x-2"
                    >
                      <span>Get Started Now</span>
                      <ArrowRight size={20} />
                    </button>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={handleLearnMore}
                        className="bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                      >
                        Learn More About This Service
                      </button>
                      <button
                        onClick={handleBookDemo}
                        className="bg-transparent border border-primary-red text-primary-red hover:bg-primary-red hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                      >
                        Book Strategy Session
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex justify-center space-x-4 text-sm">
                  <button
                    onClick={() => setShowRecommendation(false)}
                    className="text-gray-400 hover:text-light-text transition-colors duration-300"
                  >
                    ← Back to Selection
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className="text-primary-blue hover:text-primary-red transition-colors duration-300"
                  >
                    Discuss Custom Needs →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceRecommendationEngine;