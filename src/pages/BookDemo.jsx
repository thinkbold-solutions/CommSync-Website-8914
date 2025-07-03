import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Users, CheckCircle, Star, Zap, Shield, Target } from 'lucide-react';

const BookDemo = () => {
  useEffect(() => {
    // Load the booking widget script
    const script = document.createElement('script');
    script.src = 'https://link.thinkbold.solutions/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const demoHighlights = [
    {
      icon: Target,
      title: 'Personalized Strategy Session',
      description: 'Tailored discussion of your specific communication challenges and goals',
      duration: '30 minutes'
    },
    {
      icon: Shield,
      title: 'Crisis Communication Assessment',
      description: 'Review your current crisis response capabilities and identify improvements',
      duration: '15 minutes'
    },
    {
      icon: Users,
      title: 'Team Training Recommendations',
      description: 'Customized training plan for your PIO team and organization',
      duration: '10 minutes'
    },
    {
      icon: Zap,
      title: 'Quick Wins Identification',
      description: 'Immediate improvements you can implement right away',
      duration: '5 minutes'
    }
  ];

  const demoIncludes = [
    'Comprehensive communication audit overview',
    'Personalized training recommendations',
    'Crisis preparedness assessment',
    'ROI projections for training investment',
    'Access to exclusive resources',
    'Follow-up action plan'
  ];

  const testimonials = [
    {
      quote: "The demo session completely changed how we approach crisis communication. The insights were invaluable.",
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
      quote: "The personalized approach and expert insights made this the most valuable consultation we've had.",
      author: "Dr. Lisa Rodriguez",
      role: "Communications Director",
      organization: "Regional Healthcare System"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-background/90 via-dark-background/80 to-primary-blue/20" />
        
        {/* Floating Calendar Icon */}
        <div className="absolute top-20 right-10 opacity-20">
          <Calendar size={120} className="animate-float text-primary-blue" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-primary-red transition-colors duration-300"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
          
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-blue to-primary-red px-6 py-3 rounded-full text-white font-semibold">
              <Calendar size={20} />
              <span>Free Strategy Session</span>
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-primary font-bold mb-6 leading-tight">
            Book Your{' '}
            <span className="text-gradient-hero">Expert Demo</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Discover How CommSync Can Transform Your Communication Strategy
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Schedule a personalized 30-minute session with our expert team. We'll assess your current communication capabilities and show you exactly how our training and consulting can benefit your organization.
          </p>
          
          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-dark-background/50 rounded-lg p-4 border border-primary-blue/30">
              <Clock size={24} className="text-primary-blue mx-auto mb-2" />
              <div className="text-primary-blue font-semibold">30 Minutes</div>
              <div className="text-gray-400 text-sm">Focused Session</div>
            </div>
            <div className="bg-dark-background/50 rounded-lg p-4 border border-primary-red/30">
              <Star size={24} className="text-primary-red mx-auto mb-2" />
              <div className="text-primary-red font-semibold">100% Free</div>
              <div className="text-gray-400 text-sm">No Obligations</div>
            </div>
            <div className="bg-dark-background/50 rounded-lg p-4 border border-primary-blue/30">
              <Users size={24} className="text-primary-blue mx-auto mb-2" />
              <div className="text-primary-blue font-semibold">Expert Led</div>
              <div className="text-gray-400 text-sm">PIO Specialists</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Highlights */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-primary font-bold mb-4">
              <span className="text-gradient">What's Included in Your Demo</span>
            </h2>
            <p className="text-lg text-gray-300">A comprehensive session designed to maximize value for your time</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {demoHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-blue transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <IconComponent size={32} className="text-primary-red flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-primary font-semibold text-light-text">
                          {highlight.title}
                        </h3>
                        <span className="text-primary-blue text-sm font-semibold">
                          {highlight.duration}
                        </span>
                      </div>
                      <p className="text-gray-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calendar Booking Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Booking Form */}
              <div className="order-2 lg:order-1">
                <div className="bg-dark-background border border-gray-accents rounded-xl p-8">
                  <div className="text-center mb-6">
                    <Calendar size={48} className="text-primary-blue mx-auto mb-4" />
                    <h3 className="text-2xl font-primary font-bold text-light-text mb-2">
                      Schedule Your Demo
                    </h3>
                    <p className="text-gray-300">
                      Select a convenient time for your personalized strategy session
                    </p>
                  </div>
                  
                  {/* Calendar Embed */}
                  <div className="calendar-embed">
                    <iframe
                      src="https://link.thinkbold.solutions/widget/booking/153pBDHaNDqjhfZkI4Qi"
                      style={{
                        width: '100%',
                        border: 'none',
                        overflow: 'hidden',
                        minHeight: '600px',
                        borderRadius: '8px'
                      }}
                      scrolling="no"
                      id="e9RI2SsLsuuePekmndxY_1751402668461"
                      title="Book Demo Calendar"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Additional Info */}
              <div className="order-1 lg:order-2">
                <div className="sticky top-24">
                  <h3 className="text-2xl font-primary font-bold mb-6 text-light-text">
                    Your Demo Session Will Include:
                  </h3>
                  
                  <ul className="space-y-4 mb-8">
                    {demoIncludes.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle size={20} className="text-primary-blue mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Process Steps */}
                  <div className="bg-dark-background border border-gray-accents rounded-xl p-6 mb-8">
                    <h4 className="font-semibold text-light-text mb-4">What Happens Next:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                        <span className="text-gray-300 text-sm">Book your preferred time slot</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                        <span className="text-gray-300 text-sm">Receive calendar invite with meeting details</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                        <span className="text-gray-300 text-sm">Join your personalized strategy session</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                        <span className="text-gray-300 text-sm">Receive follow-up action plan</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-gradient-to-r from-primary-red/10 to-primary-blue/10 rounded-xl p-6">
                    <h4 className="font-semibold text-light-text mb-2">Need Help Scheduling?</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Contact our team directly for assistance with booking or questions about the demo.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="text-primary-blue">📧 info@commsync.com</div>
                      <div className="text-primary-blue">📞 (555) 123-4567</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-primary font-bold mb-4">
              <span className="text-gradient">What Others Say About Our Demos</span>
            </h2>
            <p className="text-lg text-gray-300">Real feedback from recent demo participants</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-dark-background border border-gray-accents rounded-xl p-6">
                <div className="mb-4">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <div className="text-light-text font-semibold">{testimonial.author}</div>
                  <div className="text-primary-blue text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.organization}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-primary font-bold mb-4">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-dark-background border border-gray-accents rounded-xl p-6">
              <h3 className="text-lg font-semibold text-light-text mb-3">Is this really free?</h3>
              <p className="text-gray-300">Yes, absolutely! This is a complimentary strategy session with no obligations. We believe in demonstrating value upfront.</p>
            </div>
            
            <div className="bg-dark-background border border-gray-accents rounded-xl p-6">
              <h3 className="text-lg font-semibold text-light-text mb-3">Who will conduct the demo?</h3>
              <p className="text-gray-300">Your demo will be led by one of our expert PIO trainers or strategic consultants with real-world crisis communication experience.</p>
            </div>
            
            <div className="bg-dark-background border border-gray-accents rounded-xl p-6">
              <h3 className="text-lg font-semibold text-light-text mb-3">What should I prepare for the session?</h3>
              <p className="text-gray-300">Come ready to discuss your current communication challenges and goals. No formal preparation required - we'll guide the conversation.</p>
            </div>
            
            <div className="bg-dark-background border border-gray-accents rounded-xl p-6">
              <h3 className="text-lg font-semibold text-light-text mb-3">Can multiple team members join?</h3>
              <p className="text-gray-300">Absolutely! We encourage key stakeholders to participate. Please let us know how many will be joining when you book.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDemo;