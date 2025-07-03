import React,{useState} from 'react';
import {CheckCircle,ArrowRight,Users,Shield,Building,Target,Clock,TrendingUp} from 'lucide-react';
import {useNavigate} from 'react-router-dom';

const CaseStudyPreview=()=> {
  const [selectedCase,setSelectedCase]=useState(0);
  const navigate=useNavigate();

  const caseStudies=[
    {
      id: 'pendleton-crisis-symposium',
      title: 'Building Crisis Preparedness Through Training',
      subtitle: 'Pendleton Oregon Crisis Symposium',
      category: 'Regional Preparedness',
      challenge: 'Regional preparedness for major event crisis management during Pendleton Roundup',
      solution: 'Crisis symposium and exercise leading to comprehensive emergency plan development',
      outcome: 'Pendleton Roundup crisis-ready framework with multi-agency coordination',
      metrics: [
        'Multi-agency coordination protocols established',
        'Regional response framework developed',
        'Crisis preparedness training delivered',
        'Emergency response capabilities enhanced'
      ],
      icon: Users,
      color: 'text-primary-blue',
      bgColor: 'bg-primary-blue/10',
      borderColor: 'border-primary-blue/30',
      industry: 'Public Events & Emergency Management',
      duration: '6-month engagement',
      impact: 'Enhanced regional crisis preparedness'
    },
    {
      id: 'regional-pio-training',
      title: 'FEMA-Certified PIO Training Program',
      subtitle: 'Regional PIO FEMA Certification',
      category: 'Professional Development',
      challenge: 'Need for standardized crisis communication capabilities across regional agencies',
      solution: 'Comprehensive FEMA-certified training program for public information officers',
      outcome: 'Certified public information officers with standardized protocols across region',
      metrics: [
        'Regional PIO network established',
        'FEMA certification standards met',
        'Standardized communication protocols',
        'Cross-agency coordination improved'
      ],
      icon: Shield,
      color: 'text-primary-red',
      bgColor: 'bg-primary-red/10',
      borderColor: 'border-primary-red/30',
      industry: 'Government & Emergency Services',
      duration: 'FEMA course hours plus field application',
      impact: 'FEMA-standardized regional capabilities'
    },
    {
      id: 'private-sector-crisis',
      title: 'Reputation Protection During Legal Crisis',
      subtitle: 'Private Sector Crisis Communication',
      category: 'Crisis Management',
      challenge: 'Employee false rumors and lawsuit threatening business reputation and operations',
      solution: 'Strategic communication and damage mitigation with legal crisis support',
      outcome: 'Protected reputation,minimized business impact,and maintained operations',
      metrics: [
        'Crisis contained within 48 hours',
        'Business operations maintained',
        'Reputation damage minimized',
        'Legal communication support provided'
      ],
      icon: Building,
      color: 'text-primary-blue',
      bgColor: 'bg-primary-blue/10',
      borderColor: 'border-primary-blue/30',
      industry: 'Private Sector & Legal',
      duration: '2-month crisis response',
      impact: 'Business continuity preserved'
    }
  ];

  const selectedCaseStudy=caseStudies[selectedCase];
  const IconComponent=selectedCaseStudy.icon;

  const goToBookDemo=()=> {
    navigate('/book-demo');
    setTimeout(()=> {
      window.scrollTo({top: 0,behavior: 'smooth'});
    },100);
  };

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
            <span className="text-gradient">Real-World Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our FEMA-certified expertise and deployment experience deliver results across diverse scenarios
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Case Study Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {caseStudies.map((caseStudy,index)=> {
              const CaseIcon=caseStudy.icon;
              return (
                <button
                  key={caseStudy.id}
                  onClick={()=> setSelectedCase(index)}
                  className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                    selectedCase===index
                      ? `${caseStudy.borderColor} ${caseStudy.bgColor} shadow-lg`
                      : 'border-gray-accents bg-dark-background hover:border-primary-blue/50'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <CaseIcon
                      size={24}
                      className={selectedCase===index ? caseStudy.color : 'text-gray-400'}
                    />
                    <span className={`font-semibold ${selectedCase===index ? 'text-light-text' : 'text-gray-300'}`}>
                      {caseStudy.category}
                    </span>
                  </div>
                  <h3 className={`font-bold mb-2 ${selectedCase===index ? 'text-light-text' : 'text-gray-300'}`}>
                    {caseStudy.subtitle}
                  </h3>
                  <p className={`text-sm ${selectedCase===index ? 'text-gray-200' : 'text-gray-400'}`}>
                    {caseStudy.industry}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Case Study Details */}
          <div className={`${selectedCaseStudy.bgColor} border ${selectedCaseStudy.borderColor} rounded-xl p-8`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Details */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <IconComponent size={40} className={selectedCaseStudy.color} />
                  <div>
                    <h3 className="text-2xl font-primary font-bold text-light-text">
                      {selectedCaseStudy.title}
                    </h3>
                    <p className={`${selectedCaseStudy.color} font-semibold`}>
                      {selectedCaseStudy.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-light-text mb-2 flex items-center space-x-2">
                      <Target size={16} className="text-primary-red" />
                      <span>Challenge:</span>
                    </h4>
                    <p className="text-gray-300 text-sm">{selectedCaseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-light-text mb-2 flex items-center space-x-2">
                      <CheckCircle size={16} className="text-primary-blue" />
                      <span>Solution:</span>
                    </h4>
                    <p className="text-gray-300 text-sm">{selectedCaseStudy.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-light-text mb-2 flex items-center space-x-2">
                      <TrendingUp size={16} className="text-green-400" />
                      <span>Outcome:</span>
                    </h4>
                    <p className="text-gray-300 text-sm">{selectedCaseStudy.outcome}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Duration:</div>
                    <div className={`${selectedCaseStudy.color} font-semibold text-sm`}>
                      {selectedCaseStudy.duration}
                    </div>
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Impact:</div>
                    <div className={`${selectedCaseStudy.color} font-semibold text-sm`}>
                      {selectedCaseStudy.impact}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Metrics */}
              <div>
                <h4 className="font-semibold text-light-text mb-4">Key Results & Metrics:</h4>
                <ul className="space-y-3 mb-6">
                  {selectedCaseStudy.metrics.map((metric,index)=> (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={14} className="text-green-400" />
                      </div>
                      <span className="text-gray-300">{metric}</span>
                    </li>
                  ))}
                </ul>

                <div className={`p-4 ${selectedCaseStudy.bgColor} rounded-lg border ${selectedCaseStudy.borderColor} mb-6`}>
                  <h5 className={`${selectedCaseStudy.color} font-semibold mb-2`}>
                    Expert Insight:
                  </h5>
                  <p className="text-gray-300 text-sm">
                    This case demonstrates how FEMA-certified protocols and deployment experience create effective solutions for complex communication challenges across different sectors.
                  </p>
                </div>

                <button
                  onClick={goToBookDemo}
                  className="w-full bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <span>Discuss Your Challenge</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12">
            <div className="p-6 bg-dark-background/50 rounded-xl border border-primary-blue/30 max-w-2xl mx-auto">
              <h3 className="text-lg font-primary font-bold text-light-text mb-4">
                Every Challenge is Unique
              </h3>
              <p className="text-gray-300 mb-4">
                These case studies represent just a sample of our work. Every organization faces unique communication challenges that require tailored solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={goToBookDemo}
                  className="bg-primary-blue hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  Discuss Your Situation
                </button>
                <button
                  onClick={()=> navigate('/strategic-consulting')}
                  className="bg-transparent border border-primary-red text-primary-red hover:bg-primary-red hover:text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  View All Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;