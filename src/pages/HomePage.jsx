import React, { Suspense, lazy } from 'react';
import ScrollProgressIndicator from '../components/ScrollProgressIndicator';
import Hero from '../components/Hero';
import Services from '../components/Services';

// Lazy load heavy components for better performance
const ServiceRecommendationEngine = lazy(() => import('../components/ServiceRecommendationEngine'));
const CrisisReadinessAssessment = lazy(() => import('../components/CrisisReadinessAssessment'));
const DigitalVulnerabilityAssessment = lazy(() => import('../components/DigitalVulnerabilityAssessment'));
const CaseStudyPreview = lazy(() => import('../components/CaseStudyPreview'));
const TrustBuilder = lazy(() => import('../components/TrustBuilder'));
const ProcessOverview = lazy(() => import('../components/ProcessOverview'));
const IndustryRecognition = lazy(() => import('../components/IndustryRecognition'));
const SEOOptimizedFAQ = lazy(() => import('../components/SEOOptimizedFAQ'));
const DemoBookingCTA = lazy(() => import('../components/DemoBookingCTA'));
const IndustryStatistics = lazy(() => import('../components/IndustryStatistics'));
const NewsUpdates = lazy(() => import('../components/NewsUpdates'));
const PartnerOrganizations = lazy(() => import('../components/PartnerOrganizations'));
const EmergencyPreparednessWidget = lazy(() => import('../components/EmergencyPreparednessWidget'));
const PIOCommunity = lazy(() => import('../components/PIOCommunity'));
const About = lazy(() => import('../components/About'));

// Loading fallback component
const SectionLoader = ({ height = "400px" }) => (
  <div className={`w-full bg-gray-900/30 animate-pulse rounded-xl`} style={{ height }}>
    <div className="flex items-center justify-center h-full">
      <div className="text-gray-600">Loading...</div>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
      
      {/* Critical above-the-fold content loads immediately */}
      <Hero />
      <Services />
      
      {/* Lazy loaded sections with loading states */}
      <Suspense fallback={<SectionLoader />}>
        <ServiceRecommendationEngine />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CrisisReadinessAssessment />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <DigitalVulnerabilityAssessment />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CaseStudyPreview />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <TrustBuilder />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ProcessOverview />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <IndustryRecognition />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <IndustryStatistics />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <EmergencyPreparednessWidget />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <DemoBookingCTA />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <SEOOptimizedFAQ />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <NewsUpdates />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <PartnerOrganizations />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <PIOCommunity />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
    </>
  );
};

export default HomePage;