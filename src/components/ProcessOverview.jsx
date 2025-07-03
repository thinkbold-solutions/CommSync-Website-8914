import React, { useState } from 'react';
import { Calendar, Target, FileText, Zap, BarChart, Settings, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProcessOverview = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const processSteps = [
    {
      id: 'demo-discovery',
      title: 'Demo/Discovery',
      duration: 'Week 1',
      icon: Calendar,
      description: 'Free strategic consultation and comprehensive needs assessment',
      deliverable: 'Comprehensive capability audit and strategic recommendations',
      activities: [
        'Current capability assessment',
        'Organizational needs analysis',
        'Strategic goal alignment',
        'Custom solution design'
      ],
      outcome: 'Clear understanding of your needs and our recommended approach',
      color: 'text-primary-blue',
      bgColor: 'bg-primary-blue/10',
      borderColor: 'border-primary-blue/30'
    },
    {
      id: 'custom-plan',
      title: 'Custom Plan Development',
      duration: 'Week 2',
      icon: Target,
      description: 'Tailored strategy based on your specific requirements and objectives',
      deliverable: 'Custom training and consulting roadmap with detailed specifications',
      activities: [
        'Strategy framework development',
        'Resource requirement planning',
        'Timeline optimization',
        'Success metrics definition'
      ],
      outcome: 'Detailed roadmap customized for your organization',
      color: 'text-primary-red',
      bgColor: 'bg-primary-red/10',
      borderColor: 'border-primary-red/30'
    },
    {
      id: 'implementation-plan',
      title: 'Detailed Implementation Plan',
      duration: 'Week 3',
      icon: FileText,
      description: 'Step-by-step execution plan with timelines and resource allocation',
      deliverable: 'Implementation timeline and comprehensive resource allocation plan',
      activities: [
        'Phase-by-phase planning',
        'Resource allocation mapping',
        'Risk mitigation strategies',
        'Quality assurance protocols'
      ],
      outcome: 'Ready-to-execute implementation plan',
      color: 'text-primary-blue',
      bgColor: 'bg-primary-blue/10',
      borderColor: 'border-primary-blue/30'
    },
    {
      id: 'execution',
      title: 'Execution',
      duration: 'Weeks 4-8',
      icon: Zap,
      description: 'Training delivery and system implementation with expert guidance',
      deliverable: 'Team certification and comprehensive capability development',
      activities: [
        'Training program delivery',
        'System implementation',
        'Team capability building',
        'Real-world application support'
      ],
      outcome: 'Fully trained team with implemented systems',
      color: 'text-primary-red',
      bgColor: 'bg-primary-red/10',
      borderColor: 'border-primary-red/30'
    },
    {
      id: 'monitor',
      title: 'Monitor',
      duration: 'Ongoing',
      icon: BarChart,
      description: 'Performance tracking and effectiveness measurement with data insights',
      deliverable: 'Regular progress reports and comprehensive analytics',
      activities: [
        'Performance metrics tracking',
        'Effectiveness measurement',
        'Data analysis and insights',
        'Regular progress reporting'
      ],
      outcome: 'Clear visibility into program effectiveness',
      color: 'text-primary-blue',
      bgColor: 'bg-primary-blue/10',
      borderColor: 'border-primary-blue/30'
    },
    {
      id: 'adjust',
      title: 'Adjust',
      duration: 'Continuous',
      icon: Settings,
      description: 'Optimization based on results and feedback for continuous improvement',
      deliverable: 'Continuous improvement recommendations and optimization',
      activities: [
        'Results analysis',
        'Feedback integration',
        'Process optimization',
        'Strategic adjustments'
      ],
      outcome: 'Continuously improving communication capabilities',
      color: 'text-primary-red',
      bgColor: 'bg-primary-red/10',
      borderColor: 'border-primary-red/30'
    }
  ];

  const currentStep = processSteps[activeStep];
  const IconComponent = currentStep.icon;

  const goToBookDemo = () => {
    navigate('/book-demo');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
            Our <span className="text-gradient">Proven Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A systematic approach ensuring every engagement delivers maximum value and sustainable results
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Process Steps Timeline - Desktop */}
          <div className="hidden lg:block mb-16">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-600"></div>
              <div 
                className="absolute top-16 left-0 h-0.5 bg-gradient-to-r from-primary-red to-primary-blue transition-all duration-500"
                style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
              ></div>

              {/* Step Indicators */}
              <div className="grid grid-cols-6 gap-4">
                {processSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = index === activeStep;
                  const isCompleted = index < activeStep;
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className="flex flex-col items-center space-y-3 group"
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-primary-red to-primary-blue shadow-lg scale-110' 
                          : isCompleted
                            ? 'bg-primary-blue'
                            : 'bg-gray-700 group-hover:bg-gray-600'
                      }`}>
                        <StepIcon size={24} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className={`font-semibold transition-colors duration-300 ${
                          isActive ? 'text-primary-blue' : 'text-gray-300'
                        }`}>
                          {step.title}
                        </div>
                        <div className="text-xs text-gray-400">{step.duration}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Process Steps - Mobile */}
          <div className="lg:hidden mb-8">
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {processSteps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === activeStep;
                
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`flex-shrink-0 p-4 rounded-xl border transition-all duration-300 ${
                      isActive 
                        ? 'border-primary-blue bg-primary-blue/10' 
                        : 'border-gray-accents bg-dark-background hover:border-primary-blue/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <StepIcon size={20} className={isActive ? 'text-primary-blue' : 'text-gray-400'} />
                      <div className="text-left">
                        <div className={`font-semibold text-sm ${
                          isActive ? 'text-light-text' : 'text-gray-300'
                        }`}>
                          {step.title}
                        </div>
                        <div className="text-xs text-gray-400">{step.duration}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Details */}
          <div className={`${currentStep.bgColor} border ${currentStep.borderColor} rounded-xl p-8`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Step Info */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-primary font-bold text-light-text">
                      {currentStep.title}
                    </h3>
                    <p className={`${currentStep.color} font-semibold`}>
                      {currentStep.duration}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {currentStep.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-light-text mb-3 flex items-center space-x-2">
                      <CheckCircle size={16} className="text-primary-blue" />
                      <span>Key Activities:</span>
                    </h4>
                    <ul className="space-y-2">
                      {currentStep.activities.map((activity, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                          <span className="text-gray-300 text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column - Deliverables & Outcome */}
              <div>
                <div className="space-y-6">
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <h4 className="font-semibold text-light-text mb-3 flex items-center space-x-2">
                      <FileText size={16} className="text-primary-blue" />
                      <span>Deliverable:</span>
                    </h4>
                    <p className="text-gray-300">{currentStep.deliverable}</p>
                  </div>

                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                    <h4 className="font-semibold text-green-400 mb-3 flex items-center space-x-2">
                      <Target size={16} />
                      <span>Expected Outcome:</span>
                    </h4>
                    <p className="text-green-300">{currentStep.outcome}</p>
                  </div>

                  {/* Process Navigation */}
                  <div className="flex justify-between items-center pt-4">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="flex items-center space-x-2 text-gray-400 hover:text-primary-blue transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrowRight size={16} className="rotate-180" />
                      <span>Previous</span>
                    </button>

                    <span className="text-gray-400 text-sm">
                      Step {activeStep + 1} of {processSteps.length}
                    </span>

                    <button
                      onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
                      disabled={activeStep === processSteps.length - 1}
                      className="flex items-center space-x-2 text-gray-400 hover:text-primary-blue transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>Next</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-dark-background/50 rounded-xl border border-primary-blue/30">
              <Clock size={32} className="text-primary-blue mx-auto mb-4" />
              <h3 className="font-semibold text-light-text mb-2">Structured Timeline</h3>
              <p className="text-gray-300 text-sm">Clear milestones and deliverables ensure project stays on track</p>
            </div>
            <div className="text-center p-6 bg-dark-background/50 rounded-xl border border-primary-red/30">
              <Target size={32} className="text-primary-red mx-auto mb-4" />
              <h3 className="font-semibold text-light-text mb-2">Custom Approach</h3>
              <p className="text-gray-300 text-sm">Every step tailored to your organization's unique needs</p>
            </div>
            <div className="text-center p-6 bg-dark-background/50 rounded-xl border border-primary-blue/30">
              <CheckCircle size={32} className="text-primary-blue mx-auto mb-4" />
              <h3 className="font-semibold text-light-text mb-2">Proven Results</h3>
              <p className="text-gray-300 text-sm">Methodology refined through hundreds of successful engagements</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="p-6 bg-gradient-to-r from-primary-red/10 to-primary-blue/10 rounded-xl border border-gray-accents/30 max-w-2xl mx-auto mb-6">
              <h3 className="text-xl font-primary font-bold text-light-text mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-300 mb-4">
                Every successful project begins with understanding your unique needs. Let's start with a free strategic consultation.
              </p>
            </div>
            <button
              onClick={goToBookDemo}
              className="bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <Calendar size={20} />
              <span>Begin with Free Discovery Session</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;