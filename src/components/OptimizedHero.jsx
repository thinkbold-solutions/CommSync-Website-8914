import React, { Suspense, lazy } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import PerformanceOptimizedButton from './PerformanceOptimizedButton';
import AnimatedCounter from './AnimatedCounter';

// Lazy load heavy components
const EmergencyBanner = lazy(() => import('./EmergencyBanner'));
const ConversionPathRouter = lazy(() => import('./ConversionPathRouter'));

const OptimizedHero = () => {
  return (
    <div className="relative">
      {/* Emergency Banner - Lazy loaded */}
      <Suspense fallback={null}>
        <div className="fixed top-16 sm:top-20 left-0 right-0 z-[40]">
          <EmergencyBanner 
            show={true} 
            message="Active Crisis Situation?" 
            subMessage="Get immediate expert support" 
            variant="emergency" 
          />
        </div>
      </Suspense>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Optimized Background - No fixed attachment on mobile */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 will-change-transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
            backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-background/90 via-dark-background/80 to-primary-blue/20" />

        {/* Content - Staggered animations */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-32 sm:pt-36">
          
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-primary font-bold mb-4 sm:mb-6 leading-tight">
              Expert{' '}
              <span className="text-gradient-hero">PIO Training</span>
              {' '}and Strategic{' '}
              <span className="text-gradient-hero">Communications</span>
              {' '}Consulting
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto font-light">
              Forged in crisis, focused on clarity. FEMA-certified expertise and deployment-tested methodologies for public information officers and organizations.
            </p>
          </AnimatedSection>

          {/* Authority Indicators with Animated Counters */}
          <AnimatedSection animation="scale" delay={600}>
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-dark-background/70 rounded-xl border border-primary-blue/30 backdrop-blur-sm">
              <p className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4">
                <strong className="text-primary-blue">FEMA-Certified • Deployment-Tested • Crisis-Ready</strong>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-primary-red">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">Professionals Trained</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-primary-blue">
                    <AnimatedCounter end="Hundreds" />
                  </div>
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
          </AnimatedSection>

          {/* CTA Buttons - Lazy loaded */}
          <AnimatedSection animation="fade-up" delay={800}>
            <Suspense fallback={
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-primary-red text-white px-8 py-4 rounded-lg animate-pulse">Loading...</div>
                <div className="bg-transparent border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-lg animate-pulse">Loading...</div>
              </div>
            }>
              <ConversionPathRouter variant="default" size="large" />
            </Suspense>
          </AnimatedSection>

          {/* Professional Value Indicator */}
          <AnimatedSection animation="fade-up" delay={1000}>
            <div className="mt-8 p-4 bg-primary-blue/10 rounded-lg border border-primary-blue/30 max-w-lg mx-auto">
              <p className="text-primary-blue font-semibold text-sm">
                💡 Complimentary strategic consultation typically valued at $500+ in the industry
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator - Hidden on mobile, optimized */}
        <AnimatedSection 
          animation="fade" 
          delay={1200}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <div className="w-6 h-10 border-2 border-light-text/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-light-text/50 rounded-full mt-2 animate-pulse" />
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default OptimizedHero;