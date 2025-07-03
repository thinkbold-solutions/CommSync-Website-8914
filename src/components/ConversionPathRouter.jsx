import React from 'react';
import { Phone, Calendar, Target, Users, ArrowRight, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConversionPathRouter = ({
  variant = 'default', // default, emergency, strategic, training
  size = 'large', // small, medium, large
  showSecondary = true
}) => {
  const navigate = useNavigate();

  const handleEmergencyContact = () => {
    // TODO: This will trigger the chat widget when implemented
    // For now, show a message that chat will be available
    alert('Chat widget will be available soon. For immediate assistance, call 1-813-686-7496');
    
    // Fallback to phone after chat widget interaction
    // window.open('tel:+18136867496', '_self');
  };

  const handleBookDemo = () => {
    navigate('/book-demo');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleContact = () => {
    navigate('/contact');
  };

  const handleAssessment = () => {
    const element = document.getElementById('assessment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no assessment on current page, go to home page assessment
      navigate('/#assessment');
    }
  };

  const variants = {
    default: {
      primary: {
        text: 'Book Strategy Session',
        icon: Calendar,
        action: handleBookDemo,
        className: 'bg-primary-blue hover:bg-blue-700'
      },
      secondary: {
        text: 'Get Support',
        icon: MessageCircle,
        action: handleEmergencyContact,
        className: 'bg-transparent border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-white'
      }
    },
    emergency: {
      primary: {
        text: 'Chat with Expert',
        icon: MessageCircle,
        action: handleEmergencyContact,
        className: 'bg-red-600 hover:bg-red-700'
      },
      secondary: {
        text: 'Schedule Call',
        icon: Calendar,
        action: handleBookDemo,
        className: 'bg-transparent border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
      }
    },
    strategic: {
      primary: {
        text: 'Book Consultation',
        icon: Target,
        action: handleBookDemo,
        className: 'bg-primary-blue hover:bg-blue-700'
      },
      secondary: {
        text: 'Take Assessment',
        icon: Users,
        action: handleAssessment,
        className: 'bg-transparent border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
      }
    },
    training: {
      primary: {
        text: 'Book Training Session',
        icon: Users,
        action: handleBookDemo,
        className: 'bg-primary-red hover:bg-red-700'
      },
      secondary: {
        text: 'Chat About Needs',
        icon: MessageCircle,
        action: handleEmergencyContact,
        className: 'bg-transparent border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-white'
      }
    }
  };

  const sizes = {
    small: {
      buttonClass: 'px-4 py-2 text-sm',
      iconSize: 16,
      spacing: 'space-x-2'
    },
    medium: {
      buttonClass: 'px-6 py-3 text-base',
      iconSize: 18,
      spacing: 'space-x-3'
    },
    large: {
      buttonClass: 'px-8 py-4 text-lg',
      iconSize: 20,
      spacing: 'space-x-4'
    }
  };

  const variantConfig = variants[variant];
  const sizeConfig = sizes[size];

  const PrimaryIcon = variantConfig.primary.icon;
  const SecondaryIcon = variantConfig.secondary.icon;

  return (
    <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center ${sizeConfig.spacing}`}>
      {/* Primary CTA */}
      <button
        onClick={variantConfig.primary.action}
        className={`group ${variantConfig.primary.className} text-white ${sizeConfig.buttonClass} rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center space-x-2`}
      >
        <PrimaryIcon size={sizeConfig.iconSize} />
        <span>{variantConfig.primary.text}</span>
        <ArrowRight 
          size={sizeConfig.iconSize - 4} 
          className="group-hover:translate-x-1 transition-transform duration-300" 
        />
      </button>

      {/* Secondary CTA */}
      {showSecondary && (
        <button
          onClick={variantConfig.secondary.action}
          className={`group ${variantConfig.secondary.className} ${sizeConfig.buttonClass} rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center justify-center space-x-2`}
        >
          <SecondaryIcon size={sizeConfig.iconSize} />
          <span>{variantConfig.secondary.text}</span>
        </button>
      )}
    </div>
  );
};

export default ConversionPathRouter;