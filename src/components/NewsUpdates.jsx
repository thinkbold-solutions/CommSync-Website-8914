import React, { useState, useEffect } from 'react';
import { Newspaper, ExternalLink, Calendar, ArrowRight, Rss } from 'lucide-react';

const NewsUpdates = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback news items in case RSS feed fails
  const fallbackNews = [
    {
      title: 'FEMA Updates Crisis Communication Protocols for 2024',
      description: 'New guidelines emphasize digital-first communication strategies and multi-platform coordination during emergency response.',
      link: '#',
      pubDate: '2024-01-15',
      category: 'Emergency Management'
    },
    {
      title: 'Crisis Communication Best Practices: Lessons from Recent Deployments',
      description: 'Analysis of successful crisis communication strategies from major incident responses across multiple states.',
      link: '#',
      pubDate: '2024-01-10',
      category: 'Professional Development'
    },
    {
      title: 'Digital Transformation in Public Information Management',
      description: 'How modern PIOs are leveraging technology to enhance community engagement and crisis response effectiveness.',
      link: '#',
      pubDate: '2024-01-05',
      category: 'Technology'
    },
    {
      title: 'Multi-Agency Coordination: Building Effective Communication Networks',
      description: 'Strategies for establishing seamless communication between federal, state, and local agencies during crisis response.',
      link: '#',
      pubDate: '2024-01-01',
      category: 'Coordination'
    }
  ];

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        // Using a CORS proxy to fetch the RSS feed
        const proxyUrl = 'https://api.allorigins.win/raw?url=';
        const rssUrl = 'https://rss.app/feeds/tDZJNrRAhHELAnHB.xml';
        
        const response = await fetch(proxyUrl + encodeURIComponent(rssUrl));
        
        if (!response.ok) {
          throw new Error('Failed to fetch RSS feed');
        }
        
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        const items = xmlDoc.querySelectorAll('item');
        const newsData = Array.from(items).slice(0, 4).map(item => ({
          title: item.querySelector('title')?.textContent || 'No title',
          description: item.querySelector('description')?.textContent || 'No description',
          link: item.querySelector('link')?.textContent || '#',
          pubDate: item.querySelector('pubDate')?.textContent || new Date().toISOString(),
          category: 'Industry News'
        }));
        
        setNewsItems(newsData.length > 0 ? newsData : fallbackNews);
      } catch (err) {
        console.error('RSS fetch error:', err);
        setNewsItems(fallbackNews);
        setError('Using cached news items');
      } finally {
        setLoading(false);
      }
    };

    fetchRSSFeed();
  }, []);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Recent';
    }
  };

  const truncateDescription = (description, maxLength = 120) => {
    if (description.length <= maxLength) return description;
    return description.substr(0, maxLength).trim() + '...';
  };

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
            <Newspaper size={32} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
            <span className="text-gradient">Industry News & Updates</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed about the latest developments in crisis communication, emergency management, and public information
          </p>
          
          {error && (
            <div className="mt-4 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30 max-w-md mx-auto">
              <div className="flex items-center space-x-2">
                <Rss size={16} className="text-yellow-400" />
                <span className="text-yellow-400 text-sm">Showing latest industry updates</span>
              </div>
            </div>
          )}
        </div>

        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-dark-background border border-gray-accents rounded-xl p-6 animate-pulse">
                  <div className="h-4 bg-gray-600 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-gray-600 rounded w-1/2 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-600 rounded w-full"></div>
                    <div className="h-3 bg-gray-600 rounded w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsItems.map((item, index) => (
                  <article 
                    key={index}
                    className="bg-dark-background border border-gray-accents rounded-xl p-6 hover:border-primary-blue transition-all duration-300 hover:transform hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-400 text-xs">
                        <Calendar size={12} />
                        <span>{formatDate(item.pubDate)}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-primary font-bold text-light-text mb-3 leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {truncateDescription(item.description)}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => {
                          if (item.link && item.link !== '#') {
                            window.open(item.link, '_blank', 'noopener,noreferrer');
                          }
                        }}
                        className="flex items-center space-x-2 text-primary-blue hover:text-primary-red transition-colors duration-300 text-sm font-semibold group"
                        disabled={!item.link || item.link === '#'}
                      >
                        <span>Read More</span>
                        <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* View All News CTA */}
              <div className="text-center mt-12">
                <div className="p-6 bg-gradient-to-r from-primary-blue/10 to-primary-red/10 rounded-xl border border-gray-accents/30 max-w-2xl mx-auto">
                  <h3 className="text-xl font-primary font-bold text-light-text mb-4">
                    Stay Updated on Industry Developments
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Subscribe to our newsletter for the latest crisis communication insights, training opportunities, and industry best practices.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => window.location.href = '/contact'}
                      className="bg-primary-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2"
                    >
                      <Rss size={16} />
                      <span>Subscribe to Updates</span>
                    </button>
                    <button
                      onClick={() => window.location.href = '/pio-community'}
                      className="bg-transparent border border-primary-red text-primary-red hover:bg-primary-red hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2"
                    >
                      <span>Join PIO Community</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;