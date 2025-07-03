import React from 'react';
import { ExternalLink, Briefcase, Code, Palette, ArrowRight, Users, Target, Zap } from 'lucide-react';

const PartnerOrganizations = () => {
  const partners = [
    {
      id: 'bold-thinkers-group',
      name: 'Bold Thinkers Group',
      website: 'www.boldthinkersgroup.com',
      url: 'https://boldthinkersgroup.com',
      badge: 'Strategic Partnership',
      icon: Briefcase,
      description: 'Strategic consulting and business development partnership',
      services: [
        'Strategic business consulting',
        'Leadership development',
        'Organizational transformation',
        'Executive coaching'
      ],
      collaboration: 'Joint strategic consulting projects and leadership development programs',
      color: 'text-primary-blue',
      bgColor: 'bg-primary-blue/10',
      borderColor: 'border-primary-blue/30'
    },
    {
      id: 'thinkbold-solutions',
      name: 'thinkBOLD Solutions',
      website: 'www.thinkbold.solutions',
      url: 'https://thinkbold.solutions',
      badge: 'Technology Solutions',
      icon: Code,
      description: 'Advanced technology solutions and digital transformation partner',
      services: [
        'Custom software development',
        'Digital transformation',
        'Technology consulting',
        'System integration'
      ],
      collaboration: 'Technology infrastructure and digital communication platform development',
      color: 'text-primary-red',
      bgColor: 'bg-primary-red/10',
      borderColor: 'border-primary-red/30'
    },
    {
      id: 'youconnect',
      name: 'YouConnect',
      website: 'www.youconnect.app',
      url: 'https://youconnect.app',
      badge: 'Website Design Partner',
      icon: Palette,
      description: 'Professional website design and digital presence partner',
      services: [
        'Website design and development',
        'Digital brand development',
        'User experience optimization',
        'Mobile app development'
      ],
      collaboration: 'Web presence and digital communication platform design',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    }
  ];

  const partnershipBenefits = [
    {
      icon: Target,
      title: 'Comprehensive Solutions',
      description: 'Our partner network enables us to provide complete end-to-end solutions for complex communication challenges.'
    },
    {
      icon: Zap,
      title: 'Accelerated Implementation',
      description: 'Partnerships allow for faster project delivery and implementation through specialized expertise.'
    },
    {
      icon: Users,
      title: 'Extended Expertise',
      description: 'Access to broader skill sets and specialized knowledge across multiple disciplines.'
    }
  ];

  const visitPartner = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
            <Users size={32} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
            <span className="text-gradient">Strategic Partner Network</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with industry-leading organizations to deliver comprehensive solutions for our clients
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Partner Organizations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => {
              const IconComponent = partner.icon;
              return (
                <div
                  key={partner.id}
                  className={`${partner.bgColor} border ${partner.borderColor} rounded-xl p-6 hover:border-opacity-60 transition-all duration-300 hover:transform hover:-translate-y-2`}
                >
                  {/* Partner Header */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${partner.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 border ${partner.borderColor}`}>
                      <IconComponent size={32} className={partner.color} />
                    </div>
                    <h3 className="text-xl font-primary font-bold text-light-text mb-2">
                      {partner.name}
                    </h3>
                    <div className={`inline-block px-3 py-1 ${partner.bgColor} ${partner.color} rounded-full text-xs font-semibold mb-3 border ${partner.borderColor}`}>
                      {partner.badge}
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      {partner.description}
                    </p>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-light-text mb-3">Core Services:</h4>
                    <ul className="space-y-2">
                      {partner.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 ${partner.color} rounded-full`}></div>
                          <span className="text-gray-300 text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Collaboration */}
                  <div className={`p-3 ${partner.bgColor} rounded-lg border ${partner.borderColor} mb-6`}>
                    <h4 className={`${partner.color} font-semibold text-sm mb-1`}>
                      Our Collaboration:
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {partner.collaboration}
                    </p>
                  </div>

                  {/* Visit Partner */}
                  <button
                    onClick={() => visitPartner(partner.url)}
                    className={`w-full ${partner.color} hover:text-white border border-current hover:bg-current px-4 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2`}
                  >
                    <span>Visit {partner.website}</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Partnership Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl font-primary font-bold text-center mb-12 text-light-text">
              Why Strategic Partnerships Matter
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <IconComponent size={48} className="text-primary-blue mx-auto mb-4" />
                    <h4 className="font-semibold text-light-text mb-3">{benefit.title}</h4>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Partnership Approach */}
          <div className="bg-gradient-to-r from-primary-blue/10 to-primary-red/10 rounded-xl p-8 border border-gray-accents/30 mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-primary font-bold text-light-text mb-6">
                Our Partnership Approach
              </h3>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary-blue mb-3">Collaborative Excellence</h4>
                    <p className="text-gray-300 text-sm">
                      We work closely with our partners to ensure seamless integration of services 
                      and the highest quality outcomes for our clients.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-red mb-3">Shared Values</h4>
                    <p className="text-gray-300 text-sm">
                      Our partners share our commitment to professional excellence, ethical practices, 
                      and delivering exceptional value to clients.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-blue mb-3">Complementary Expertise</h4>
                    <p className="text-gray-300 text-sm">
                      Each partnership brings unique capabilities that complement our core crisis 
                      communication and training expertise.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-red mb-3">Client-Focused Solutions</h4>
                    <p className="text-gray-300 text-sm">
                      All partnerships are designed to enhance our ability to serve clients with 
                      comprehensive, effective solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Opportunities */}
          <div className="text-center">
            <div className="p-6 bg-dark-background/50 rounded-xl border border-primary-blue/30 max-w-2xl mx-auto">
              <h3 className="text-xl font-primary font-bold text-light-text mb-4">
                Interested in Partnership?
              </h3>
              <p className="text-gray-300 mb-6">
                We're always looking for strategic partners who share our commitment to excellence 
                in crisis communication and professional development.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="bg-primary-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <span>Explore Partnership</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => window.location.href = '/book-demo'}
                  className="bg-transparent border border-primary-red text-primary-red hover:bg-primary-red hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Schedule Discussion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerOrganizations;