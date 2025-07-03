import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const PageHero = ({ 
  title, 
  subtitle, 
  description, 
  icon: IconComponent, 
  ctaText = "Get Started", 
  ctaAction,
  backgroundImage 
}) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If contact section not on current page, navigate to home
      window.location.href = '/#contact';
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-background/90 via-dark-background/80 to-primary-blue/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6" data-aos="fade-up">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-primary-red transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Icon */}
        {IconComponent && (
          <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
            <IconComponent size={80} className="mx-auto text-primary-red" />
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-primary font-bold mb-6 leading-tight" data-aos="fade-up" data-aos-delay="200">
          <span className="text-gradient-hero">
            {title}
          </span>
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light" data-aos="fade-up" data-aos-delay="300">
            {subtitle}
          </h2>
        )}

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed" data-aos="fade-up" data-aos-delay="400">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="500">
          <button 
            onClick={ctaAction || scrollToContact}
            className="group bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center space-x-2"
          >
            <span>{ctaText}</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
          
          <Link 
            to="/"
            className="group bg-transparent border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center justify-center space-x-2"
          >
            <span>View All Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageHero;