import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmergencyBanner from './EmergencyBanner';
import ConversionPathRouter from './ConversionPathRouter';

const Hero = () => {
  return (
    <div className="relative">
      {/* Header takes top-most position (z-[60]) */}
      
      {/* Emergency Banner positioned below header - ONLY ON HOME PAGE */}
      <div className="fixed top-16 sm:top-20 left-0 right-0 z-[40]">
        <EmergencyBanner 
          show={true} 
          message="Active Crisis Situation?" 
          subMessage="Get immediate expert support" 
          variant="emergency" 
        />
      </div>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`
          }} 
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-background/90 via-dark-background/80 to-primary-blue/20" />
        
        {/* Content - Mobile First - Add top padding to account for header + banner */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-32 sm:pt-36">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-primary font-bold mb-4 sm:mb-6 leading-tight">
            Expert{' '}
            <span className="text-gradient-hero">PIO Training</span>
            {' '}and Strategic{' '}
            <span className="text-gradient-hero">Communications</span>
            {' '}Consulting
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto font-light">
            Forged in crisis, focused on clarity. FEMA-certified expertise and deployment-tested methodologies for public information officers and organizations.
          </p>
          
          {/* Authority Indicators */}
          <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-dark-background/70 rounded-xl border border-primary-blue/30 backdrop-blur-sm">
            <p className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4">
              <strong className="text-primary-blue">FEMA-Certified • Deployment-Tested • Crisis-Ready</strong>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary-red">500+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Professionals Trained</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary-blue">Hundreds</div>
                <div className="text-gray-400 text-xs sm:text-sm">Incidents Managed</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary-red">24/7</div>
                <div className="text-gray-400 text-xs sm:text-sm">Crisis Support</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary-blue">Multi-State</div>
                <div className="text-gray-400 text-xs sm:text-sm">Deployments</div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <ConversionPathRouter variant="default" size="large" />
          
          {/* Professional Value Indicator */}
          <div className="mt-8 p-4 bg-primary-blue/10 rounded-lg border border-primary-blue/30 max-w-lg mx-auto">
            <p className="text-primary-blue font-semibold text-sm">
              💡 Complimentary strategic consultation typically valued at $500+ in the industry
            </p>
          </div>
        </div>
        
        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-light-text/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-light-text/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;