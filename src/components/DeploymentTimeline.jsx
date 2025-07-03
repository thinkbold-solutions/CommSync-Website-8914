import React, { useState } from 'react';
import { Clock, MapPin, Users, MessageCircle, AlertTriangle, CheckCircle, ArrowRight, Shield, Zap, Globe, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DeploymentTimeline = () => {
  const [selectedDeployment, setSelectedDeployment] = useState('hurricane');
  const navigate = useNavigate();

  const deploymentScenarios = [
    {
      id: 'hurricane',
      title: 'Hurricane Response Deployment',
      type: 'Natural Disaster',
      location: 'Gulf Coast Region',
      duration: '14 days active deployment',
      icon: Globe,
      description: 'Multi-state hurricane response coordination with federal, state, and local agencies',
      challenge: 'Coordinating communication across 12 agencies, 3 states, and multiple languages for evacuation and recovery efforts',
      timeline: [
        {
          time: 'T-72 hours',
          phase: 'Pre-Deployment Planning',
          activities: [
            'FEMA coordination center activation',
            'Multi-agency communication protocol establishment',
            'Stakeholder mapping and contact verification',
            'Message template preparation for multiple scenarios'
          ],
          decision_point: 'Unified messaging framework established across all participating agencies',
          expertise_applied: 'ICS communication protocols and multi-agency coordination experience'
        },
        {
          time: 'T-24 hours',
          phase: 'Evacuation Communication',
          activities: [
            'Multilingual evacuation messaging deployment',
            'Media briefing coordination across jurisdictions',
            'Social media monitoring and rapid response setup',
            'Community leader engagement and coordination'
          ],
          decision_point: 'Clear, consistent evacuation messaging across all channels and languages',
          expertise_applied: 'Crisis messaging frameworks and community engagement protocols'
        },
        {
          time: 'T-0 Impact',
          phase: 'Active Response Coordination',
          activities: [
            'Real-time incident communication management',
            'Media relations during active emergency',
            'Public safety message coordination',
            'Stakeholder update and coordination calls'
          ],
          decision_point: 'Maintained information accuracy and public confidence during peak crisis',
          expertise_applied: 'High-pressure crisis communication and media management'
        },
        {
          time: 'T+24 hours',
          phase: 'Recovery Communication',
          activities: [
            'Damage assessment communication',
            'Resource allocation messaging',
            'Community recovery information coordination',
            'Long-term recovery planning communication'
          ],
          decision_point: 'Transition from emergency response to recovery communication',
          expertise_applied: 'Recovery communication strategies and community engagement'
        }
      ]
    },
    {
      id: 'wildfire',
      title: 'Wildfire Emergency Deployment',
      type: 'Emergency Response',
      location: 'Western United States',
      duration: '21 days active deployment',
      icon: Zap,
      description: 'Rapid-spread wildfire communication coordination with evacuation management',
      challenge: 'Managing communication during rapidly changing fire conditions with multiple evacuation zones and community safety',
      timeline: [
        {
          time: 'T-0 Alert',
          phase: 'Immediate Response',
          activities: [
            'Rapid assessment and initial public notification',
            'Emergency services coordination',
            'Media alert and initial briefing',
            'Community notification system activation'
          ],
          decision_point: 'Immediate public safety messaging and media engagement',
          expertise_applied: 'Rapid response protocols and emergency notification systems'
        },
        {
          time: 'T+2 hours',
          phase: 'Evacuation Coordination',
          activities: [
            'Zone-based evacuation messaging',
            'Traffic and route communication',
            'Shelter information coordination',
            'Family reunification communication'
          ],
          decision_point: 'Clear evacuation guidance saves lives and prevents confusion',
          expertise_applied: 'Evacuation communication protocols and public safety messaging'
        },
        {
          time: 'T+6 hours',
          phase: 'Sustained Management',
          activities: [
            'Regular public updates and briefings',
            'Media relations and interview coordination',
            'Community meeting facilitation',
            'Resource and support communication'
          ],
          decision_point: 'Maintained community trust and cooperation throughout extended incident',
          expertise_applied: 'Sustained crisis communication and community engagement'
        },
        {
          time: 'T+72 hours',
          phase: 'Recovery Planning',
          activities: [
            'Re-entry communication planning',
            'Damage assessment information sharing',
            'Insurance and assistance program communication',
            'Long-term recovery coordination'
          ],
          decision_point: 'Successful transition to recovery and rebuilding phase',
          expertise_applied: 'Recovery communication and community rebuilding support'
        }
      ]
    },
    {
      id: 'industrial',
      title: 'Industrial Incident Response',
      type: 'Emergency Response',
      location: 'Industrial Region',
      duration: '10 days active deployment',
      icon: Shield,
      description: 'Chemical facility incident with community impact and environmental concerns',
      challenge: 'Balancing transparency with investigation needs while maintaining community trust and addressing environmental concerns',
      timeline: [
        {
          time: 'T-0 Incident',
          phase: 'Immediate Assessment',
          activities: [
            'Multi-agency response coordination',
            'Initial public safety assessment',
            'Media notification and initial statement',
            'Community notification system activation'
          ],
          decision_point: 'Rapid, accurate initial communication establishes credibility',
          expertise_applied: 'Industrial incident protocols and multi-agency coordination'
        },
        {
          time: 'T+30 minutes',
          phase: 'Public Safety Response',
          activities: [
            'Shelter-in-place or evacuation guidance',
            'Health and safety information dissemination',
            'Environmental monitoring communication',
            'Community concern addressing'
          ],
          decision_point: 'Clear public safety guidance and transparent health information',
          expertise_applied: 'Public health communication and environmental incident messaging'
        },
        {
          time: 'T+4 hours',
          phase: 'Investigation Communication',
          activities: [
            'Investigation process transparency',
            'Regulatory coordination and communication',
            'Community meeting planning',
            'Environmental monitoring results sharing'
          ],
          decision_point: 'Balanced transparency maintains trust during investigation',
          expertise_applied: 'Investigation communication and regulatory coordination'
        },
        {
          time: 'T+48 hours',
          phase: 'Long-term Recovery',
          activities: [
            'Environmental remediation communication',
            'Community health monitoring information',
            'Economic impact and support communication',
            'Prevention and improvement messaging'
          ],
          decision_point: 'Sustained community engagement supports long-term recovery',
          expertise_applied: 'Long-term recovery communication and community relations'
        }
      ]
    }
  ];

  const selectedScenario = deploymentScenarios.find(scenario => scenario.id === selectedDeployment);

  const certificationHighlights = [
    'FEMA ICS-300 Advanced ICS',
    'FEMA ICS-400 Advanced ICS Command',
    'Emergency Management Institute certifications',
    'Multi-agency coordination protocols',
    'International training and presentation experience'
  ];

  const goToBookDemo = () => {
    navigate('/book-demo');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
            <span className="text-gradient">Behind the Scenes: Real Deployment Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            See how FEMA-certified expertise and deployment experience guide strategic communication decisions
          </p>
          <div className="p-4 bg-primary-red/10 rounded-lg border border-primary-red/30 inline-block">
            <p className="text-primary-red font-semibold">
              🎖️ Based on actual deployments across hurricanes, wildfires, and emergency incidents
            </p>
          </div>
        </div>

        {/* Scenario Selection */}
        <div className="mb-16">
          <h3 className="text-2xl font-primary font-bold text-center mb-8">
            Select Deployment Scenario:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deploymentScenarios.map((scenario) => {
              const IconComponent = scenario.icon;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setSelectedDeployment(scenario.id)}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:transform hover:-translate-y-1 ${
                    selectedDeployment === scenario.id
                      ? 'border-primary-red bg-primary-red/10 shadow-lg'
                      : 'border-gray-accents bg-dark-background hover:border-primary-red'
                  }`}
                >
                  <IconComponent 
                    size={48} 
                    className={`mx-auto mb-4 ${
                      selectedDeployment === scenario.id ? 'text-primary-red' : 'text-gray-400'
                    }`} 
                  />
                  <h4 className="font-primary font-bold text-light-text mb-2">
                    {scenario.title}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="text-primary-blue">{scenario.type}</div>
                    <div className="text-gray-400">{scenario.location}</div>
                    <div className="text-gray-400">{scenario.duration}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Scenario Details */}
        <div className="mb-16">
          <div className="bg-dark-background border border-gray-accents rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-primary font-bold text-light-text mb-4">
                {selectedScenario.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {selectedScenario.description}
              </p>
              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30 max-w-3xl mx-auto">
                <div className="flex items-start space-x-3">
                  <AlertTriangle size={20} className="text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-yellow-400 font-semibold mb-1">Strategic Challenge:</div>
                    <div className="text-gray-300 text-sm">{selectedScenario.challenge}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              {selectedScenario.timeline.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Timeline connector */}
                  {index < selectedScenario.timeline.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-primary-red to-primary-blue"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    {/* Timeline marker */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Phase content */}
                    <div className="flex-1 bg-gray-800/50 rounded-lg p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock size={16} className="text-primary-blue" />
                            <span className="text-primary-blue font-semibold">{phase.time}</span>
                          </div>
                          <h4 className="text-xl font-primary font-bold text-light-text mb-2">
                            {phase.phase}
                          </h4>
                          <div className="p-3 bg-primary-blue/10 rounded-lg border border-primary-blue/30">
                            <div className="text-primary-blue font-semibold text-sm mb-1">
                              FEMA Expertise Applied:
                            </div>
                            <div className="text-gray-300 text-sm">
                              {phase.expertise_applied}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-light-text mb-3">Key Activities:</h5>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300 text-sm">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-light-text mb-3">Strategic Decision:</h5>
                          <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                            <div className="flex items-start space-x-2">
                              <CheckCircle size={16} className="text-green-400 flex-shrink-0 mt-1" />
                              <div className="text-green-300 text-sm">
                                {phase.decision_point}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FEMA Certification Highlights */}
        <div className="mb-16">
          <div className="bg-dark-background border border-primary-blue/30 rounded-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-primary font-bold text-light-text mb-4">
                FEMA-Certified Expertise
              </h3>
              <p className="text-gray-300">
                Our deployment experience is backed by comprehensive FEMA certifications and international training
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificationHighlights.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-primary-blue/10 rounded-lg">
                  <CheckCircle size={20} className="text-primary-blue flex-shrink-0" />
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-red/10 to-primary-blue/10 rounded-xl p-8 border border-gray-accents/30 mb-8">
            <h3 className="text-2xl font-primary font-bold text-light-text mb-4">
              Bring Deployment-Tested Expertise to Your Organization
            </h3>
            <p className="text-gray-300 mb-6">
              Our strategic consulting combines real-world deployment experience with FEMA-certified protocols to build communication capabilities that work when it matters most.
            </p>
            <ul className="text-sm text-gray-300 space-y-2 mb-6 max-w-2xl mx-auto">
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>Frameworks tested in hundreds of real incidents</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>FEMA-certified protocols and best practices</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>Multi-agency coordination expertise</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>Custom solutions for your specific challenges</span>
              </li>
            </ul>
          </div>
          
          <button
            onClick={goToBookDemo}
            className="group bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Apply This Expertise to Your Organization</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeploymentTimeline;