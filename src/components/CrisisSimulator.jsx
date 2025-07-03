import React, { useState } from 'react';
import { AlertTriangle, Clock, Users, MessageSquare, CheckCircle, ArrowRight, RotateCcw, Shield, Target, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CrisisSimulator = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [userChoices, setUserChoices] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [simulationStarted, setSimulationStarted] = useState(false);
  const navigate = useNavigate();

  const scenarios = [
    {
      id: 'initial_response',
      title: 'Major Industrial Incident - Initial Response',
      situation: 'A chemical plant explosion has occurred at 3:47 PM. Multiple agencies are responding. Local news has arrived on scene. Social media is already spreading unverified information. You have 15 minutes to establish initial communication.',
      timeConstraint: '15 minutes to first public statement',
      stakeholders: ['Media', 'Public Safety', 'Plant Workers', 'Community', 'Regulatory Agencies'],
      choices: [
        {
          id: 'wait_info',
          text: 'Wait for complete information before any public statement',
          consequence: 'Information vacuum filled by speculation and rumors',
          strategic_note: 'Silence creates communication crisis within crisis',
          expert_insight: 'Waiting for complete information often means losing narrative control'
        },
        {
          id: 'immediate_brief',
          text: 'Provide immediate brief statement acknowledging incident and response',
          consequence: 'Establishes authoritative voice and demonstrates transparency',
          strategic_note: 'Early acknowledgment builds trust and credibility',
          expert_insight: 'Our deployment experience shows first voice advantage is critical'
        },
        {
          id: 'deflect_agencies',
          text: 'Direct all inquiries to other responding agencies',
          consequence: 'Appears evasive and damages organizational credibility',
          strategic_note: 'Deflection strategies typically backfire in crisis situations',
          expert_insight: 'Accountability demonstrates leadership during crisis'
        }
      ]
    },
    {
      id: 'stakeholder_coordination',
      title: 'Multi-Agency Coordination Challenge',
      situation: 'Two hours into the incident. Fire Chief, Police Chief, and Plant Manager are giving conflicting information to media. Community is confused. Social media criticism is growing. You need to establish unified messaging.',
      timeConstraint: '30 minutes to coordinate unified response',
      stakeholders: ['Fire Department', 'Police', 'Plant Management', 'Mayor\'s Office', 'Media'],
      choices: [
        {
          id: 'separate_briefings',
          text: 'Allow each agency to continue separate briefings',
          consequence: 'Message confusion continues, public trust erodes',
          strategic_note: 'Fragmented communication amplifies crisis impact',
          expert_insight: 'Unified command requires unified communication'
        },
        {
          id: 'joint_briefing',
          text: 'Organize immediate joint briefing with all agencies',
          consequence: 'Demonstrates coordinated response and builds confidence',
          strategic_note: 'Unified messaging shows professional crisis management',
          expert_insight: 'Joint information centers are standard in major deployments'
        },
        {
          id: 'written_only',
          text: 'Issue written statement only, avoid live media interaction',
          consequence: 'Appears to be avoiding accountability and transparency',
          strategic_note: 'Written-only approach suggests crisis management failure',
          expert_insight: 'Live interaction demonstrates confidence and control'
        }
      ]
    },
    {
      id: 'community_engagement',
      title: 'Community Trust and Long-term Recovery',
      situation: 'One week post-incident. Technical investigation is ongoing. Community meeting scheduled. Residents are angry about communication delays. Environmental concerns persist. Long-term relationship at stake.',
      timeConstraint: 'Community meeting in 2 hours',
      stakeholders: ['Residents', 'Environmental Groups', 'Business Community', 'Elected Officials'],
      choices: [
        {
          id: 'technical_focus',
          text: 'Focus presentation on technical investigation details',
          consequence: 'Community feels disconnected from technical language',
          strategic_note: 'Technical focus without emotional connection fails',
          expert_insight: 'Community engagement requires addressing concerns, not just facts'
        },
        {
          id: 'comprehensive_engagement',
          text: 'Address community concerns with empathy while providing factual updates',
          consequence: 'Builds foundation for long-term trust and recovery',
          strategic_note: 'Balanced approach addresses both facts and feelings',
          expert_insight: 'Successful recovery requires sustained community engagement'
        },
        {
          id: 'minimal_info',
          text: 'Provide minimal information citing ongoing investigation',
          consequence: 'Community trust further damaged, recovery complicated',
          strategic_note: 'Information restriction strategy typically backfires',
          expert_insight: 'Transparency within legal bounds builds stronger relationships'
        }
      ]
    }
  ];

  const expertiseAreas = [
    'FEMA ICS-certified response protocols',
    'Multi-agency coordination strategies', 
    'Stakeholder-specific messaging frameworks',
    'Crisis timeline management',
    'Community engagement methodologies',
    'Media relations during emergency response'
  ];

  const handleChoice = (choice) => {
    const newChoices = [...userChoices, {
      scenario: currentScenario,
      choice: choice,
      scenarioTitle: scenarios[currentScenario].title
    }];
    setUserChoices(newChoices);

    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetSimulation = () => {
    setCurrentScenario(0);
    setUserChoices([]);
    setShowResults(false);
    setSimulationStarted(false);
  };

  const goToBookDemo = () => {
    navigate('/book-demo');
    // Small delay to ensure navigation completes, then scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  if (!simulationStarted) {
    return (
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={40} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-primary font-bold mb-4">
                <span className="text-gradient">Crisis Communication Simulator</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Experience real-world crisis scenarios based on our deployment expertise
              </p>
              
              <div className="bg-dark-background/70 rounded-xl p-6 border border-gray-accents/30 mb-8">
                <h3 className="text-lg font-primary font-bold text-light-text mb-4">
                  Based on Real Deployment Experience:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {expertiseAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-primary-blue" />
                      <span className="text-gray-300 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-dark-background/50 rounded-lg p-4 border border-primary-blue/30">
                  <AlertTriangle size={24} className="text-primary-red mx-auto mb-2" />
                  <div className="text-primary-red font-semibold">Real Scenarios</div>
                  <div className="text-gray-400 text-sm">From actual deployments</div>
                </div>
                <div className="bg-dark-background/50 rounded-lg p-4 border border-primary-red/30">
                  <Clock size={24} className="text-primary-blue mx-auto mb-2" />
                  <div className="text-primary-blue font-semibold">Time Pressure</div>
                  <div className="text-gray-400 text-sm">Realistic constraints</div>
                </div>
                <div className="bg-dark-background/50 rounded-lg p-4 border border-primary-blue/30">
                  <Users size={24} className="text-primary-red mx-auto mb-2" />
                  <div className="text-primary-red font-semibold">Multi-Stakeholder</div>
                  <div className="text-gray-400 text-sm">Complex coordination</div>
                </div>
              </div>

              <button 
                onClick={() => setSimulationStarted(true)}
                className="group bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Start Crisis Simulation</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              
              <p className="text-gray-400 text-sm mt-4">
                See how FEMA-certified expertise guides crisis communication decisions
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const strategicChoices = userChoices.filter(choice => 
      choice.choice.id === 'immediate_brief' || 
      choice.choice.id === 'joint_briefing' || 
      choice.choice.id === 'comprehensive_engagement'
    ).length;

    return (
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-background border border-gray-accents rounded-xl p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target size={40} className="text-white" />
                </div>
                <h2 className="text-3xl font-primary font-bold mb-4">
                  Simulation Results
                </h2>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2 text-primary-blue">
                    {strategicChoices}/3
                  </div>
                  <div className="text-xl text-gray-300">
                    Strategic Communication Decisions
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <h3 className="text-xl font-bold text-light-text">Expert Analysis of Your Decisions:</h3>
                {userChoices.map((userChoice, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="font-semibold text-primary-blue mb-2">
                      {userChoice.scenarioTitle}
                    </h4>
                    <div className="mb-3">
                      <span className="text-gray-400">Your Choice: </span>
                      <span className="text-light-text">{userChoice.choice.text}</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-400">Strategic Insight: </span>
                        <span className="text-gray-300">{userChoice.choice.strategic_note}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Deployment Experience: </span>
                        <span className="text-gray-300">{userChoice.choice.expert_insight}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary-blue/10 rounded-lg p-6 border border-primary-blue/30 mb-8">
                <h3 className="text-lg font-bold text-light-text mb-2">
                  How Our Strategic Consulting Helps:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Pre-crisis strategic frameworks to guide decision-making</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">FEMA-certified protocols adapted for your organization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Multi-stakeholder coordination strategies from real deployments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Community engagement methodologies for long-term recovery</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={goToBookDemo}
                    className="bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Book Strategic Consultation
                  </button>
                  <button 
                    onClick={resetSimulation}
                    className="bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <RotateCcw size={16} />
                    <span>Try Different Scenario</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const scenario = scenarios[currentScenario];
  const progress = ((currentScenario + 1) / scenarios.length) * 100;

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-primary-blue font-semibold">
                Scenario {currentScenario + 1} of {scenarios.length}
              </span>
              <span className="text-gray-400 text-sm">
                Time Constraint: {scenario.timeConstraint}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary-red to-primary-blue h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Scenario Card */}
          <div className="bg-dark-background border border-gray-accents rounded-xl p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-primary font-bold text-light-text mb-4">
                {scenario.title}
              </h2>
              
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle size={24} className="text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-400 mb-2">Crisis Situation:</h3>
                    <p className="text-gray-300">{scenario.situation}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-light-text mb-3">Key Stakeholders:</h4>
                <div className="flex flex-wrap gap-2">
                  {scenario.stakeholders.map((stakeholder, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary-blue/20 text-primary-blue rounded-full text-sm"
                    >
                      {stakeholder}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-primary font-bold text-light-text mb-4">
                What is your strategic communication approach?
              </h3>
              
              {scenario.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(choice)}
                  className="w-full text-left p-6 rounded-lg border border-gray-600 hover:border-primary-blue hover:bg-primary-blue/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-gray-300 group-hover:text-light-text mb-2">
                        {choice.text}
                      </p>
                      <div className="text-xs text-gray-400">
                        Potential Impact: {choice.consequence}
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-gray-500 group-hover:text-primary-blue group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Decisions based on FEMA-certified crisis communication protocols and real deployment experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrisisSimulator;