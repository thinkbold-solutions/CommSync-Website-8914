import React from 'react';
import { Calendar, CheckCircle, Award, TrendingUp, Shield, Target, Clock, Star, Users, Zap, MessageCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DemoBookingCTA = () => {
  const navigate = useNavigate();

  const demoValue = [
    {
      icon: Target,
      title: 'Personalized Strategy Assessment',
      description: 'Comprehensive evaluation of your communication capabilities and improvement opportunities'
    },
    {
      icon: TrendingUp,
      title: 'Custom Improvement Roadmap',
      description: 'Specific recommendations tailored to your organization type and challenges'
    },
    {
      icon: Shield,
      title: 'FEMA-Certified Expertise',
      description: 'Professional insights from deployment-tested crisis communication experts'
    },
    {
      icon: Award,
      title: 'ROI Analysis & Timeline',
      description: 'Clear projections for training investment and implementation timeline'
    }
  ];

  const sessionIncludes = [
    'Current communication capability audit',
    'Crisis preparedness gap analysis',
    'Custom training recommendations',
    'Implementation timeline & budget',
    'ROI projections for your investment',
    'Emergency response protocol review',
    'Access to exclusive training resources',
    'Follow-up action plan and next steps'
  ];

  const urgencyFactors = [
    { stat: '75%', description: 'Faster crisis response with professional training' },
    { stat: '3-6 months', description: 'Time required to develop professional capabilities' },
    { stat: '$100K+', description: 'Average cost of communication failures' }
  ];

  const testimonials = [
    {
      quote: "The strategy session completely transformed our approach to crisis communication. The insights were invaluable.",
      author: "Sarah Johnson",
      role: "Emergency Management Director",
      organization: "Metro Fire Department"
    },
    {
      quote: "In just 30 minutes, they identified gaps we hadn't seen and provided actionable solutions.",
      author: "Michael Chen",
      role: "Public Information Officer",
      organization: "City Government"
    },
    {
      quote: "The personalized recommendations and expert insights made this the most valuable consultation we've had.",
      author: "Dr. Lisa Rodriguez",
      role: "Communications Director",
      organization: "Regional Healthcare System"
    }
  ];

  const goToBookDemo = () => {
    navigate('/book-demo');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleEmergencyContact = () => {
    // TODO: This will trigger the chat widget when implemented
    alert('Chat widget will be available soon. For immediate assistance, call 1-813-686-7496');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary-blue/10 to-primary-red/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Book Your Free Strategy Session</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get personalized recommendations from FEMA-certified experts who have managed hundreds of crisis communications
            </p>
            
            {/* Value Indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-dark-background/50 px-4 py-2 rounded-full border border-green-500/30">
                <CheckCircle size={16} className="text-green-400" />
                <span className="text-green-400 font-semibold text-sm">100% Free</span>
              </div>
              <div className="flex items-center space-x-2 bg-dark-background/50 px-4 py-2 rounded-full border border-blue-500/30">
                <Clock size={16} className="text-blue-400" />
                <span className="text-blue-400 font-semibold text-sm">30 Minutes</span>
              </div>
              <div className="flex items-center space-x-2 bg-dark-background/50 px-4 py-2 rounded-full border border-red-500/30">
                <Award size={16} className="text-red-400" />
                <span className="text-red-400 font-semibold text-sm">Expert Led</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Value Proposition */}
            <div className="order-2 lg:order-1">
              {/* Why This Matters */}
              <div className="mb-8">
                <h3 className="text-2xl font-primary font-bold mb-6 text-light-text">
                  Why Professional Assessment Matters
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {urgencyFactors.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-dark-background/50 rounded-lg border border-gray-accents/30">
                      <div className="text-3xl font-bold text-primary-red">{item.stat}</div>
                      <div className="text-gray-300 text-sm">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Benefits */}
              <div className="mb-8">
                <h3 className="text-2xl font-primary font-bold mb-6 text-light-text">
                  What You'll Discover
                </h3>
                <div className="space-y-4">
                  {demoValue.map((benefit, index) => {
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

              {/* Session Includes */}
              <div className="mb-8">
                <h3 className="text-2xl font-primary font-bold mb-6 text-light-text">
                  Your Strategy Session Includes:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {sessionIncludes.map((item, index) => (
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
                  This comprehensive strategy session typically costs $500+ when conducted by professional consultants. We provide it complimentary to help organizations improve their crisis communication readiness.
                </p>
              </div>
            </div>

            {/* Right Column - CTA and Social Proof */}
            <div className="order-1 lg:order-2">
              <div className="bg-dark-background rounded-xl p-8 border border-gray-accents shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-primary font-bold text-light-text mb-2">
                    Ready to Transform Your Communication?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Book your complimentary strategy session with our FEMA-certified experts
                  </p>
                  
                  {/* Primary CTA */}
                  <button
                    onClick={goToBookDemo}
                    className="w-full bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 mb-4 inline-flex items-center justify-center space-x-2"
                  >
                    <Calendar size={20} />
                    <span>Book Your Free Strategy Session</span>
                    <ArrowRight size={20} />
                  </button>
                  
                  {/* Chat Alternative */}
                  <button
                    onClick={handleEmergencyContact}
                    className="w-full bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={16} />
                    <span>Need Immediate Support? Chat Now</span>
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="border-t border-gray-600 pt-6">
                  <div className="grid grid-cols-3 gap-4 text-center mb-6">
                    <div>
                      <div className="text-2xl font-bold text-primary-blue">500+</div>
                      <div className="text-gray-400 text-xs">Professionals Trained</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-red">98%</div>
                      <div className="text-gray-400 text-xs">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-blue">24/7</div>
                      <div className="text-gray-400 text-xs">Crisis Support</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Shield size={16} className="text-green-400" />
                        <span>FEMA Certified</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={16} className="text-blue-400" />
                        <span>Expert Led</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Zap size={16} className="text-red-400" />
                        <span>Deployment Tested</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="mt-8">
                <h4 className="text-lg font-primary font-bold text-light-text mb-4 text-center">
                  What Others Say About Our Strategy Sessions
                </h4>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-dark-background/50 border border-gray-accents/30 rounded-lg p-4">
                      <div className="mb-3">
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-300 italic text-sm">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <div className="border-t border-gray-600 pt-3">
                        <div className="text-light-text font-semibold text-sm">{testimonial.author}</div>
                        <div className="text-primary-blue text-xs">{testimonial.role}</div>
                        <div className="text-gray-400 text-xs">{testimonial.organization}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="p-6 bg-gradient-to-r from-primary-red/10 to-primary-blue/10 rounded-xl border border-gray-accents/30 max-w-2xl mx-auto">
              <h3 className="text-xl font-primary font-bold text-light-text mb-4">
                Don't Wait Until Crisis Strikes
              </h3>
              <p className="text-gray-300 mb-6">
                Professional crisis communication capabilities take 3-6 months to develop. Organizations with strategic frameworks respond 75% faster to critical incidents.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={goToBookDemo}
                  className="bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Book Strategy Session Now
                </button>
                <button
                  onClick={handleEmergencyContact}
                  className="bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Chat About Your Needs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBookingCTA;