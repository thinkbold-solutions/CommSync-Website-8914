import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, Clock, Users, Target, ArrowRight, RotateCcw, Shield, Star, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CrisisReadinessAssessmentTool = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const navigate = useNavigate();

  const assessmentQuestions = [
    {
      id: 'response_time',
      question: 'How quickly can your organization deploy crisis communication?',
      category: 'Response Speed',
      options: [
        { value: 4, text: 'Within 15 minutes, 24/7' },
        { value: 3, text: 'Within 1 hour during business hours' },
        { value: 2, text: 'Within 4 hours' },
        { value: 1, text: 'Same day response' },
        { value: 0, text: 'No formal response timeline' }
      ]
    },
    {
      id: 'team_training',
      question: 'How prepared is your crisis communication team?',
      category: 'Team Readiness',
      options: [
        { value: 4, text: 'Professionally trained and regularly drilled' },
        { value: 3, text: 'Basic training with some practice' },
        { value: 2, text: 'Informal preparation only' },
        { value: 1, text: 'Designated team but no formal training' },
        { value: 0, text: 'No designated crisis communication team' }
      ]
    },
    {
      id: 'message_templates',
      question: 'Do you have pre-approved crisis message templates?',
      category: 'Message Preparedness',
      options: [
        { value: 4, text: 'Comprehensive templates for all scenarios' },
        { value: 3, text: 'Templates for major crisis types' },
        { value: 2, text: 'Basic template framework' },
        { value: 1, text: 'Draft templates exist' },
        { value: 0, text: 'No pre-approved templates' }
      ]
    },
    {
      id: 'stakeholder_coordination',
      question: 'How effectively can you coordinate with external stakeholders during a crisis?',
      category: 'Coordination',
      options: [
        { value: 4, text: 'Established protocols with all key stakeholders' },
        { value: 3, text: 'Good relationships with most stakeholders' },
        { value: 2, text: 'Some stakeholder connections' },
        { value: 1, text: 'Limited stakeholder coordination' },
        { value: 0, text: 'No formal stakeholder coordination plan' }
      ]
    },
    {
      id: 'media_readiness',
      question: 'How prepared are your spokespersons for crisis media interactions?',
      category: 'Media Relations',
      options: [
        { value: 4, text: 'Expert-level media training and regular practice' },
        { value: 3, text: 'Good training with periodic refreshers' },
        { value: 2, text: 'Basic media training completed' },
        { value: 1, text: 'Some informal media preparation' },
        { value: 0, text: 'No formal media training' }
      ]
    },
    {
      id: 'digital_capabilities',
      question: 'How equipped is your organization for digital crisis communication?',
      category: 'Digital Readiness',
      options: [
        { value: 4, text: 'Multi-platform strategy with monitoring and rapid response' },
        { value: 3, text: 'Active on key platforms with good response capability' },
        { value: 2, text: 'Basic digital presence and response' },
        { value: 1, text: 'Limited digital communication capability' },
        { value: 0, text: 'No formal digital crisis strategy' }
      ]
    }
  ];

  const maxScore = assessmentQuestions.length * 4;
  
  const getReadinessLevel = (score) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) return { level: 'Crisis Ready', color: 'text-green-400', icon: Shield, description: 'Excellent crisis preparedness' };
    if (percentage >= 75) return { level: 'Well Prepared', color: 'text-blue-400', icon: CheckCircle, description: 'Strong foundation with room for optimization' };
    if (percentage >= 50) return { level: 'Developing', color: 'text-yellow-400', icon: Clock, description: 'Basic preparedness with significant gaps' };
    return { level: 'Needs Improvement', color: 'text-red-400', icon: AlertTriangle, description: 'Critical gaps requiring immediate attention' };
  };

  const getRecommendations = (score) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) {
      return {
        primary: 'Maintain Excellence',
        actions: [
          'Continue advanced training programs',
          'Share expertise with industry networks',
          'Regular plan testing and optimization',
          'Consider crisis response consulting opportunities'
        ]
      };
    } else if (percentage >= 75) {
      return {
        primary: 'Optimize Performance',
        actions: [
          'Advanced crisis communication training',
          'Enhanced stakeholder coordination protocols',
          'Regular crisis simulation exercises',
          'Digital communication capability expansion'
        ]
      };
    } else if (percentage >= 50) {
      return {
        primary: 'Build Foundation',
        actions: [
          'Professional crisis communication training',
          'Develop comprehensive response protocols',
          'Establish stakeholder coordination systems',
          'Create crisis message template library'
        ]
      };
    } else {
      return {
        primary: 'Immediate Action Required',
        actions: [
          'Emergency crisis readiness consultation',
          'Rapid response team development',
          'Basic crisis communication framework',
          'Professional training program implementation'
        ]
      };
    }
  };

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [assessmentQuestions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const totalScore = Object.values(newAnswers).reduce((sum, val) => sum + val, 0);
      setScore(totalScore);
      setShowResults(true);
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
    setIsStarted(false);
  };

  const goToBookDemo = () => {
    navigate('/book-demo');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  if (!isStarted) {
    return (
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={40} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-primary font-bold mb-4">
                <span className="text-gradient">Crisis Readiness Assessment</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Discover your organization's crisis communication preparedness level
              </p>
              
              <div className="bg-dark-background/70 rounded-xl p-6 border border-gray-accents/30 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <Clock size={24} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">3 Minutes</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Users size={24} className="text-primary-red" />
                    <span className="text-gray-300 text-sm">6 Key Areas</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Target size={24} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Custom Action Plan</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsStarted(true)}
                className="group bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Start Assessment</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              
              <p className="text-gray-400 text-sm mt-4">
                Free assessment • Instant results • No personal information required
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const readinessLevel = getReadinessLevel(score);
    const ReadinessIcon = readinessLevel.icon;
    const recommendations = getRecommendations(score);
    const percentage = Math.round((score / maxScore) * 100);

    return (
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-background border border-gray-accents rounded-xl p-8">
              
              {/* Results Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <ReadinessIcon size={40} className="text-white" />
                </div>
                <h2 className="text-3xl font-primary font-bold mb-4">
                  Your Crisis Readiness Score
                </h2>
                <div className="mb-6">
                  <div className={`text-6xl font-bold mb-2 ${readinessLevel.color}`}>
                    {percentage}%
                  </div>
                  <div className={`text-xl font-semibold ${readinessLevel.color} mb-2`}>
                    {readinessLevel.level}
                  </div>
                  <p className="text-gray-400">{readinessLevel.description}</p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
                  <div 
                    className="bg-gradient-to-r from-primary-red to-primary-blue h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Recommendations */}
                <div>
                  <h3 className="text-xl font-bold text-light-text mb-4">
                    Next Steps: {recommendations.primary}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {recommendations.actions.map((action, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Score Breakdown */}
                <div>
                  <h3 className="text-xl font-bold text-light-text mb-4">Assessment Breakdown:</h3>
                  <div className="space-y-3">
                    {assessmentQuestions.map((question, index) => (
                      <div key={question.id} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                        <span className="text-gray-300 text-sm">{question.category}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-primary-blue font-semibold">
                            {answers[question.id]}/4
                          </span>
                          <div className="w-12 bg-gray-600 rounded-full h-2">
                            <div 
                              className="bg-primary-blue h-2 rounded-full"
                              style={{ width: `${(answers[question.id] / 4) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-8 text-center">
                <div className="bg-primary-blue/10 rounded-lg p-6 border border-primary-blue/30 mb-6">
                  <h3 className="text-lg font-bold text-light-text mb-2">
                    Ready to Improve Your Crisis Readiness?
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Get personalized recommendations and expert guidance to enhance your crisis communication capabilities.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={goToBookDemo}
                    className="bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Book Free Crisis Consultation
                  </button>
                  <button
                    onClick={resetAssessment}
                    className="bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <RotateCcw size={16} />
                    <span>Retake Assessment</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Assessment Questions
  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;
  const question = assessmentQuestions[currentQuestion];

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-primary-blue font-semibold">
                Question {currentQuestion + 1} of {assessmentQuestions.length}
              </span>
              <span className="text-gray-400 text-sm">
                {question.category}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary-red to-primary-blue h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-dark-background border border-gray-accents rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-light-text mb-8 leading-tight">
              {question.question}
            </h2>
            
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-4 rounded-lg border border-gray-600 hover:border-primary-blue hover:bg-primary-blue/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 group-hover:text-light-text">
                      {option.text}
                    </span>
                    <ArrowRight size={16} className="text-gray-500 group-hover:text-primary-blue group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={resetAssessment}
              className="text-gray-400 hover:text-light-text transition-colors duration-300 text-sm"
            >
              Start Over
            </button>
            <span className="text-gray-400 text-sm">
              Select the option that best describes your organization
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrisisReadinessAssessmentTool;