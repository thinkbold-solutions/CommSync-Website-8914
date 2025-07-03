import React, { useState, useEffect } from 'react';
import { Phone, AlertTriangle, MessageCircle } from 'lucide-react';

const EmergencyBanner = ({ 
  show = true, 
  message = "Active Crisis Situation?", 
  subMessage = "Get immediate expert support",
  variant = "emergency" // emergency, warning, info
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show banner when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide banner when scrolling down (after scrolling past 100px)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (!show) return null;

  const handleEmergencyContact = () => {
    // TODO: This will trigger the chat widget when implemented
    // For now, show a message that chat will be available
    alert('Chat widget will be available soon. For immediate assistance, call 1-813-686-7496');
    
    // Fallback to phone after chat widget interaction
    // window.open('tel:+18136867496', '_self');
  };

  const variants = {
    emergency: {
      bg: 'bg-gradient-to-r from-red-600 to-red-700',
      border: 'border-red-500/50',
      text: 'text-white',
      accent: 'text-red-100'
    },
    warning: {
      bg: 'bg-gradient-to-r from-yellow-600 to-orange-600',
      border: 'border-yellow-500/50',
      text: 'text-white',
      accent: 'text-yellow-100'
    },
    info: {
      bg: 'bg-gradient-to-r from-blue-600 to-blue-700',
      border: 'border-blue-500/50',
      text: 'text-white',
      accent: 'text-blue-100'
    }
  };

  const style = variants[variant];

  return (
    <div className={`${style.bg} border-b ${style.border} py-2 sm:py-3 px-4 relative overflow-hidden z-[40] transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Animated background pulse */}
      <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
      
      <div className="container mx-auto relative">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2 sm:gap-4">
          {/* Icon */}
          <div className="flex items-center space-x-2">
            <AlertTriangle size={20} className={`${style.text} animate-pulse`} />
            <span className={`${style.text} font-semibold text-sm sm:text-base`}>
              {message}
            </span>
          </div>
          
          {/* Message */}
          <span className={`${style.accent} text-xs sm:text-sm`}>
            {subMessage}
          </span>
          
          {/* CTA Button - Chat First, Phone Fallback */}
          <button
            onClick={handleEmergencyContact}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 border border-white/30"
          >
            <MessageCircle size={14} />
            <span className="hidden sm:inline">Chat Now</span>
            <span className="sm:hidden">Chat</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;