import React, { useEffect } from 'react';
import { FileText, CheckCircle, Award, TrendingUp, Shield, Target, Download, Star } from 'lucide-react';

const MarketingReportCapture = () => {
  useEffect(() => {
    // Load the prospecting widget script
    const script = document.createElement('script');
    script.src = 'https://services.leadconnectorhq.com/prospecting/client/widget_script.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const reportBenefits = [
    {
      icon: Target,
      title: 'Professional Assessment Framework',
      description: 'Comprehensive evaluation using FEMA-certified assessment protocols'
    },
    {
      icon: TrendingUp,
      title: 'Industry Benchmarking',
      description: 'Compare your capabilities against industry standards and best practices'
    },
    {
      icon: Shield,
      title: 'Actionable Improvement Recommendations',
      description: 'Specific steps to enhance your crisis communication readiness'
    },
    {
      icon: Award,
      title: 'Custom Strategic Insights',
      description: 'Personalized analysis based on your organization type and needs'
    }
  ];

  const reportIncludes = [
    'Current communication capability audit',
    'Crisis preparedness assessment score',
    'Stakeholder engagement analysis',
    'Media relations effectiveness review',
    'Digital communication readiness evaluation',
    'Training needs identification',
    'Custom improvement roadmap',
    'Industry benchmark comparison',
    'ROI projections for improvements',
    'Implementation timeline recommendations'
  ];

  const whyThisMatters = [
    {
      stat: '75%',
      description: 'Organizations with professional assessment improve response time by 75%'
    },
    {
      stat: '$100K+',
      description: 'Average cost of crisis communication failures'
    },
    {
      stat: '3-6 months',
      description: 'Time required to develop professional communication capabilities'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary-blue/10 to-primary-red/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Free Crisis Communication Readiness Report</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get a comprehensive analysis of your organization's communication capabilities with actionable recommendations for improvement
            </p>
            
            {/* Value Indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-dark-background/50 px-4 py-2 rounded-full border border-green-500/30">
                <CheckCircle size={16} className="text-green-400" />
                <span className="text-green-400 font-semibold text-sm">100% Free</span>
              </div>
              <div className="flex items-center space-x-2 bg-dark-background/50 px-4 py-2 rounded-full border border-blue-500/30">
                <Award size={16} className="text-blue-400" />
                <span className="text-blue-400 font-semibold text-sm">Professional Assessment</span>
              </div>
              <div className="flex items-center space-x-2 bg-dark-background/50 px-4 py-2 rounded-full border border-red-500/30">
                <Download size={16} className="text-red-400" />
                <span className="text-red-400 font-semibold text-sm">Instant Download</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Report Information */}
            <div className="order-2 lg:order-1">
              {/* Why This Matters */}
              <div className="mb-8">
                <h3 className="text-2xl font-primary font-bold mb-6 text-light-text">
                  Why Crisis Communication Assessment Matters
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {whyThisMatters.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-dark-background/50 rounded-lg border border-gray-accents/30">
                      <div className="text-3xl font-bold text-primary-red">{item.stat}</div>
                      <div className="text-gray-300 text-sm">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Report Benefits */}
              <div className="mb-8">
                <h3 className="text-2xl font-primary font-bold mb-6 text-light-text">
                  What You'll Discover
                </h3>
                <div className="space-y-4">
                  {reportBenefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <IconComponent size={24} className="text-primary-blue mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-light-text mb-1">{benefit.title}</h4>
                          <p className="text-gray-300 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Report Includes */}
              <div className="mb-8">
                <h3 className="text-2xl font-primary font-bold mb-6 text-light-text">
                  Your Report Includes:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {reportIncludes.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-primary-blue flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Value */}
              <div className="p-4 bg-primary-blue/10 rounded-lg border border-primary-blue/30">
                <div className="flex items-center space-x-2 mb-2">
                  <Star size={20} className="text-primary-blue" />
                  <span className="text-primary-blue font-semibold">Professional Value</span>
                </div>
                <p className="text-gray-300 text-sm">
                  This comprehensive assessment typically costs $500+ when conducted by professional consultants. 
                  We're providing it free to help organizations improve their crisis communication readiness.
                </p>
              </div>
            </div>

            {/* Right Column - Report Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-dark-background rounded-xl p-8 border border-gray-accents shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-primary font-bold text-light-text mb-2">
                    Get Your Free Report
                  </h3>
                  <p className="text-gray-300">
                    Complete the assessment below to receive your personalized crisis communication readiness report
                  </p>
                </div>

                {/* Report Form Embed */}
                <div className="marketing-report-embed bg-gray-800/30 rounded-lg border border-gray-600/30" style={{ minHeight: '600px' }}>
                  <iframe 
                    id='prospecting-widget' 
                    src='https://services.leadconnectorhq.com/prospecting/widgets/load/6827c9cf1647e13a0ec02497'
                    frameBorder='0' 
                    style={{ 
                      display: 'block', 
                      width: '100%', 
                      height: '600px',
                      border: 'none',
                      borderRadius: '8px',
                      backgroundColor: 'transparent'
                    }}
                    title="Crisis Communication Readiness Report"
                  />
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-gray-600">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Shield size={16} className="text-green-400" />
                      <span>Secure & Private</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download size={16} className="text-blue-400" />
                      <span>Instant Access</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle size={16} className="text-primary-blue" />
                      <span>No Spam</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="p-6 bg-dark-background/50 rounded-xl border border-primary-red/30 max-w-2xl mx-auto">
              <h3 className="text-xl font-primary font-bold text-light-text mb-4">
                Questions About Your Assessment?
              </h3>
              <p className="text-gray-300 mb-4">
                Our team is available to help you understand your results and develop an improvement plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => window.location.href = '/book-demo'}
                  className="bg-primary-blue hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  Discuss Your Results
                </button>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="bg-transparent border border-primary-red text-primary-red hover:bg-primary-red hover:text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Expert Guidance
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingReportCapture;