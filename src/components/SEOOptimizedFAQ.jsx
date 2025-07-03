import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, DollarSign, Users, Shield, Zap, MessageCircle } from 'lucide-react';

const SEOOptimizedFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 'what-is-pio-training',
      question: 'What is PIO training and why is it important?',
      answer: 'Public Information Officer (PIO) training is specialized professional development that teaches effective crisis communication, media relations, and public engagement skills. PIO training is crucial because during emergencies and critical incidents, clear and accurate communication can save lives, protect property, and maintain public trust. Our FEMA-certified training ensures PIOs can coordinate with multiple agencies, manage media relations under pressure, and deliver consistent messaging across all communication channels.',
      icon: Users,
      category: 'Training Basics',
      keywords: ['PIO training', 'public information officer training', 'crisis communication training'],
      relatedQuestions: ['How long does FEMA certification take?', 'What does crisis communication training include?']
    },
    {
      id: 'fema-certification-timeline',
      question: 'How long does it take to become FEMA certified in crisis communication?',
      answer: 'FEMA certification in crisis communication follows required course hours and additional student contact time depending on the specific certification path and your current experience level. Our comprehensive program includes ICS-100, ICS-200, ICS-300, and specialized PIO courses. The timeline includes classroom training, practical exercises, and real-world application. We offer accelerated programs for urgent needs and can deploy emergency training within 48 hours for active crisis situations.',
      icon: Clock,
      category: 'Certification',
      keywords: ['FEMA certification', 'crisis communication certification', 'ICS training timeline'],
      relatedQuestions: ['What FEMA courses are required for PIOs?', 'Can I get emergency certification?']
    },
    {
      id: 'crisis-vs-pr-difference',
      question: 'What\'s the difference between crisis communication and regular PR?',
      answer: 'Crisis communication differs significantly from regular PR in urgency, stakes, and methodology. Crisis communication operates under extreme time pressure where decisions must be made in minutes or hours, often involving life safety issues. Regular PR focuses on brand building and reputation management over longer timeframes. Crisis communication requires specialized training in emergency protocols, multi-agency coordination, and high-pressure media management. Our training emphasizes rapid response, accuracy under pressure, and coordination with emergency management professionals.',
      icon: Zap,
      category: 'Communication Types',
      keywords: ['crisis communication vs PR', 'emergency communication', 'crisis vs public relations'],
      relatedQuestions: ['When do I need crisis communication?', 'What makes crisis communication unique?']
    },
    {
      id: 'training-cost-investment',
      question: 'How much does professional crisis communication training cost?',
      answer: 'Professional crisis communication training investment ranges from $1,500 to $5,000 per person depending on certification level and program depth. Our programs deliver significant ROI - organizations with trained PIOs respond 75% faster during crises and avoid an average of $100,000+ in reputation damage. We offer group discounts, government rates, and emergency deployment options. Consider that the cost of inadequate crisis communication far exceeds training investment when incidents occur.',
      icon: DollarSign,
      category: 'Investment',
      keywords: ['crisis communication training cost', 'PIO training price', 'training investment ROI'],
      relatedQuestions: ['Do you offer group discounts?', 'What\'s the ROI of crisis training?']
    },
    {
      id: 'crisis-plan-components',
      question: 'What should be included in a crisis communication plan?',
      answer: 'A comprehensive crisis communication plan should include: designated spokesperson roles and backups, pre-approved message templates for various scenarios, stakeholder contact databases with multiple contact methods, communication channel protocols (media, social media, internal), decision-making authority matrices, coordination procedures with other agencies, and regular plan testing schedules. Our FEMA-certified approach ensures your plan meets emergency management standards and integrates with incident command systems.',
      icon: Shield,
      category: 'Planning',
      keywords: ['crisis communication plan', 'emergency communication plan', 'crisis plan components'],
      relatedQuestions: ['How often should we update our crisis plan?', 'Who should be involved in crisis planning?']
    },
    {
      id: 'emergency-response-time',
      question: 'How quickly can you provide crisis communication support?',
      answer: 'We provide immediate crisis communication support through our chat system and can escalate to phone consultation within minutes for active crisis situations. Our emergency response capability comes from years of actual emergency deployments across multiple states and incident types. Chat support is available 24/7 for immediate consultation, with phone backup at 1-813-686-7496.',
      icon: MessageCircle,
      category: 'Emergency Services',
      keywords: ['emergency communication support', 'crisis response time', '24/7 crisis help'],
      relatedQuestions: ['Do you provide 24/7 support?', 'What is emergency consultation?']
    },
    {
      id: 'training-vs-consulting',
      question: 'Should we choose training or consulting services?',
      answer: 'The choice between training and consulting depends on your immediate needs and long-term goals. Training builds internal capabilities for ongoing communication excellence and self-sufficiency. Consulting provides immediate expert support and custom solutions for specific challenges. Many organizations benefit from a combination approach: consulting for immediate needs and strategic development, followed by training to build internal expertise. We can help assess your situation during a free consultation to recommend the optimal approach.',
      icon: HelpCircle,
      category: 'Service Selection',
      keywords: ['training vs consulting', 'crisis communication services', 'PIO service options'],
      relatedQuestions: ['Can we combine training and consulting?', 'What service is right for us?']
    },
    {
      id: 'remote-vs-onsite',
      question: 'Do you offer remote training options or only on-site?',
      answer: 'We offer both remote and on-site training options to meet diverse organizational needs. Remote training includes live interactive sessions, virtual simulations, and online resource access. On-site training provides hands-on experience, team building, and customized scenarios specific to your environment. Hybrid approaches combine the convenience of remote learning with the impact of in-person exercises. Our recommendation depends on your team size, budget, and specific learning objectives.',
      icon: Users,
      category: 'Training Delivery',
      keywords: ['remote PIO training', 'online crisis training', 'virtual communication training'],
      relatedQuestions: ['What technology do you use for remote training?', 'Is remote training as effective?']
    }
  ];

  const categories = [...new Set(faqData.map(faq => faq.category))];

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const handleEmergencyContact = () => {
    // TODO: This will trigger the chat widget when implemented
    alert('Chat widget will be available soon. For immediate assistance, call 1-813-686-7496');
  };

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about PIO training, crisis communication, and our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Emergency Support Notice */}
          <div className="mb-12 p-6 bg-primary-red/10 rounded-xl border border-primary-red/30">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MessageCircle size={24} className="text-primary-red" />
              <h3 className="text-xl font-primary font-bold text-light-text">
                Need Immediate Crisis Support?
              </h3>
            </div>
            <p className="text-gray-300 text-center mb-4">
              Don't wait if you're facing an active crisis situation. Our chat support is available for immediate consultation.
            </p>
            <div className="text-center">
              <button
                onClick={handleEmergencyContact}
                className="bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Start Chat Support</span>
              </button>
              <p className="text-gray-400 text-sm mt-2">
                Phone backup: 1-813-686-7496
              </p>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary-blue/20 text-primary-blue rounded-full text-sm font-semibold"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq) => {
              const IconComponent = faq.icon;
              const isOpen = openFAQ === faq.id;

              return (
                <div
                  key={faq.id}
                  className="bg-dark-background border border-gray-accents rounded-xl overflow-hidden transition-all duration-300 hover:border-primary-blue"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <IconComponent size={24} className="text-primary-blue flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-light-text mb-1">
                          {faq.question}
                        </h3>
                        <span className="text-sm text-primary-blue font-medium">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {isOpen ? (
                        <ChevronUp size={20} className="text-primary-blue" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-400" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="pl-10">
                        <div className="prose prose-invert max-w-none">
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {faq.answer}
                          </p>
                        </div>

                        {/* Related Questions */}
                        {faq.relatedQuestions && faq.relatedQuestions.length > 0 && (
                          <div className="mt-4 p-4 bg-primary-blue/10 rounded-lg border border-primary-blue/30">
                            <h4 className="text-sm font-semibold text-primary-blue mb-2">
                              Related Questions:
                            </h4>
                            <ul className="space-y-1">
                              {faq.relatedQuestions.map((question, index) => (
                                <li key={index} className="text-sm text-gray-300">
                                  • {question}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Keywords (hidden but good for SEO) */}
                        <div className="hidden">
                          {faq.keywords.join(',')}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Resources */}
          <div className="mt-12 text-center">
            <div className="p-6 bg-gradient-to-r from-primary-blue/10 to-primary-red/10 rounded-xl border border-gray-accents/30">
              <h3 className="text-xl font-primary font-bold text-light-text mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-300 mb-6">
                Our expert team is ready to provide personalized answers to your specific situation and needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/book-demo'}
                  className="bg-primary-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Book Free Consultation
                </button>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="bg-transparent border border-primary-red text-primary-red hover:bg-primary-red hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Contact Us Directly
                </button>
              </div>
            </div>
          </div>

          {/* Structured Data for SEO (hidden) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqData.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SEOOptimizedFAQ;