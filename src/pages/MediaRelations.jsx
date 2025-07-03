import React from 'react';
import {Megaphone,Users,Video,Mic,FileText,Globe,Camera,Phone,Newspaper} from 'lucide-react';
import PageHero from '../components/PageHero';

const MediaRelations=()=> {
  const services=[
    {
      icon: Users,
      title: 'Media Relationship Building',
      description: 'Develop and maintain positive relationships with key media contacts and outlets.',
      details: ['Contact database development','Regular media engagement','Trust building initiatives','Proactive outreach programs'],
      outcomes: ['Strong media network','Trusted relationships','Improved coverage','Crisis support']
    },
    {
      icon: Video,
      title: 'Press Conference Management',
      description: 'Professional planning and execution of press conferences and media events.',
      details: ['Event planning and logistics','Media kit preparation','Q&A preparation','Follow-up coordination'],
      outcomes: ['Professional events','Clear messaging','Strong attendance','Positive coverage']
    },
    {
      icon: Mic,
      title: 'Interview Training',
      description: 'Comprehensive training to handle media interviews with confidence and clarity.',
      details: ['Message development','Bridging techniques','Crisis interview skills','On-camera presence'],
      outcomes: ['Interview confidence','Message control','Professional presence','Crisis readiness']
    },
    {
      icon: FileText,
      title: 'Press Release Strategy',
      description: 'Strategic development and distribution of effective press releases.',
      details: ['Strategic messaging','Distribution planning','Follow-up strategies','Impact measurement'],
      outcomes: ['Media pickup','Clear communication','Brand awareness','Message amplification']
    },
    {
      icon: Globe,
      title: 'Digital Media Engagement',
      description: 'Modern approaches to engaging with digital and social media platforms.',
      details: ['Social media strategy','Digital press kits','Online relationship building','Multimedia content'],
      outcomes: ['Digital presence','Online engagement','Viral potential','Multi-platform reach']
    },
    {
      icon: Megaphone,
      title: 'Crisis Media Management',
      description: 'Specialized media relations during crisis and emergency situations.',
      details: ['Rapid response protocols','Crisis messaging','Media coordination','Reputation management'],
      outcomes: ['Controlled narrative','Trust maintenance','Reputation protection','Quick resolution']
    }
  ];

  const mediaTraining=[
    {
      title: 'Spokesperson Development',
      duration: '2 days',
      format: 'In-person',
      description: 'Transform your team members into confident, effective media spokespersons.',
      curriculum: [
        'Message formulation and delivery',
        'Body language and vocal techniques',
        'Handling difficult questions',
        'Building credibility and trust'
      ],
      investment: 'Professional Investment',
      includes: ['Video practice sessions','Personal feedback','Resource toolkit','Follow-up coaching']
    },
    {
      title: 'Crisis Interview Skills',
      duration: '1 day',
      format: 'Intensive Workshop',
      description: 'Specialized training for high-pressure media situations and crisis interviews.',
      curriculum: [
        'Crisis communication principles',
        'Staying on message under pressure',
        'Managing hostile interviews',
        'Post-crisis media follow-up'
      ],
      investment: 'Focused Investment',
      includes: ['Crisis simulations','Pressure testing','Recovery strategies','Emergency protocols']
    },
    {
      title: 'Digital Media Mastery',
      duration: '1 day',
      format: 'Online + Workshop',
      description: 'Navigate the modern digital media landscape effectively.',
      curriculum: [
        'Social media best practices',
        'Live streaming and virtual events',
        'Digital storytelling techniques',
        'Online reputation management'
      ],
      investment: 'Streamlined Investment',
      includes: ['Digital toolkit','Platform training','Content templates','Analytics setup']
    }
  ];

  const bestPractices=[
    {
      category: 'Relationship Building',
      icon: Users,
      practices: [
        'Maintain regular contact with key media personnel',
        'Provide exclusive access and insights when appropriate',
        'Be responsive and accessible during both routine and crisis situations',
        'Understand each outlet\'s audience and editorial focus'
      ]
    },
    {
      category: 'Message Management',
      icon: FileText,
      practices: [
        'Develop clear, consistent key messages',
        'Use bridging techniques to stay on message',
        'Prepare for difficult or unexpected questions',
        'Provide context and background information'
      ]
    },
    {
      category: 'Crisis Communication',
      icon: Megaphone,
      practices: [
        'Respond quickly with accurate information',
        'Acknowledge concerns and show empathy',
        'Provide regular updates as situations develop',
        'Coordinate with all relevant stakeholders'
      ]
    },
    {
      category: 'Digital Engagement',
      icon: Globe,
      practices: [
        'Monitor social media and online conversations',
        'Engage authentically with digital communities',
        'Use multimedia to enhance storytelling',
        'Maintain consistent brand voice across platforms'
      ]
    }
  ];

  const mediaTypes=[
    {
      type: 'Traditional Media',
      outlets: ['Newspapers','Television','Radio','Magazines'],
      approach: 'Formal relationships, press releases, interviews, press conferences',
      benefits: ['Credibility','Reach','Authority','Longevity']
    },
    {
      type: 'Digital Media',
      outlets: ['Online news sites','Blogs','Podcasts','Digital magazines'],
      approach: 'Digital press kits, online interviews, multimedia content, SEO optimization',
      benefits: ['Speed','Interactivity','Multimedia','Analytics']
    },
    {
      type: 'Social Media',
      outlets: ['Twitter','Facebook','LinkedIn','Instagram'],
      approach: 'Direct engagement, real-time updates, community building, influencer relations',
      benefits: ['Direct access','Real-time','Viral potential','Community feedback']
    }
  ];

  const successMetrics=[
    {
      metric: 'Media Coverage Volume',
      description: 'Number of stories and mentions across all platforms'
    },
    {
      metric: 'Message Consistency',
      description: 'Percentage of coverage that includes key messages'
    },
    {
      metric: 'Sentiment Analysis',
      description: 'Positive vs negative coverage ratio'
    },
    {
      metric: 'Reach and Impressions',
      description: 'Total audience reached through media coverage'
    },
    {
      metric: 'Response Time',
      description: 'Speed of media response during crisis situations'
    },
    {
      metric: 'Relationship Quality',
      description: 'Strength of relationships with key media contacts'
    }
  ];

  return (
    <div>
      <PageHero
        title="Media Relations"
        subtitle="Build Trust, Deliver Impact"
        description="Master the art of media relations with expert training and strategic guidance. Build lasting relationships with media professionals and deliver your message with confidence and clarity."
        icon={Megaphone}
        ctaText="Enhance Media Relations"
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Services Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Media Relations Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive media relations support to enhance your organization's public presence.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                  className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-blue transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <IconComponent size={48} className="text-primary-red flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-primary font-semibold mb-2 text-light-text">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-light-text mb-2">Services Include:</h4>
                      <ul className="space-y-1">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                            <span className="text-gray-300 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-light-text mb-2">Expected Outcomes:</h4>
                      <ul className="space-y-1">
                        {service.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                            <span className="text-gray-300 text-sm">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Media Landscape</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding different media types and how to engage with each effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mediaTypes.map((media, index) => (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-blue transition-all duration-300"
              >
                <h3 className="text-xl font-primary font-bold mb-4 text-primary-red">
                  {media.type}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-light-text mb-2">Key Outlets:</h4>
                    <div className="flex flex-wrap gap-2">
                      {media.outlets.map((outlet, outletIndex) => (
                        <span 
                          key={outletIndex} 
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {outlet}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-text mb-2">Approach:</h4>
                    <p className="text-gray-300 text-sm">{media.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-text mb-2">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {media.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Training Programs */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Media Training Programs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hands-on training programs to build media interview skills and spokesperson capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mediaTraining.map((program, index) => (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-blue transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-primary font-bold mb-2 text-light-text">
                    {program.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>{program.duration}</span>
                    <span>{program.format}</span>
                  </div>
                  <div className="text-primary-red font-bold text-lg">{program.investment}</div>
                  <div className="text-gray-400 text-sm mt-1">Custom pricing based on needs</div>
                </div>
                <p className="text-gray-300 mb-6">
                  {program.description}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-light-text mb-3">Training Curriculum:</h4>
                    <ul className="space-y-2">
                      {program.curriculum.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-text mb-3">Program Includes:</h4>
                    <ul className="space-y-2">
                      {program.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Measuring Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key metrics to track the effectiveness of your media relations efforts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-blue transition-all duration-300"
              >
                <h3 className="text-lg font-primary font-bold mb-3 text-primary-red">
                  {metric.metric}
                </h3>
                <p className="text-gray-300 text-sm">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Media Relations Best Practices</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven strategies and techniques for effective media engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestPractices.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div 
                  key={index} 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                  className="bg-dark-background border border-gray-accents rounded-xl p-6"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent size={24} className="text-primary-red" />
                    <h3 className="text-xl font-primary font-bold text-primary-red">
                      {section.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.practices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red/10 to-primary-blue/10">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              Ready to <span className="text-gradient">Master Media Relations?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your media relationships and communication effectiveness with our expert training and consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
                className="bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                Start Your Media Training
              </button>
              <button className="bg-transparent border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Download Media Kit Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaRelations;