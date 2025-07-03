import React, { useState } from 'react';
import { Target, Users, Clock, MessageSquare, BarChart, Shield, ArrowRight, CheckCircle, Zap, Globe, Briefcase, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StrategicFrameworkVisualizer = () => {
  const [selectedOrgType, setSelectedOrgType] = useState('government');
  const [activePhase, setActivePhase] = useState(0);
  const navigate = useNavigate();

  const organizationTypes = [
    {
      id: 'government',
      name: 'Government Agency',
      icon: Shield,
      description: 'Municipal, county, state, and federal organizations',
      challenges: ['Multi-agency coordination', 'Public accountability', 'Political considerations', 'Regulatory compliance']
    },
    {
      id: 'emergency',
      name: 'Emergency Services',
      icon: Zap,
      description: 'Fire, police, EMS, and emergency management',
      challenges: ['Rapid response needs', 'Life safety priorities', 'Media management', 'Community confidence']
    },
    {
      id: 'corporate',
      name: 'Corporate',
      icon: Briefcase,
      description: 'Private sector organizations and enterprises',
      challenges: ['Reputation management', 'Stakeholder relations', 'Regulatory response', 'Business continuity']
    },
    {
      id: 'nonprofit',
      name: 'Nonprofit/NGO',
      icon: Globe,
      description: 'Non-profit organizations and NGOs',
      challenges: ['Resource constraints', 'Donor relations', 'Mission alignment', 'Community trust']
    }
  ];

  const frameworkPhases = [
    {
      id: 'assessment',
      title: 'Strategic Assessment',
      duration: '1-2 weeks',
      description: 'Comprehensive analysis of current communication capabilities and organizational context',
      icon: Target,
      deliverables: [
        'Communication capability audit',
        'Stakeholder mapping and analysis',
        'Risk assessment framework',
        'Baseline performance metrics'
      ],
      expertise: 'FEMA ICS protocols and deployment experience inform assessment methodology'
    },
    {
      id: 'design',
      title: 'Framework Design',
      duration: '2-3 weeks',
      description: 'Custom strategic framework development based on assessment findings',
      icon: Users,
      deliverables: [
        'Stakeholder engagement strategy',
        'Message architecture framework',
        'Communication channel strategy',
        'Crisis response protocols'
      ],
      expertise: 'Multi-agency coordination experience shapes framework design'
    },
    {
      id: 'implementation',
      title: 'Implementation Planning',
      duration: '1-2 weeks',
      description: 'Detailed implementation roadmap with timelines and resource allocation',
      icon: Clock,
      deliverables: [
        'Implementation timeline',
        'Resource allocation plan',
        'Training program design',
        'Success measurement framework'
      ],
      expertise: 'Real-world deployment logistics inform implementation planning'
    },
    {
      id: 'execution',
      title: 'Guided Execution',
      duration: '4-8 weeks',
      description: 'Hands-on support during framework implementation and team development',
      icon: MessageSquare,
      deliverables: [
        'Team training delivery',
        'Policy and procedure implementation',
        'System integration support',
        'Performance monitoring setup'
      ],
      expertise: 'Convention training experience ensures effective knowledge transfer'
    },
    {
      id: 'optimization',
      title: 'Continuous Optimization',
      duration: 'Ongoing',
      description: 'Regular review and refinement to ensure sustained effectiveness',
      icon: BarChart,
      deliverables: [
        'Performance analysis reports',
        'Framework refinements',
        'Advanced training modules',
        'Best practice integration'
      ],
      expertise: 'International presentation experience brings global best practices'
    }
  ];

  const getCustomizedFramework = (orgType) => {
    const baseFramework = frameworkPhases;
    const customizations = {
      government: {
        focus: 'Public accountability and multi-agency coordination',
        specializations: ['Public meeting facilitation', 'Regulatory communication', 'Political stakeholder management'],
        deployment_example: 'Hurricane response coordination across multiple agencies'
      },
      emergency: {
        focus: 'Rapid response and life safety communication',
        specializations: ['Incident command communication', 'Public warning systems', 'Media relations under pressure'],
        deployment_example: 'Wildfire evacuation communication and coordination'
      },
      corporate: {
        focus: 'Reputation protection and stakeholder confidence',
        specializations: ['Executive communication', 'Investor relations', 'Employee engagement'],
        deployment_example: 'Industrial incident response and recovery communication'
      },
      nonprofit: {
        focus: 'Mission-driven communication and community engagement',
        specializations: ['Donor communication', 'Volunteer coordination', 'Community outreach'],
        deployment_example: 'Disaster relief communication and volunteer coordination'
      }
    };

    return {
      framework: baseFramework,
      customization: customizations[orgType]
    };
  };

  const selectedOrg = organizationTypes.find(org => org.id === selectedOrgType);
  const customizedFramework = getCustomizedFramework(selectedOrgType);
  const selectedPhase = frameworkPhases[activePhase];

  const goToBookDemo = () => {
    navigate('/book-demo');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
            <span className="text-gradient">Strategic Framework Visualizer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            See how our FEMA-certified methodology adapts to your organization type
          </p>
          <div className="p-4 bg-primary-blue/10 rounded-lg border border-primary-blue/30 inline-block">
            <p className="text-primary-blue font-semibold">
              🎯 Based on deployment experience across government, emergency services, and private sector
            </p>
          </div>
        </div>

        {/* Organization Type Selection */}
        <div className="mb-16">
          <h3 className="text-2xl font-primary font-bold text-center mb-8">
            Select Your Organization Type:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {organizationTypes.map((org) => {
              const IconComponent = org.icon;
              return (
                <button
                  key={org.id}
                  onClick={() => setSelectedOrgType(org.id)}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:transform hover:-translate-y-1 ${
                    selectedOrgType === org.id
                      ? 'border-primary-blue bg-primary-blue/10 shadow-lg'
                      : 'border-gray-accents bg-dark-background hover:border-primary-blue'
                  }`}
                >
                  <IconComponent 
                    size={48} 
                    className={`mx-auto mb-4 ${
                      selectedOrgType === org.id ? 'text-primary-blue' : 'text-gray-400'
                    }`} 
                  />
                  <h4 className="font-primary font-bold text-light-text mb-2">
                    {org.name}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4">
                    {org.description}
                  </p>
                  {selectedOrgType === org.id && (
                    <div className="mt-4">
                      <div className="text-xs text-gray-400 mb-2">Common Challenges:</div>
                      <div className="space-y-1">
                        {org.challenges.map((challenge, index) => (
                          <div key={index} className="flex items-center space-x-1">
                            <div className="w-1 h-1 bg-primary-blue rounded-full"></div>
                            <span className="text-xs text-gray-300">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Customized Framework Display */}
        <div className="mb-16">
          <div className="bg-dark-background border border-gray-accents rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-primary font-bold text-light-text mb-4">
                Strategic Framework for {selectedOrg.name}
              </h3>
              <div className="p-4 bg-primary-red/10 rounded-lg border border-primary-red/30 max-w-2xl mx-auto">
                <p className="text-primary-red font-semibold mb-2">
                  Specialized Focus: {customizedFramework.customization.focus}
                </p>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Deployment Example: </span>
                  {customizedFramework.customization.deployment_example}
                </div>
              </div>
            </div>

            {/* Framework Phases Timeline */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {frameworkPhases.map((phase, index) => {
                  const IconComponent = phase.icon;
                  return (
                    <button
                      key={phase.id}
                      onClick={() => setActivePhase(index)}
                      className={`flex items-center space-x-3 px-6 py-3 rounded-lg border transition-all duration-300 ${
                        activePhase === index
                          ? 'border-primary-blue bg-primary-blue/10'
                          : 'border-gray-600 hover:border-primary-blue'
                      }`}
                    >
                      <IconComponent 
                        size={20} 
                        className={activePhase === index ? 'text-primary-blue' : 'text-gray-400'} 
                      />
                      <div className="text-left">
                        <div className={`font-semibold ${
                          activePhase === index ? 'text-primary-blue' : 'text-light-text'
                        }`}>
                          {phase.title}
                        </div>
                        <div className="text-xs text-gray-400">{phase.duration}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Phase Details */}
              <div className="bg-gray-800/50 rounded-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-primary font-bold text-light-text mb-3">
                      {selectedPhase.title}
                    </h4>
                    <p className="text-gray-300 mb-4">
                      {selectedPhase.description}
                    </p>
                    <div className="p-3 bg-primary-blue/10 rounded-lg border border-primary-blue/30">
                      <div className="text-primary-blue font-semibold text-sm mb-1">
                        FEMA-Certified Expertise:
                      </div>
                      <div className="text-gray-300 text-sm">
                        {selectedPhase.expertise}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-light-text mb-3">Key Deliverables:</h5>
                    <ul className="space-y-2">
                      {selectedPhase.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-primary-blue" />
                          <span className="text-gray-300 text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4">
                      <h6 className="font-semibold text-light-text mb-2">
                        {selectedOrg.name} Specializations:
                      </h6>
                      <ul className="space-y-1">
                        {customizedFramework.customization.specializations.map((spec, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                            <span className="text-gray-300 text-sm">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                <div className="text-green-400 font-semibold mb-2">
                  Framework Value for {selectedOrg.name}:
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✓ Customized for your sector's specific challenges</li>
                  <li>✓ Based on real-world deployment experience</li>
                  <li>✓ FEMA-certified protocols and best practices</li>
                  <li>✓ Proven across hundreds of incidents</li>
                </ul>
              </div>
              
              <button
                onClick={goToBookDemo}
                className="group bg-primary-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Get Your Custom Framework</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicFrameworkVisualizer;