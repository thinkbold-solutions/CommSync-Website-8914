import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    { name: 'Crisis Communications', path: '/crisis-communications' },
    { name: 'PIO Community Network', path: '/pio-community' },
    { name: 'Strategic Consulting', path: '/strategic-consulting' },
    { name: 'Professional Training', path: '/professional-training' },
    { name: 'Media Relations', path: '/media-relations' },
    { name: 'Message Development', path: '/message-development' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-background/95 backdrop-blur-sm border-b border-gray-accents/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo - Mobile First */}
        <Link to="/" className="text-xl sm:text-2xl font-primary font-bold">
          <span className="text-gradient">
            CommSync
          </span>
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link
            to="/"
            className="text-light-text hover:text-primary-red transition-colors duration-300 font-medium text-sm lg:text-base"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center space-x-1 text-light-text hover:text-primary-red transition-colors duration-300 font-medium text-sm lg:text-base">
              <span>Services</span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 lg:w-64 bg-dark-background/95 backdrop-blur-sm border border-gray-accents/20 rounded-lg shadow-2xl py-2 z-[70]">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block px-4 py-2 text-gray-300 hover:text-primary-red hover:bg-gray-800/50 transition-all duration-300 text-sm"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection('community')}
            className="text-light-text hover:text-primary-red transition-colors duration-300 font-medium text-sm lg:text-base"
          >
            Community
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="text-light-text hover:text-primary-red transition-colors duration-300 font-medium text-sm lg:text-base"
          >
            About
          </button>

          <Link
            to="/contact"
            className="text-light-text hover:text-primary-red transition-colors duration-300 font-medium text-sm lg:text-base"
          >
            Contact
          </Link>

          <Link
            to="/book-demo"
            className="bg-primary-red hover:bg-red-700 text-white px-4 lg:px-6 py-2 rounded-lg transition-all duration-300 hover:transform hover:scale-105 font-medium text-sm lg:text-base"
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-light-text p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu - Full Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-dark-background/95 backdrop-blur-sm border-b border-gray-accents/20 md:hidden z-[50]">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-light-text hover:text-primary-red transition-colors duration-300 font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div>
                <div className="text-light-text font-medium py-2 border-b border-gray-600 text-lg">
                  Services
                </div>
                <div className="pl-4 space-y-2 mt-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block text-gray-300 hover:text-primary-red transition-colors duration-300 py-1 text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  scrollToSection('community');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-light-text hover:text-primary-red transition-colors duration-300 font-medium py-2 text-lg"
              >
                Community
              </button>

              <button
                onClick={() => {
                  scrollToSection('about');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-light-text hover:text-primary-red transition-colors duration-300 font-medium py-2 text-lg"
              >
                About
              </button>

              <Link
                to="/contact"
                className="block text-light-text hover:text-primary-red transition-colors duration-300 font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                to="/book-demo"
                className="block w-full text-center bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium text-lg mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;