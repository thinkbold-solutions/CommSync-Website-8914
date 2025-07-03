import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertTriangle, Shield, Download, Trophy, Target, Star, Award } from 'lucide-react';

const EmergencyPreparednessWidget = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [showResults, setShowResults] = useState(false);

  const checklistItems = [
    {
      id: 'crisis_plan',
      category: 'Planning',
      title: 'Crisis Communication Plan',
      description: 'Written crisis communication plan exists and is regularly updated',
      weight: 15,
      critical: true
    },
    {
      id: 'spokesperson_training',
      category: 'Training',
      title: 'Designated Spokesperson Training',
      description: 'Spokespersons are professionally trained and media-ready',
      weight: 15,
      critical: true
    },
    {
      id: 'media_contacts',
      category: 'Resources',
      title: 'Media Contact Database',
      description: 'Current media contact list with multiple contact methods',
      weight: 10,
      critical: false
    },
    {
      id: 'notification_systems',
      category: 'Technology',
      title: 'Emergency Notification Systems',
      description: 'Systems in place for rapid public notification',
      weight: 12,
      critical: true
    },
    {
      id: 'stakeholder_protocols',
      category: 'Communication',
      title: 'Stakeholder Communication Protocols',
      description: 'Clear procedures for communicating with key stakeholders',
      weight: 10,
      critical: false
    },
    {
      id: 'message_templates',
      category: 'Resources',
      title: 'Message Template Library',
      description: 'Pre-approved message templates for common scenarios',
      weight: 8,
      critical: false
    },
    {
      id: 'response_time',
      category: 'Procedures',
      title: 'Response Time Protocols',
      description: 'Defined response times for different types of incidents',
      weight: 10,
      critical: false
    },
    {
      id: 'recovery_communication',
      category: 'Planning',
      title: 'Recovery Communication Plans',
      description: 'Plans for post-crisis recovery communication',
      weight: 8,
      critical: false
    },
    {
      id: 'social_media',
      category: 'Technology',
      title: 'Social Media Crisis Protocols',
      description: 'Procedures for social media during crisis situations',
      weight: 7,
      critical: false
    },
    {
      id: 'testing_exercises',
      category: 'Training',
      title: 'Regular Testing & Exercises',
      description: 'Crisis communication plans are tested regularly',
      weight: 5,
      critical: false
    }
  ];

  const categories = [...new Set(checklistItems.map(item => item.category))];

  const handleItemCheck = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const calculateScore = () => {
    const totalWeight = checklistItems.reduce((sum, item) => sum + item.weight, 0);
    const completedWeight = checklistItems
      .filter(item => checkedItems[item.id])
      .reduce((sum, item) => sum + item.weight, 0);
    
    return Math.round((completedWeight / totalWeight) * 100);
  };

  const getReadinessLevel = (score) => {
    if (score >= 90) return { level: 'Crisis Ready', color: 'text-green-400', icon: Shield, description: 'Excellent preparedness' };
    if (score >= 70) return { level: 'Well Prepared', color: 'text-blue-400', icon: CheckCircle, description: 'Good foundation with room for improvement' };
    if (score >= 50) return { level: 'Developing', color: 'text-yellow-400', icon: Target, description: 'Basic preparedness with significant gaps' };
    return { level: 'Needs Improvement', color: 'text-red-400', icon: AlertTriangle, description: 'Critical gaps requiring immediate attention' };
  };

  const getCriticalGaps = () => {
    return checklistItems.filter(item => item.critical && !checkedItems[item.id]);
  };

  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const score = calculateScore();
  const readinessLevel = getReadinessLevel(score);
  const ReadinessIcon = readinessLevel.icon;
  const criticalGaps = getCriticalGaps();

  useEffect(() => {
    if (completedItems > 0) {
      setShowResults(true);
    }
  }, [completedItems]);

  const downloadChecklist = () => {
    const checklistData = {
      completedItems,
      totalItems: checklistItems.length,
      score,
      readinessLevel: readinessLevel.level,
      criticalGaps: criticalGaps.length,
      checkedItems: checklistItems.filter(item => checkedItems[item.id]).map(item => item.title),
      missingItems: checklistItems.filter(item => !checkedItems[item.id]).map(item => item.title)
    };

    const content = `Crisis Communication Readiness Checklist Results
    
Score: ${score}% (${readinessLevel.level})
Completed: ${completedItems}/${checklistItems.length} items
Critical Gaps: ${criticalGaps.length}

COMPLETED ITEMS:
${checklistData.checkedItems.map(item => `✓ ${item}`).join('\n')}

ITEMS TO COMPLETE:
${checklistData.missingItems.map(item => `○ ${item}`).join('\n')}

Generated by CommSync Crisis Communication Readiness Assessment
For professional guidance: https://commsync.com/book-demo`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'crisis-communication-checklist-results.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const shareResults = () => {
    const shareText = `I just completed a Crisis Communication Readiness Assessment and scored ${score}%! Check your organization's readiness at CommSync.`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Crisis Communication Readiness Score',
        text: shareText,
        url: window.location.origin
      });
    } else {
      navigator.clipboard.writeText(shareText + ' ' + window.location.origin);
      alert('Results copied to clipboard!');
    }
  };

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={32} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Emergency Preparedness Checklist</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Evaluate your organization's crisis communication readiness with this interactive assessment tool
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Checklist */}
            <div className="lg:col-span-2">
              <div className="bg-dark-background border border-gray-accents rounded-xl p-6">
                <h3 className="text-xl font-primary font-bold text-light-text mb-6">
                  Crisis Communication Readiness Checklist
                </h3>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-blue/20 text-primary-blue rounded-full text-sm font-semibold"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Checklist Items */}
                <div className="space-y-4">
                  {checklistItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                        checkedItems[item.id]
                          ? 'border-green-500 bg-green-500/10'
                          : item.critical
                          ? 'border-red-500/50 bg-red-500/5'
                          : 'border-gray-600 hover:border-primary-blue'
                      }`}
                      onClick={() => handleItemCheck(item.id)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                          checkedItems[item.id]
                            ? 'border-green-500 bg-green-500'
                            : 'border-gray-400'
                        }`}>
                          {checkedItems[item.id] && (
                            <CheckCircle size={16} className="text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className={`font-semibold ${
                              checkedItems[item.id] ? 'text-green-400' : 'text-light-text'
                            }`}>
                              {item.title}
                            </h4>
                            {item.critical && (
                              <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold">
                                CRITICAL
                              </span>
                            )}
                            <span className="px-2 py-1 bg-primary-blue/20 text-primary-blue rounded-full text-xs">
                              {item.category}
                            </span>
                          </div>
                          <p className={`text-sm ${
                            checkedItems[item.id] ? 'text-gray-300' : 'text-gray-400'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Results */}
            <div className="lg:col-span-1">
              <div className="bg-dark-background border border-gray-accents rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-primary font-bold text-light-text mb-6">
                  Your Readiness Score
                </h3>

                {showResults ? (
                  <div className="space-y-6">
                    {/* Score Display */}
                    <div className="text-center">
                      <ReadinessIcon size={48} className={`${readinessLevel.color} mx-auto mb-3`} />
                      <div className={`text-4xl font-bold ${readinessLevel.color} mb-2`}>
                        {score}%
                      </div>
                      <div className={`text-lg font-semibold ${readinessLevel.color} mb-2`}>
                        {readinessLevel.level}
                      </div>
                      <p className="text-gray-400 text-sm">{readinessLevel.description}</p>
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <div className="w-full bg-gray-600 rounded-full h-3 mb-2">
                        <div 
                          className={`h-3 rounded-full transition-all duration-1000 ${
                            score >= 90 ? 'bg-green-500' :
                            score >= 70 ? 'bg-blue-500' :
                            score >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${score}%` }}
                        ></div>
                      </div>
                      <div className="text-center text-sm text-gray-400">
                        {completedItems} of {checklistItems.length} items completed
                      </div>
                    </div>

                    {/* Critical Gaps Alert */}
                    {criticalGaps.length > 0 && (
                      <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/30">
                        <h4 className="font-semibold text-red-400 mb-2 flex items-center space-x-2">
                          <AlertTriangle size={16} />
                          <span>Critical Gaps ({criticalGaps.length})</span>
                        </h4>
                        <ul className="space-y-1">
                          {criticalGaps.map((gap, index) => (
                            <li key={index} className="text-red-300 text-sm">
                              • {gap.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Achievement Badges */}
                    <div className="space-y-2">
                      {score >= 25 && (
                        <div className="flex items-center space-x-2 text-sm">
                          <Star size={16} className="text-yellow-400" />
                          <span className="text-yellow-400">Getting Started</span>
                        </div>
                      )}
                      {score >= 50 && (
                        <div className="flex items-center space-x-2 text-sm">
                          <Award size={16} className="text-blue-400" />
                          <span className="text-blue-400">Halfway There</span>
                        </div>
                      )}
                      {score >= 75 && (
                        <div className="flex items-center space-x-2 text-sm">
                          <Trophy size={16} className="text-green-400" />
                          <span className="text-green-400">Well Prepared</span>
                        </div>
                      )}
                      {score >= 90 && (
                        <div className="flex items-center space-x-2 text-sm">
                          <Shield size={16} className="text-green-400" />
                          <span className="text-green-400">Crisis Ready!</span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={downloadChecklist}
                        className="w-full bg-primary-blue hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2"
                      >
                        <Download size={16} />
                        <span>Download Results</span>
                      </button>
                      
                      <button
                        onClick={shareResults}
                        className="w-full bg-transparent border border-primary-red text-primary-red hover:bg-primary-red hover:text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                      >
                        Share Score
                      </button>

                      <button
                        onClick={() => window.location.href = '/book-demo'}
                        className="w-full bg-primary-red hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                      >
                        Get Professional Assessment
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Shield size={48} className="text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">
                      Start checking items to see your readiness score
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          {showResults && (
            <div className="mt-12 text-center">
              <div className="p-6 bg-gradient-to-r from-primary-blue/10 to-primary-red/10 rounded-xl border border-gray-accents/30 max-w-2xl mx-auto">
                <h3 className="text-xl font-primary font-bold text-light-text mb-4">
                  Ready to Improve Your Crisis Readiness?
                </h3>
                <p className="text-gray-300 mb-6">
                  Get personalized recommendations and expert guidance to address gaps and enhance your crisis communication capabilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => window.location.href = '/book-demo'}
                    className="bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Book Free Assessment
                  </button>
                  <button
                    onClick={() => window.location.href = '/crisis-communications'}
                    className="bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    View Training Options
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmergencyPreparednessWidget;