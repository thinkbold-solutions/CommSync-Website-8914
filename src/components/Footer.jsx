import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Crisis Communications', path: '/crisis-communications' },
    { name: 'PIO Community Network', path: '/pio-community' },
    { name: 'Strategic Consulting', path: '/strategic-consulting' },
    { name: 'Professional Training', path: '/professional-training' },
    { name: 'Media Relations', path: '/media-relations' },
    { name: 'Message Development', path: '/message-development' },
  ];

  const scrollToSection = (sectionId) => {
    // Check if we're on home page
    if (window.location.pathname === '/' || window.location.hash) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer id="contact" className="bg-dark-background border-t border-gray-accents/20 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info - Mobile First */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="text-2xl sm:text-3xl font-primary font-bold mb-3 sm:mb-4 inline-block">
              <span className="bg-gradient-to-r from-primary-red to-primary-blue bg-clip-text text-transparent">
                CommSync
              </span>
            </Link>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Expert PIO training and strategic communications consulting. Empowering professionals to communicate with clarity and impact.
            </p>
            
            {/* Contact Info - Mobile Optimized */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail size={16} className="sm:w-[18px] sm:h-[18px] text-primary-red" />
                <span className="text-gray-300 text-sm sm:text-base">info@commsync.com</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] text-primary-red" />
                <span className="text-gray-300 text-sm sm:text-base">(555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Services - Mobile First */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-light-text">Services</h3>
            <ul className="space-y-1 sm:space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-primary-red transition-colors duration-300 text-xs sm:text-sm block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Mobile First */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-light-text">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary-red transition-colors duration-300 text-xs sm:text-sm block"
                >
                  Home
                </Link>
              </li>
              {['Community', 'About'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-gray-300 hover:text-primary-red transition-colors duration-300 text-xs sm:text-sm text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary-red transition-colors duration-300 text-xs sm:text-sm block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/book-demo"
                  className="text-gray-300 hover:text-primary-red transition-colors duration-300 text-xs sm:text-sm block"
                >
                  Book Demo
                </Link>
              </li>
            </ul>

            {/* Social Media - Mobile Optimized */}
            <div className="mt-4 sm:mt-6">
              <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-light-text">Connect With Us</h4>
              <div className="flex space-x-2 sm:space-x-3">
                {[
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Facebook, href: '#' },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-red transition-colors duration-300"
                      aria-label={`Follow us on ${social.icon.name}`}
                    >
                      <IconComponent size={14} className="sm:w-4 sm:h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Mobile First */}
        <div className="border-t border-gray-accents/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 CommSync. All rights reserved. | Professional PIO Training & Strategic Communications Consulting
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;