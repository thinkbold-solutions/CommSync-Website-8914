import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertTriangle, Shield, Users, Clock, Target, ArrowRight, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CrisisReadinessAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      id: 'crisis_plan',
      question: 'Does your organization have a written crisis communication plan?',
      options: [
        { value: 3, text: 'Yes, comprehensive and regularly updated' },
        { value: 2, text: 'Yes, but it needs updating' },
        { value: 1, text: 'Basic plan exists' },
        { value: 0, text: 'No written plan' }
      ],
      category: 'Planning'
    },
    {
      id: 'spokesperson_training',
      question: 'How prepared are your designated spokespersons?',
      options: [
        { value: 3, text: 'Professionally trained and media-ready' },
        { value: 2, text: 'Some training, confident speakers' },
        { value: 1, text: 'Willing but untrained volunteers' },
        { value: 0, text: 'No designated spokespersons' }
      ],
      category: 'Training'
    },
    {
      id: 'response_time',
      question: 'How quickly can you deploy crisis communication?',
      options: [
        { value: 3, text: 'Within 30 minutes, 24/7' },
        { value: 2, text: 'Within 1-2 hours during business hours' },
        { value: 1, text: 'Within 4-6 hours' },
        { value: 0, text: 'Same day or next business day' }
      ],
      category: 'Response'
    },
    {
      id: 'stakeholder_contacts',
      question: 'Do you maintain updated stakeholder contact lists?',
      options: [
        { value: 3, text: 'Yes, verified quarterly with backup contacts' },
        { value: 2, text: 'Yes, updated annually' },
        { value: 1, text: 'Somewhat current contact lists' },
        { value: 0, text: 'Outdated or no organized contacts' }
      ],
      category: 'Resources'
    },
    {
      id: 'message_templates',
      question: 'Do you have pre-approved message templates?',
      options: [
        { value: 3, text: 'Comprehensive templates for all scenarios' },
        { value: 2, text: 'Templates for common situations' },
        { value: 1, text: 'Basic templates exist' },
        { value: 0, text: 'No pre-approved templates' }
      ],
      category: 'Messaging'
    },
    {
      id: 'digital_channels',
      question: 'How equipped are you for digital crisis communication?',
      options: [
        { value: 3, text: 'Multi-platform strategy with monitoring tools' },
        { value: 2, text: 'Active on key platforms' },
        { value: 1, text: 'Basic social media presence' },
        { value: 0, text: 'Limited digital capabilities' }
      ],
      category: 'Digital'
    },
    {
      id: 'testing_exercises',
      question: 'How often do you test your crisis communication plan?',
      options: [
        { value: 3, text: 'Quarterly drills and annual full exercises' },
        { value: 2, text: 'Annual exercises' },
        { value: 1, text: 'Occasional informal reviews' },
        { value: 0, text: 'Never tested or rarely' }
      ],
      category: 'Preparedness'
    }
  ];

  const maxScore = questions.length * 3;

  const getScoreLevel = (score) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 85) return { level: 'Excellent', color: 'text-green-400', icon: Shield };
    if (percentage >= 70) return { level: 'Good', color: 'text-blue-400', icon: CheckCircle };
    if (percentage >= 50) return { level: 'Fair', color: 'text-yellow-400', icon: Clock };
    return { level: 'Needs Improvement', color: 'text-red-400', icon: AlertTriangle };
  };

  const getRecommendations = (score) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 85) {
      return [
        'Your crisis communication readiness is excellent!',
        'Consider advanced training to maintain your edge',
        'Share your expertise with industry networks',
        'Regular plan updates and testing will keep you prepared'
      ];
    } else if (percentage >= 70) {
      return [
        'Good foundation with room for enhancement',
        'Focus on spokesperson training and message templates',
        'Implement more frequent testing and drills',
        'Consider professional consultation for optimization'
      ];
    } else if (percentage >= 50) {
      return [
        'Basic readiness with significant gaps to address',
        'Develop comprehensive crisis communication plan',
        'Invest in professional training for key staff',
        'Establish clear response protocols and contact systems'
      ];
    } else {
      return [
        'Critical gaps in crisis communication preparedness',
        'Immediate professional training recommended',
        'Develop basic crisis communication framework',
        'Consider emergency consultation services'
      ];
    }
  };

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate final score
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

  if (!isStarted) {
    return (
      <section id="assessment" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={40} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-primary font-bold mb-4">
                <span className="text-gradient">Crisis Communication Readiness Assessment</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Discover how prepared your organization is for crisis communication challenges
              </p>
              
              <div className="bg-dark-background/70 rounded-xl p-6 border border-gray-accents/30 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <Clock size={24} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">2-3 Minutes</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Users size={24} className="text-primary-red" />
                    <span className="text-gray-300 text-sm">7 Key Areas</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Target size={24} className="text-primary-blue" />
                    <span className="text-gray-300 text-sm">Personalized Results</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setIsStarted(true)}
                className="btn-assessment btn-icon-animate px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2"
              >
                <span>Start Assessment</span>
                <ArrowRight size={20} />
              </button>
              
              <p className="text-gray-400 text-sm mt-4">
                No personal information required • Instant results
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const scoreLevel = getScoreLevel(score);
    const ScoreIcon = scoreLevel.icon;
    const recommendations = getRecommendations(score);
    const percentage = Math.round((score / maxScore) * 100);

    return (
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-background border border-gray-accents rounded-xl p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <ScoreIcon size={40} className="text-white" />
                </div>
                <h2 className="text-3xl font-primary font-bold mb-4">
                  Your Crisis Communication Readiness Score
                </h2>
                <div className="mb-6">
                  <div className={`text-6xl font-bold mb-2 ${scoreLevel.color}`}>
                    {percentage}%
                  </div>
                  <div className={`text-xl font-semibold ${scoreLevel.color}`}>
                    {scoreLevel.level}
                  </div>
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
                <div>
                  <h3 className="text-xl font-bold text-light-text mb-4">Key Recommendations:</h3>
                  <ul className="space-y-3">
                    {recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-light-text mb-4">Your Score Breakdown:</h3>
                  <div className="space-y-3">
                    {questions.map((question, index) => (
                      <div key={question.id} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                        <span className="text-gray-300 text-sm">{question.category}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-primary-blue font-semibold">
                            {answers[question.id]}/3
                          </span>
                          <div className="w-12 bg-gray-600 rounded-full h-2">
                            <div 
                              className="bg-primary-blue h-2 rounded-full"
                              style={{ width: `${(answers[question.id] / 3) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="bg-primary-blue/10 rounded-lg p-6 border border-primary-blue/30 mb-6">
                  <h3 className="text-lg font-bold text-light-text mb-2">
                    Ready to Improve Your Crisis Communication?
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Get personalized training recommendations and expert guidance to enhance your organization's crisis readiness.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={goToBookDemo}
                    className="btn-primary px-6 py-3 font-semibold"
                  >
                    Book Free Strategy Session
                  </button>
                  
                  <button 
                    onClick={resetAssessment}
                    className="btn-secondary btn-icon-animate px-6 py-3 font-semibold inline-flex items-center space-x-2"
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

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-primary-blue font-semibold">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-gray-400 text-sm">
                Category: {question.category}
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
              Choose the option that best describes your organization
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrisisReadinessAssessment;