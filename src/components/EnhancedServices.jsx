import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Briefcase, BookOpen, Megaphone, Target, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import PerformanceOptimizedButton from './PerformanceOptimizedButton';

const EnhancedServices = () => {
  const services = [
    {
      icon: Shield,
      title: 'Crisis Communications',
      description: 'Expert guidance for managing communications during critical incidents and emergencies.',
      link: '/crisis-communications',
      color: 'text-primary-red',
      gradient: 'from-red-500/10 to-red-600/5'
    },
    {
      icon: Users,
      title: 'PIO Community Network',
      description: 'Connect with fellow professionals, share resources, and access exclusive training materials.',
      link: '/pio-community',
      color: 'text-primary-blue',
      gradient: 'from-blue-500/10 to-blue-600/5'
    },
    {
      icon: Briefcase,
      title: 'Strategic Consulting',
      description: 'Comprehensive communication strategy development for organizations and agencies.',
      link: '/strategic-consulting',
      color: 'text-primary-red',
      gradient: 'from-red-500/10 to-red-600/5'
    },
    {
      icon: BookOpen,
      title: 'Professional Training',
      description: 'Hands-on workshops and certification programs for public information officers.',
      link: '/professional-training',
      color: 'text-primary-blue',
      gradient: 'from-blue-500/10 to-blue-600/5'
    },
    {
      icon: Megaphone,
      title: 'Media Relations',
      description: 'Build effective relationships with media and master press conference management.',
      link: '/media-relations',
      color: 'text-primary-red',
      gradient: 'from-red-500/10 to-red-600/5'
    },
    {
      icon: Target,
      title: 'Message Development',
      description: 'Craft clear, compelling messages that resonate with your target audiences.',
      link: '/message-development',
      color: 'text-primary-blue',
      gradient: 'from-blue-500/10 to-blue-600/5'
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold mb-4 sm:mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions for all your public information and strategic communication needs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
                className="group"
              >
                <div className={`
                  bg-gradient-to-br ${service.gradient} 
                  border border-gray-accents rounded-xl p-4 sm:p-6 
                  transition-all duration-300 ease-out will-change-transform
                  hover:border-primary-blue hover:shadow-xl
                  hover:-translate-y-2 hover:scale-[1.02]
                  focus-within:ring-2 focus-within:ring-primary-blue focus-within:ring-opacity-50
                `}>
                  <div className="mb-3 sm:mb-4">
                    <IconComponent 
                      size={40} 
                      className={`sm:w-12 sm:h-12 ${service.color} group-hover:text-primary-blue transition-colors duration-300`} 
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-primary font-semibold mb-2 sm:mb-3 text-light-text">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center space-x-2 text-primary-red hover:text-primary-blue transition-colors duration-300 font-medium text-sm sm:text-base group-hover:translate-x-1 transform"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} className="transition-transform duration-300" />
                  </Link>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnhancedServices;