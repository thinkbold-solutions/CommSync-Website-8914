import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ArrowLeft,Mail,Phone,MapPin,Clock,MessageSquare,Users,Zap,Shield,Star,CheckCircle} from 'lucide-react';

const ContactUs=()=> {
  useEffect(()=> {
    // Load the form embed script
    const script=document.createElement('script');
    script.src='https://link.thinkbold.solutions/js/form_embed.js';
    script.type='text/javascript';
    script.async=true;
    document.body.appendChild(script);

    // Cleanup script on unmount
    return ()=> {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  },[]);

  const contactMethods=[
    {
      icon: Phone,
      title: 'Phone',
      value: '(555) 123-4567',
      description: 'Call us for immediate assistance',
      availability: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@commsync.com',
      description: 'Send us a detailed message',
      availability: 'Response within 24 hours'
    },
    {
      icon: MessageSquare,
      title: 'Emergency Consultation',
      value: '24/7 Crisis Hotline',
      description: 'For active crisis situations',
      availability: 'Available 24/7'
    }
  ];

  const whyContactUs=[
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Speak directly with experienced PIO professionals who understand your challenges.'
    },
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 24 hours, with priority for urgent matters.'
    },
    {
      icon: Shield,
      title: 'Confidential Discussion',
      description: 'All conversations are confidential and tailored to your specific needs.'
    },
    {
      icon: Star,
      title: 'Customized Solutions',
      description: 'Every organization is unique. We provide personalized recommendations.'
    }
  ];

  const supportTopics=[
    'Crisis Communication Training',
    'Strategic Consulting Services',
    'PIO Community Membership',
    'Emergency Response Planning',
    'Media Relations Training',
    'Custom Training Programs',
    'Certification Programs',
    'Partnership Opportunities'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Fixed Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Simple Gradient Background - No Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-background via-gray-900 to-dark-background" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        {/* Floating Contact Icon */}
        <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
          <MessageSquare size={120} className="animate-float text-primary-blue" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-primary-red transition-colors duration-300">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-blue to-primary-red px-6 py-3 rounded-full text-white font-semibold">
              <MessageSquare size={20} />
              <span>Let's Connect</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-primary font-bold mb-6 leading-tight">
            Contact{' '}
            <span className="text-gradient-hero">Our Experts</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Ready to Transform Your Communication Strategy?
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Get in touch with our team of communication experts. Whether you need immediate crisis support, strategic consulting, or professional training, we're here to help.
          </p>

          {/* Contact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-dark-background/50 rounded-lg p-4 border border-primary-blue/30">
              <Clock size={24} className="text-primary-blue mx-auto mb-2" />
              <div className="text-primary-blue font-semibold">24 Hour</div>
              <div className="text-gray-400 text-sm">Response Time</div>
            </div>
            <div className="bg-dark-background/50 rounded-lg p-4 border border-primary-red/30">
              <Users size={24} className="text-primary-red mx-auto mb-2" />
              <div className="text-primary-red font-semibold">Expert Team</div>
              <div className="text-gray-400 text-sm">Ready to Help</div>
            </div>
            <div className="bg-dark-background/50 rounded-lg p-4 border border-primary-blue/30">
              <Shield size={24} className="text-primary-blue mx-auto mb-2" />
              <div className="text-primary-blue font-semibold">Confidential</div>
              <div className="text-gray-400 text-sm">Consultation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-primary font-bold mb-4">
              <span className="text-gradient">Multiple Ways to Connect</span>
            </h2>
            <p className="text-lg text-gray-300">Choose the contact method that works best for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method,index)=> {
              const IconComponent=method.icon;
              return (
                <div key={index} className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-blue transition-all duration-300 text-center">
                  <IconComponent size={48} className="text-primary-red mx-auto mb-4" />
                  <h3 className="text-xl font-primary font-semibold mb-2 text-light-text">
                    {method.title}
                  </h3>
                  <div className="text-primary-blue font-semibold mb-2">
                    {method.value}
                  </div>
                  <p className="text-gray-300 text-sm mb-2">
                    {method.description}
                  </p>
                  <div className="text-gray-400 text-xs">
                    {method.availability}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="bg-dark-background border border-gray-accents rounded-xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <Mail size={48} className="text-primary-blue mx-auto mb-4" />
                    <h3 className="text-2xl font-primary font-bold text-light-text mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-gray-300">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </div>
                  
                  {/* Enhanced Form Container */}
                  <div className="contact-form-embed bg-gray-800/30 rounded-lg p-4 border border-gray-600/30" style={{minHeight: '704px'}}>
                    <iframe 
                      src="https://link.thinkbold.solutions/widget/form/6MlgkpZVWqtaQYNBDEvX" 
                      style={{
                        width: '100%',
                        height: '704px',
                        border: 'none',
                        borderRadius: '8px',
                        backgroundColor: 'transparent'
                      }} 
                      id="inline-6MlgkpZVWqtaQYNBDEvX" 
                      data-layout="{'id':'INLINE'}" 
                      data-trigger-type="alwaysShow" 
                      data-trigger-value="" 
                      data-activation-type="alwaysActivated" 
                      data-activation-value="" 
                      data-deactivation-type="neverDeactivate" 
                      data-deactivation-value="" 
                      data-form-name="B-008-CUF. Contact Us Form (CommSync)" 
                      data-height="704" 
                      data-layout-iframe-id="inline-6MlgkpZVWqtaQYNBDEvX" 
                      data-form-id="6MlgkpZVWqtaQYNBDEvX" 
                      title="B-008-CUF. Contact Us Form (CommSync)" 
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Additional Info */}
              <div className="order-1 lg:order-2">
                <div className="sticky top-24">
                  <h3 className="text-2xl font-primary font-bold mb-6 text-light-text">
                    Why Contact CommSync?
                  </h3>
                  <div className="space-y-6 mb-8">
                    {whyContactUs.map((reason,index)=> {
                      const IconComponent=reason.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <IconComponent size={24} className="text-primary-blue mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-light-text mb-2">{reason.title}</h4>
                            <p className="text-gray-300 text-sm">{reason.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Support Topics */}
                  <div className="bg-dark-background border border-gray-accents rounded-xl p-6 mb-8">
                    <h4 className="font-semibold text-light-text mb-4">We Can Help With:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {supportTopics.map((topic,index)=> (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-primary-blue flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-gradient-to-r from-primary-red/10 to-primary-blue/10 rounded-xl p-6">
                    <h4 className="font-semibold text-light-text mb-2 flex items-center space-x-2">
                      <Shield size={20} className="text-primary-red" />
                      <span>Emergency Crisis Support</span>
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      For active crisis situations requiring immediate communication support.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="text-primary-red font-semibold">📞 24/7 Crisis Hotline: (555) 911-COMM</div>
                      <div className="text-primary-blue">📧 Emergency: crisis@commsync.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-primary font-bold mb-4">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-dark-background border border-gray-accents rounded-xl p-6">
              <h3 className="text-lg font-semibold text-light-text mb-3">How quickly will you respond to my inquiry?</h3>
              <p className="text-gray-300">We respond to all inquiries within 24 hours during business days. For urgent matters or crisis situations, please call our emergency hotline for immediate assistance.</p>
            </div>
            <div className="bg-dark-background border border-gray-accents rounded-xl p-6">
              <h3 className="text-lg font-semibold text-light-text mb-3">Do you offer free consultations?</h3>
              <p className="text-gray-300">Yes! We offer complimentary 30-minute strategy sessions to discuss your communication challenges and explore how we can help. You can book a demo or request a consultation through our contact form.</p>
            </div>
            <div className="bg-dark-background border border-gray-accents rounded-xl p-6">
              <h3 className="text-lg font-semibold text-light-text mb-3">Can you help with active crisis situations?</h3>
              <p className="text-gray-300">Absolutely. We provide 24/7 emergency crisis communication support. For active situations, please call our crisis hotline at (555) 911-COMM for immediate assistance.</p>
            </div>
            <div className="bg-dark-background border border-gray-accents rounded-xl p-6">
              <h3 className="text-lg font-semibold text-light-text mb-3">What information should I include in my message?</h3>
              <p className="text-gray-300">Please include your organization type, specific challenges you're facing, your goals, and any timeline considerations. The more details you provide, the better we can tailor our response to your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;