import React from 'react';
import { Award, Shield, Globe, Zap, Users, Clock, CheckCircle, Target } from 'lucide-react';

const TrustBuilder = () => {
  const credentials = [
    {
      icon: Shield,
      title: 'FEMA ICS-300/400 Certified',
      description: 'Advanced Incident Command System certifications',
      category: 'Emergency Management'
    },
    {
      icon: Globe,
      title: 'International Training Delivery',
      description: 'Convention presentations and global best practices',
      category: 'Global Expertise'
    },
    {
      icon: Zap,
      title: 'Multi-State Deployments',
      description: 'Hurricane, wildfire, and emergency response coordination',
      category: 'Field Experience'
    },
    {
      icon: Users,
      title: '500+ Professionals Trained',
      description: 'Across government, emergency services, and private sector',
      category: 'Training Excellence'
    }
  ];

  const deploymentHighlights = [
    {
      type: 'Hurricane Response',
      description: 'Multi-state coordination across 12 agencies',
      impact: 'Successful evacuation communication',
      icon: Globe
    },
    {
      type: 'Wildfire Emergency',
      description: '21-day active deployment management',
      impact: 'Community safety messaging',
      icon: Zap
    },
    {
      type: 'Industrial Incident',
      description: 'Multi-agency environmental response',
      impact: 'Transparent investigation communication',
      icon: Shield
    },
    {
      type: 'Training Programs',
      description: 'Convention and workshop delivery',
      impact: 'Professional development across sectors',
      icon: Users
    }
  ];

  const capabilityStats = [
    {
      stat: 'Hundreds',
      label: 'Incidents Managed',
      description: 'Real-world crisis communication experience'
    },
    {
      stat: '48 Hours',
      label: 'Emergency Deployment',
      description: 'Rapid response capability for active situations'
    },
    {
      stat: 'Multi-Agency',
      label: 'Coordination',
      description: 'Federal, state, and local collaboration experience'
    },
    {
      stat: '24/7',
      label: 'Crisis Support',
      description: 'Emergency consultation availability'
    }
  ];

  return (
    <section className="py-20 bg-dark-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
            <Award size={32} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
            <span className="text-gradient">Deployment-Tested Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our methodologies aren't theoretical—they're proven in the field across hundreds of real-world incidents.
          </p>
        </div>

        {/* Professional Credentials */}
        <div className="mb-16">
          <h3 className="text-2xl font-primary font-bold text-center mb-8 text-light-text">
            Professional Certifications & Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => {
              const IconComponent = credential.icon;
              return (
                <div key={index} className="bg-gray-900/50 border border-gray-accents rounded-xl p-6 hover:border-primary-blue transition-all duration-300">
                  <IconComponent size={40} className="text-primary-blue mb-4" />
                  <h4 className="font-semibold text-light-text mb-2">{credential.title}</h4>
                  <p className="text-gray-300 text-sm mb-3">{credential.description}</p>
                  <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue rounded-full text-xs font-semibold">
                    {credential.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deployment Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-primary font-bold text-center mb-8 text-light-text">
            Real-World Deployment Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deploymentHighlights.map((deployment, index) => {
              const IconComponent = deployment.icon;
              return (
                <div key={index} className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-red transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <IconComponent size={32} className="text-primary-red flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary-red mb-2">{deployment.type}</h4>
                      <p className="text-gray-300 text-sm mb-2">{deployment.description}</p>
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-400" />
                        <span className="text-green-300 text-sm font-semibold">{deployment.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Capability Statistics */}
        <div className="mb-16">
          <h3 className="text-2xl font-primary font-bold text-center mb-8 text-light-text">
            Our Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {capabilityStats.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-primary-red to-primary-blue rounded-xl p-6 mb-4">
                  <div className="text-3xl font-bold text-white mb-2">{capability.stat}</div>
                  <div className="text-white font-semibold">{capability.label}</div>
                </div>
                <p className="text-gray-300 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Standards */}
        <div className="bg-gradient-to-r from-primary-blue/10 to-primary-red/10 rounded-xl p-8 border border-gray-accents/30">
          <div className="text-center">
            <Target size={48} className="text-primary-blue mx-auto mb-6" />
            <h3 className="text-2xl font-primary font-bold text-light-text mb-4">
              Why Experience Matters in Crisis Communication
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-primary-blue mb-2">Field-Tested Protocols</h4>
                  <p className="text-gray-300 text-sm">
                    Every methodology has been tested in real emergencies, not just training scenarios.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-primary-red mb-2">Multi-Agency Coordination</h4>
                  <p className="text-gray-300 text-sm">
                    Experience coordinating communication across federal, state, and local agencies.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-primary-blue mb-2">Continuous Innovation</h4>
                  <p className="text-gray-300 text-sm">
                    Ongoing learning from international training and convention presentations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBuilder;