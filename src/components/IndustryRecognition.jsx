import React from 'react';
import {Award, Trophy, Shield, Globe, Star, Users, Medal, Crown} from 'lucide-react';

const IndustryRecognition = () => {
  const recognitionCategories = [
    {
      icon: Trophy,
      title: 'Emmy-Winning Journalists',
      description: 'Award-winning media professionals on our expert team',
      badge: 'Emmy Recognition',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      details: [
        'National broadcasting excellence',
        'Crisis reporting expertise',
        'Media relations mastery',
        'Public communication excellence'
      ]
    },
    {
      icon: Shield,
      title: 'Master Public Information Officers',
      description: 'Certified Master PIOs with national recognition',
      badge: 'Master PIO Certified',
      color: 'text-primary-blue',
      bgColor: 'bg-primary-blue/10',
      borderColor: 'border-primary-blue/30',
      details: [
        'FEMA Advanced ICS certification',
        'Multi-agency coordination expertise',
        'National emergency response experience',
        'Professional training leadership'
      ]
    },
    {
      icon: Award,
      title: 'Credentialed Public Administrators',
      description: 'Highly credentialed public administration experts',
      badge: 'Public Administration Excellence',
      color: 'text-primary-red',
      bgColor: 'bg-primary-red/10',
      borderColor: 'border-primary-red/30',
      details: [
        'Advanced public administration degrees',
        'Government communication specialization',
        'Policy communication expertise',
        'Public engagement innovation'
      ]
    },
    {
      icon: Globe,
      title: 'National Level Recognition',
      description: 'Recognized leaders in crisis communication',
      badge: 'National Recognition',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      details: [
        'International training presentations',
        'Convention speaking engagements',
        'Industry thought leadership',
        'Best practice development'
      ]
    }
  ];

  const teamExpertise = [
    {
      area: 'Crisis Communication',
      experience: '15+ Years',
      deployments: 'Hundreds of Incidents',
      certification: 'FEMA ICS Certified'
    },
    {
      area: 'Media Relations',
      experience: '20+ Years',
      deployments: 'National Campaigns',
      certification: 'Emmy Recognition'
    },
    {
      area: 'Public Administration',
      experience: '25+ Years',
      deployments: 'Multi-State Projects',
      certification: 'Advanced Degrees'
    },
    {
      area: 'Emergency Management',
      experience: '18+ Years',
      deployments: 'Federal Coordination',
      certification: 'Master PIO'
    }
  ];

  const professionalStandards = [
    {
      standard: 'FEMA ICS-300/400 Certification',
      description: 'Advanced Incident Command System training and certification'
    },
    {
      standard: 'Emmy Award Recognition',
      description: 'National television broadcasting excellence and journalism standards'
    },
    {
      standard: 'Master PIO Certification',
      description: 'Advanced public information officer credentials and expertise'
    },
    {
      standard: 'International Training Experience',
      description: 'Convention presentations and global best practice sharing'
    },
    {
      standard: 'Multi-State Deployment Experience',
      description: 'Real-world crisis response across diverse geographic regions'
    },
    {
      standard: 'Advanced Academic Credentials',
      description: 'Graduate-level education in public administration and communication'
    }
  ];

  return (
    <section className="py-20 bg-dark-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
            <Crown size={32} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
            <span className="text-gradient">Industry-Leading Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our team brings together the highest levels of professional recognition and real-world experience in crisis communication
          </p>
        </div>

        {/* Recognition Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-primary font-bold text-center mb-12 text-light-text">
            Professional Recognition & Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitionCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`${category.bgColor} border ${category.borderColor} rounded-xl p-6 hover:border-opacity-60 transition-all duration-300 hover:transform hover:-translate-y-1`}
                >
                  <IconComponent size={40} className={`${category.color} mb-4`} />
                  <h4 className="font-semibold text-light-text mb-2">{category.title}</h4>
                  <p className="text-gray-300 text-sm mb-3">{category.description}</p>
                  <div className={`inline-block px-3 py-1 ${category.bgColor} ${category.color} rounded-full text-xs font-semibold mb-4 border ${category.borderColor}`}>
                    {category.badge}
                  </div>
                  <ul className="space-y-1">
                    {category.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <Star size={12} className={category.color} />
                        <span className="text-gray-300 text-xs">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Expertise Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-primary font-bold text-center mb-12 text-light-text">
            Expertise Areas & Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamExpertise.map((expertise, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-accents rounded-xl p-6 text-center">
                <h4 className="font-bold text-primary-blue mb-4">{expertise.area}</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-primary-red">{expertise.experience}</div>
                    <div className="text-gray-400 text-xs">Professional Experience</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-light-text">{expertise.deployments}</div>
                    <div className="text-gray-400 text-xs">Real-World Application</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-blue">{expertise.certification}</div>
                    <div className="text-gray-400 text-xs">Professional Certification</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Standards */}
        <div className="mb-16">
          <h3 className="text-2xl font-primary font-bold text-center mb-12 text-light-text">
            Professional Standards & Certifications
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalStandards.map((standard, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-accents">
                  <Medal size={24} className="text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-light-text mb-1">{standard.standard}</h4>
                    <p className="text-gray-300 text-sm">{standard.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Credentials Matter */}
        <div className="bg-gradient-to-r from-primary-blue/10 to-primary-red/10 rounded-xl p-8 border border-gray-accents/30">
          <div className="text-center">
            <Users size={48} className="text-primary-blue mx-auto mb-6" />
            <h3 className="text-2xl font-primary font-bold text-light-text mb-4">
              Why Professional Credentials Matter in Crisis Communication
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-primary-blue mb-2">Proven Excellence</h4>
                  <p className="text-gray-300 text-sm">
                    Industry recognition validates expertise and commitment to professional standards
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-primary-red mb-2">Real-World Experience</h4>
                  <p className="text-gray-300 text-sm">
                    Credentials backed by actual deployment experience and successful outcomes
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-primary-blue mb-2">Continuous Learning</h4>
                  <p className="text-gray-300 text-sm">
                    Ongoing professional development ensures access to latest best practices
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

export default IndustryRecognition;