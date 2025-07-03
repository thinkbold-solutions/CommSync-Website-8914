import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ServiceRecommendationEngine from '../components/ServiceRecommendationEngine';
import CrisisReadinessAssessment from '../components/CrisisReadinessAssessment';
import DigitalVulnerabilityAssessment from '../components/DigitalVulnerabilityAssessment';
import CaseStudyPreview from '../components/CaseStudyPreview';
import TrustBuilder from '../components/TrustBuilder';
import ProcessOverview from '../components/ProcessOverview';
import IndustryRecognition from '../components/IndustryRecognition';
import SEOOptimizedFAQ from '../components/SEOOptimizedFAQ';
import DemoBookingCTA from '../components/DemoBookingCTA';
import IndustryStatistics from '../components/IndustryStatistics';
import NewsUpdates from '../components/NewsUpdates';
import PartnerOrganizations from '../components/PartnerOrganizations';
import EmergencyPreparednessWidget from '../components/EmergencyPreparednessWidget';
import PIOCommunity from '../components/PIOCommunity';
import About from '../components/About';
import {MarketUrgency, CapacityUrgency, ProfessionalUrgency} from '../components/HonestUrgency';
import ConversionPathRouter from '../components/ConversionPathRouter';

// Enhanced conversion section with honest urgency 
const StartupConversionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-blue/10 to-primary-red/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Market Reality Urgency */}
          <div className="mb-6">
            <MarketUrgency service="general" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-primary font-bold mb-6">
            Don't Wait for Crisis to <span className="text-gradient">Test Your Readiness</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Professional crisis communication capabilities take 3-6 months to develop properly. Organizations with strategic frameworks respond 75% faster to critical incidents.
          </p>
          
          {/* Value proposition without fake testimonials */}
          <div className="bg-dark-background/50 rounded-xl p-6 border border-primary-blue/30 mb-8">
            <h3 className="text-lg font-primary font-bold text-light-text mb-4">
              What You Get with CommSync:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                  <span className="text-gray-300 text-sm">FEMA-certified training protocols</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                  <span className="text-gray-300 text-sm">24/7 emergency consultation access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                  <span className="text-gray-300 text-sm">Deployment-tested methodologies</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-red rounded-full"></div>
                  <span className="text-gray-300 text-sm">Real-world crisis experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-red rounded-full"></div>
                  <span className="text-gray-300 text-sm">Multi-agency coordination expertise</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-red rounded-full"></div>
                  <span className="text-gray-300 text-sm">Ongoing support and optimization</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Capacity Constraints */}
          <div className="mb-8">
            <CapacityUrgency service="general" />
          </div>
          
          {/* Clear, honest CTAs */}
          <ConversionPathRouter variant="strategic" size="large" />
          
          {/* Professional Value */}
          <div className="mt-8">
            <ProfessionalUrgency service="general" />
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <ServiceRecommendationEngine />
      <CrisisReadinessAssessment />
      <DigitalVulnerabilityAssessment />
      <CaseStudyPreview />
      <TrustBuilder />
      <ProcessOverview />
      <IndustryRecognition />
      <IndustryStatistics />
      <EmergencyPreparednessWidget />
      <StartupConversionSection />
      <DemoBookingCTA />
      <SEOOptimizedFAQ />
      <NewsUpdates />
      <PartnerOrganizations />
      <PIOCommunity />
      <About />
    </>
  );
};

export default HomePage;