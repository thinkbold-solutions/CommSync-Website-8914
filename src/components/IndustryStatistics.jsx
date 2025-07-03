import React, { useState, useEffect } from 'react';
import { TrendingUp, DollarSign, Clock, Users, Shield, AlertTriangle, CheckCircle, BarChart } from 'lucide-react';

const IndustryStatistics = () => {
  const [animatedStats, setAnimatedStats] = useState({});

  const statistics = [
    {
      id: 'response_time',
      icon: Clock,
      stat: '75%',
      title: 'Faster Emergency Response',
      description: 'Organizations with crisis communication plans respond 75% faster during emergencies',
      source: 'Emergency Management Institute',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      id: 'reputation_cost',
      icon: DollarSign,
      stat: '$1.2M',
      title: 'Average Reputation Damage Cost',
      description: 'Poor crisis communication costs companies an average of $1.2M in reputation damage',
      source: 'Crisis Communication Research',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
    },
    {
      id: 'pio_coordination',
      icon: Users,
      stat: '90%',
      title: 'Better Multi-Agency Coordination',
      description: 'FEMA-certified PIOs show 90% better coordination during multi-agency responses',
      source: 'FEMA Training Analysis',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'training_impact',
      icon: TrendingUp,
      stat: '60%',
      title: 'Response Time Improvement',
      description: 'Professional crisis training reduces emergency response time by 60%',
      source: 'Professional Development Studies',
      color: 'text-primary-blue',
      bgColor: 'bg-primary-blue/10',
      borderColor: 'border-primary-blue/30'
    },
    {
      id: 'preparation_failure',
      icon: AlertTriangle,
      stat: '85%',
      title: 'Communication Failures from Poor Preparation',
      description: '85% of crisis communication failures stem from lack of proper preparation',
      source: 'Crisis Management Institute',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    },
    {
      id: 'trust_recovery',
      icon: Shield,
      stat: '3x',
      title: 'Faster Trust Recovery',
      description: 'Organizations with professional communication recover public trust 3x faster',
      source: 'Public Relations Research',
      color: 'text-primary-red',
      bgColor: 'bg-primary-red/10',
      borderColor: 'border-primary-red/30'
    }
  ];

  const industryTrends = [
    {
      trend: 'Digital-First Communication',
      percentage: 78,
      description: 'Organizations prioritizing digital communication channels'
    },
    {
      trend: 'Multi-Platform Messaging',
      percentage: 65,
      description: 'Crisis teams using 3+ communication platforms simultaneously'
    },
    {
      trend: 'Real-Time Monitoring',
      percentage: 82,
      description: 'Organizations implementing real-time social media monitoring'
    },
    {
      trend: 'Professional Training Investment',
      percentage: 58,
      description: 'Organizations increasing crisis communication training budgets'
    }
  ];

  const keyInsights = [
    {
      insight: 'Preparation is Everything',
      data: 'Organizations that invest in crisis communication preparation before incidents occur show dramatically better outcomes',
      impact: 'Prevention costs are 10x lower than crisis response costs'
    },
    {
      insight: 'Professional Training Pays Off',
      data: 'Teams with professional crisis communication training consistently outperform untrained teams',
      impact: 'ROI of training typically shows 300-500% return within first year'
    },
    {
      insight: 'Speed Matters in Crisis',
      data: 'The first hour of crisis response is critical for controlling narrative and maintaining trust',
      impact: 'Delayed response increases reputation damage exponentially'
    },
    {
      insight: 'Coordination is Key',
      data: 'Multi-agency incidents require specialized coordination skills and protocols',
      impact: 'Poor coordination leads to conflicting messages and public confusion'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statId = entry.target.dataset.statId;
            if (statId && !animatedStats[statId]) {
              setAnimatedStats(prev => ({ ...prev, [statId]: true }));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const statElements = document.querySelectorAll('[data-stat-id]');
    statElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [animatedStats]);

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
            <BarChart size={32} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
            <span className="text-gradient">Industry Statistics & Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Data-driven insights that demonstrate the critical importance of professional crisis communication
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {statistics.map((stat, index) => {
              const IconComponent = stat.icon;
              const isAnimated = animatedStats[stat.id];
              
              return (
                <div
                  key={stat.id}
                  data-stat-id={stat.id}
                  className={`${stat.bgColor} border ${stat.borderColor} rounded-xl p-6 hover:border-opacity-60 transition-all duration-300 hover:transform hover:-translate-y-1`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent size={40} className={stat.color} />
                    <div className={`text-3xl font-bold ${stat.color} transition-all duration-1000 ${
                      isAnimated ? 'scale-110' : 'scale-100'
                    }`}>
                      {stat.stat}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-primary font-bold text-light-text mb-3">
                    {stat.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {stat.description}
                  </p>
                  
                  <div className="text-xs text-gray-400">
                    Source: {stat.source}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Industry Trends */}
          <div className="mb-16">
            <h3 className="text-2xl font-primary font-bold text-center mb-12 text-light-text">
              Current Industry Trends
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industryTrends.map((trend, index) => (
                <div key={index} className="bg-dark-background border border-gray-accents rounded-xl p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-light-text">{trend.trend}</h4>
                    <span className="text-primary-blue font-bold text-xl">{trend.percentage}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-600 rounded-full h-2 mb-3">
                    <div 
                      className="bg-gradient-to-r from-primary-red to-primary-blue h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${trend.percentage}%` }}
                    ></div>
                  </div>
                  
                  <p className="text-gray-300 text-sm">{trend.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="mb-16">
            <h3 className="text-2xl font-primary font-bold text-center mb-12 text-light-text">
              Key Industry Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keyInsights.map((insight, index) => (
                <div key={index} className="bg-dark-background border border-gray-accents rounded-xl p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <CheckCircle size={24} className="text-primary-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary-blue mb-2">{insight.insight}</h4>
                      <p className="text-gray-300 text-sm mb-3">{insight.data}</p>
                      <div className="p-3 bg-primary-blue/10 rounded-lg border border-primary-blue/30">
                        <p className="text-primary-blue font-semibold text-sm">{insight.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Summary */}
          <div className="bg-gradient-to-r from-primary-blue/10 to-primary-red/10 rounded-xl p-8 border border-gray-accents/30">
            <div className="text-center">
              <h3 className="text-2xl font-primary font-bold text-light-text mb-6">
                The Data Speaks: Professional Crisis Communication Works
              </h3>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-blue mb-2">10x</div>
                    <div className="text-gray-300">Lower preparation costs vs crisis response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-red mb-2">300%</div>
                    <div className="text-gray-300">Average ROI from professional training</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-blue mb-2">24/7</div>
                    <div className="text-gray-300">Crisis support availability needed</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  These statistics demonstrate why organizations across all sectors are investing in professional 
                  crisis communication capabilities. The data is clear: preparation and professional training 
                  deliver measurable results when it matters most.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => window.location.href = '/book-demo'}
                    className="bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Improve Your Statistics
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryStatistics;