import React from 'react';
import {Users,MessageCircle,BookOpen,Award,Calendar,Globe,Star,Trophy,Network,Zap,Shield,Target,TrendingUp,Clock,CheckCircle,Heart,Coffee,Briefcase,GraduationCap,Rocket,Crown,Lightbulb} from 'lucide-react';

const PIOCommunityNetwork = () => {
  const benefits = [
    {
      icon: Crown,
      title: 'Expert-Led Learning',
      description: 'Learn directly from industry-leading PIOs and communication experts with decades of experience.',
      features: [
        'Master classes from top professionals',
        'One-on-one mentorship opportunities',
        'Exclusive expert interviews',
        'Advanced technique workshops'
      ],
      detailedDescription: 'Get unprecedented access to the minds behind the most successful communication campaigns and crisis responses in the industry.'
    },
    {
      icon: Rocket,
      title: 'Launch Your Career',
      description: 'Fast-track your professional development with structured pathways and career acceleration programs.',
      features: [
        'Career development roadmaps',
        'Skills assessment tools',
        'Leadership preparation',
        'Industry certification paths'
      ],
      detailedDescription: 'Whether you\'re new to the field or looking to advance, our community provides the roadmap and support to achieve your goals.'
    },
    {
      icon: Network,
      title: 'Elite Professional Network',
      description: 'Connect with the most respected names in public information and crisis communication.',
      features: [
        'Industry leader connections',
        'Peer collaboration opportunities',
        'Cross-sector networking',
        'Mentorship matching'
      ],
      detailedDescription: 'Build relationships with professionals who have shaped the industry and continue to lead major communication initiatives.'
    },
    {
      icon: Lightbulb,
      title: 'Cutting-Edge Resources',
      description: 'Access the latest tools, templates, and strategies developed by top professionals.',
      features: [
        'Latest industry frameworks',
        'Proven templates library',
        'Innovation showcases',
        'Best practice repositories'
      ],
      detailedDescription: 'Stay ahead of the curve with resources developed and tested by the industry\'s most successful practitioners.'
    },
    {
      icon: Shield,
      title: 'Crisis Response Excellence',
      description: 'Learn from professionals who have managed the world\'s most challenging communication crises.',
      features: [
        'Real crisis case studies',
        'Emergency response protocols',
        'Rapid deployment strategies',
        '24/7 expert consultation'
      ],
      detailedDescription: 'Gain insights from crisis responses that have protected organizations and saved lives during critical incidents.'
    },
    {
      icon: Star,
      title: 'Industry Recognition',
      description: 'Build your professional reputation through our recognition and certification programs.',
      features: [
        'Professional certifications',
        'Achievement recognition',
        'Industry awards eligibility',
        'Speaking opportunities'
      ],
      detailedDescription: 'Establish yourself as a recognized expert in the field through our comprehensive professional development programs.'
    }
  ];

  const industryExperts = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Former FEMA Communications Director',
      expertise: 'National disaster response communication',
      experience: '25+ years',
      achievements: [
        'Led communication for 50+ major disasters',
        'Developed national crisis protocols',
        'Trained 1000+ PIOs'
      ],
      quote: 'Effective crisis communication saves lives. This community ensures PIOs have the skills when it matters most.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief PIO, Metro Police Department',
      expertise: 'Law enforcement communication & media relations',
      experience: '18+ years',
      achievements: [
        'Managed 200+ high-profile cases',
        'Award-winning transparency initiatives',
        'National media training expert'
      ],
      quote: 'Building trust through communication is an art and science. We teach both.'
    },
    {
      name: 'Jennifer Chen',
      role: 'Corporate Crisis Communication Strategist',
      expertise: 'Corporate reputation management',
      experience: '20+ years',
      achievements: [
        'Fortune 500 crisis management',
        'International communication strategies',
        'Crisis prevention frameworks'
      ],
      quote: 'Prevention is better than response. We help you build bulletproof communication strategies.'
    },
    {
      name: 'Captain David Thompson',
      role: 'Fire Department Communications Chief',
      expertise: 'Emergency response & public safety communication',
      experience: '22+ years',
      achievements: [
        'Wildfire communication protocols',
        'Multi-agency coordination systems',
        'Community safety programs'
      ],
      quote: 'Clear communication during emergencies can mean the difference between life and death.'
    }
  ];

  const membershipTiers = [
    {
      name: 'Emerging Professional',
      level: 'Foundational Access',
      description: 'Perfect for new PIOs and those entering the field',
      features: [
        'Access to foundational training library',
        'Monthly expert-led webinars',
        'Peer discussion forums',
        'Basic networking directory',
        'Industry newsletter',
        'Job board access'
      ],
      popular: false,
      badge: 'Getting Started',
      targetAudience: 'New PIOs, Communication Staff, Students',
      investmentNote: 'Entry-level professional investment'
    },
    {
      name: 'Professional Plus',
      level: 'Comprehensive Access',
      description: 'Comprehensive access for serious PIO professionals',
      features: [
        'Everything in Emerging Professional',
        'Quarterly expert masterclasses',
        'One-on-one mentorship sessions',
        'Advanced training modules',
        'Crisis response hotline access',
        'Regional chapter participation',
        'Certification program eligibility',
        'Expert office hours'
      ],
      popular: true,
      badge: 'Most Popular',
      targetAudience: 'Experienced PIOs, Department Heads, Consultants',
      investmentNote: 'Professional-level annual investment'
    },
    {
      name: 'Executive Circle',
      level: 'Elite Partnership',
      description: 'Elite access for senior professionals and organizations',
      features: [
        'Everything in Professional Plus',
        'Exclusive executive roundtables',
        'Direct expert consultation',
        'Custom training development',
        'Speaking opportunity access',
        'Industry research previews',
        'VIP event access',
        'Personal brand development',
        'Media interview preparation'
      ],
      popular: false,
      badge: 'Elite Access',
      targetAudience: 'Senior Executives, Directors, Thought Leaders',
      investmentNote: 'Executive-level strategic investment'
    }
  ];

  const communityFeatures = [
    {
      icon: BookOpen,
      title: 'Expert-Curated Learning Paths',
      description: 'Structured learning journeys designed by industry leaders for maximum impact',
      details: [
        'Beginner to expert progressions',
        'Specialized skill tracks',
        'Competency assessments',
        'Personalized recommendations'
      ],
      highlight: 'Learn from the best, at your own pace'
    },
    {
      icon: MessageCircle,
      title: 'Direct Expert Access',
      description: 'Regular office hours and Q&A sessions with top industry professionals',
      details: [
        'Weekly expert office hours',
        'Monthly AMA sessions',
        'Crisis consultation hotline',
        'Personalized career guidance'
      ],
      highlight: 'Get answers from those who\'ve been there'
    },
    {
      icon: Trophy,
      title: 'Recognition & Certification',
      description: 'Industry-recognized credentials and achievement recognition programs',
      details: [
        'Professional certifications',
        'Skill badges',
        'Achievement portfolios',
        'Industry awards'
      ],
      highlight: 'Build your professional reputation'
    },
    {
      icon: Globe,
      title: 'Global Professional Network',
      description: 'Connect with PIOs and communication professionals worldwide',
      details: [
        'International chapters',
        'Cross-sector connections',
        'Mentorship matching',
        'Collaboration projects'
      ],
      highlight: 'Your network is your net worth'
    }
  ];

  const launchBenefits = [
    {
      title: 'Founding Member Exclusive',
      description: 'Be among the first 500 founding members and receive lifetime benefits',
      perks: [
        'Founding member recognition',
        'Exclusive founding member badge',
        'Direct input on community development',
        'Priority access to all future features'
      ]
    },
    {
      title: 'Early Access Programs',
      description: 'Get first access to new training, tools, and expert sessions',
      perks: [
        'Beta testing opportunities',
        'Preview new content',
        'Early event registration',
        'Feedback influence on development'
      ]
    },
    {
      title: 'Charter Member Recognition',
      description: 'Special recognition as a community founding member',
      perks: [
        'Charter member certificate',
        'Profile highlighting',
        'Speaking opportunities',
        'Leadership development track'
      ]
    }
  ];

  const upcomingLaunchEvents = [
    {
      date: 'Launch Week',
      title: 'Grand Opening Ceremony',
      type: 'Virtual Event',
      duration: '2 hours',
      speakers: 'All Expert Panel',
      description: 'Official launch with keynotes from all industry experts',
      exclusive: true
    },
    {
      date: 'Week 2',
      title: 'Crisis Communication Masterclass',
      type: 'Expert Workshop',
      duration: '4 hours',
      speakers: 'Dr. Sarah Mitchell',
      description: 'Deep dive into national-level crisis communication strategies',
      exclusive: true
    },
    {
      date: 'Week 3',
      title: 'Media Relations Excellence',
      type: 'Interactive Workshop',
      duration: '3 hours',
      speakers: 'Marcus Rodriguez',
      description: 'Advanced media relations techniques from a veteran PIO',
      exclusive: true
    },
    {
      date: 'Month 2',
      title: 'Building Your Professional Brand',
      type: 'Career Development',
      duration: '90 minutes',
      speakers: 'Jennifer Chen',
      description: 'Strategies for establishing yourself as a thought leader',
      exclusive: true
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }} 
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-background/90 via-dark-background/80 to-primary-blue/20" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Launch Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-red to-primary-blue px-6 py-3 rounded-full text-white font-semibold text-lg">
              <Rocket size={24} />
              <span>Now Launching - Join the Founding Members</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-primary font-bold mb-6 leading-tight">
            The Premier{' '}
            <span className="text-gradient-hero">PIO Community</span>
            {' '}Network
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            Learn from Industry Leaders. Build Elite Connections. Accelerate Your Career.
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Join an exclusive community where top PIO professionals share their expertise, mentor emerging talent, and collaborate on the future of public information and crisis communication.
          </p>

          {/* Expert Highlight */}
          <div className="mb-8 p-4 bg-dark-background/50 rounded-lg border border-primary-blue/30">
            <p className="text-gray-300 mb-2">
              <strong className="text-primary-blue">Expert-Led Community:</strong> Learn directly from professionals who have managed national disasters, corporate crises, and high-profile incidents.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="group bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center space-x-2"
            >
              <span>Become a Founding Member</span>
              <Star className="group-hover:rotate-12 transition-transform duration-300" size={20} />
            </button>
            <button 
              className="group bg-transparent border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Learn More</span>
              <Users size={20} />
            </button>
          </div>

          {/* Launch Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-red">50+</div>
              <div className="text-gray-400 text-sm">Industry Experts</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-blue">500</div>
              <div className="text-gray-400 text-sm">Founding Member Spots</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-red">100%</div>
              <div className="text-gray-400 text-sm">Expert-Led Content</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-blue">24/7</div>
              <div className="text-gray-400 text-sm">Professional Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Benefits */}
      <section className="py-16 bg-gradient-to-r from-primary-red/10 to-primary-blue/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-primary font-bold mb-4">
              <span className="text-gradient">Founding Member Exclusive Benefits</span>
            </h2>
            <p className="text-lg text-gray-300">Limited-time opportunities for our first 500 members</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {launchBenefits.map((benefit, index) => (
              <div key={index} className="bg-dark-background/80 border border-primary-red/30 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-primary-red mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.perks.map((perk, perkIndex) => (
                    <li key={perkIndex} className="flex items-center justify-center space-x-2">
                      <Star size={16} className="text-primary-blue" />
                      <span className="text-gray-300 text-sm">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experts */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Learn from Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert panel includes the most respected names in public information and crisis communication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryExperts.map((expert, index) => (
              <div key={index} className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-blue transition-all duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center">
                    <Crown size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-primary font-bold text-light-text">{expert.name}</h3>
                    <p className="text-primary-blue font-semibold">{expert.role}</p>
                    <p className="text-gray-400 text-sm">{expert.experience} • {expert.expertise}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-light-text mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {expert.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-primary-blue">
                  <p className="text-gray-300 italic">"{expert.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">What Makes Us Different</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              This isn't just another professional network. It's a curated community of excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-dark-background border border-gray-accents rounded-xl p-8 hover:border-primary-blue transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <IconComponent size={48} className="text-primary-red flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-primary font-bold text-light-text mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-primary-blue font-semibold text-sm mb-3">
                        {feature.highlight}
                      </p>
                      <p className="text-gray-300 mb-4">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Accelerate Your Career</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to become a recognized leader in public information and crisis communication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-blue transition-all duration-300 hover:transform hover:-translate-y-2">
                  <IconComponent size={48} className="text-primary-red mb-4" />
                  <h3 className="text-xl font-primary font-semibold mb-3 text-light-text">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {benefit.detailedDescription}
                  </p>
                  <div>
                    <h4 className="font-semibold text-light-text mb-2">What You Get:</h4>
                    <ul className="space-y-1">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Launch Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Exclusive Launch Programming</span>
            </h2>
            <p className="text-xl text-gray-300">
              Founding members get exclusive access to our launch event series.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {upcomingLaunchEvents.map((event, index) => (
              <div key={index} className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-blue transition-all duration-300 relative">
                {event.exclusive && (
                  <div className="absolute -top-3 -right-3 bg-primary-red text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Founding Members Only
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-primary-red font-bold text-lg">{event.date}</div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-primary font-semibold mb-2 text-light-text">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {event.description}
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{event.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Led by:</span>
                    <span className="text-primary-blue font-semibold">{event.speakers}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              <span className="text-gradient">Choose Your Access Level</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the membership tier that matches your career stage and professional goals.
            </p>
            <div className="mt-4 p-3 bg-primary-red/10 rounded-lg border border-primary-red/30 inline-block">
              <p className="text-primary-red font-semibold">🎯 Founding Member Benefits: Special recognition and exclusive access for first 500 members!</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <div key={index} className={`relative bg-dark-background border rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 ${tier.popular ? 'border-primary-red shadow-2xl scale-105' : 'border-gray-accents hover:border-primary-blue'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-red text-white px-6 py-2 rounded-full text-sm font-semibold">
                    {tier.badge}
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-primary font-bold mb-2 text-light-text">
                    {tier.name}
                  </h3>
                  <p className="text-primary-blue font-semibold text-lg mb-4">
                    {tier.level}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                  
                  <div className="mb-4 p-3 bg-primary-blue/10 rounded-lg border border-primary-blue/30">
                    <div className="text-primary-blue font-semibold text-sm mb-1">Investment Level:</div>
                    <div className="text-gray-300 text-sm">{tier.investmentNote}</div>
                    <div className="text-gray-400 text-xs mt-1">Custom pricing based on needs</div>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    Target: {tier.targetAudience}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 ${
                    tier.popular 
                      ? 'bg-primary-red hover:bg-red-700 text-white' 
                      : 'bg-primary-blue hover:bg-blue-800 text-white'
                  }`}
                >
                  Become a Founding Member
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red/10 to-primary-blue/10">
        <div className="container mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              Ready to <span className="text-gradient">Join the Elite?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't miss your chance to be a founding member of the premier PIO community. Only 500 founding member spots available.
            </p>
            <div className="mb-8 p-4 bg-dark-background/50 rounded-lg border border-primary-blue/30 max-w-md mx-auto">
              <div className="text-2xl font-bold text-primary-red">347 spots remaining</div>
              <div className="text-gray-400">out of 500 founding memberships</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                Secure Your Founding Membership
              </button>
              <button className="bg-transparent border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Schedule a Preview Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PIOCommunityNetwork;