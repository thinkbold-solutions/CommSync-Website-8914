import React from 'react';
import { Clock, Users, TrendingUp, AlertTriangle, CheckCircle, Calendar, MessageCircle, Phone } from 'lucide-react';

const HonestUrgency = ({
  type = 'capacity', // capacity, market, professional
  service = 'general',
  customMessage = null
}) => {
  const urgencyTypes = {
    capacity: {
      icon: Clock,
      title: 'Current Availability Status',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      messages: {
        general: 'Senior strategist consultations: 3 slots remaining this month',
        training: 'Next training cohort: 8 spots available, starts March 2024',
        consulting: 'Strategic consulting projects: Currently accepting 2 new clients',
        emergency: 'Emergency response teams: Priority scheduling for active situations'
      }
    },
    market: {
      icon: TrendingUp,
      title: 'Industry Reality',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      messages: {
        general: 'Crisis-ready organizations respond 75% faster to critical incidents',
        training: 'Professional communication capabilities take 3-6 months to develop properly',
        consulting: 'Organizations with strategic frameworks show 85% better stakeholder alignment',
        emergency: 'Crisis communication failures cost organizations $100K+ on average'
      }
    },
    professional: {
      icon: Users,
      title: 'Professional Standards',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      messages: {
        general: 'Complimentary strategic consultation typically valued at $500+ in the industry',
        training: 'FEMA-certified training protocols ensure comprehensive skill development',
        consulting: 'Deployment-tested methodologies provide proven strategic frameworks',
        emergency: 'Chat support available for immediate consultation on active crisis situations'
      }
    }
  };

  const urgencyData = urgencyTypes[type];
  const IconComponent = urgencyData.icon;
  const message = customMessage || urgencyData.messages[service];

  return (
    <div className={`p-4 ${urgencyData.bgColor} rounded-lg border ${urgencyData.borderColor} max-w-2xl mx-auto`}>
      <div className="flex items-center justify-center space-x-3 mb-2">
        <IconComponent size={20} className={urgencyData.color} />
        <span className={`${urgencyData.color} font-semibold text-sm`}>
          {urgencyData.title}
        </span>
      </div>
      <p className="text-gray-300 text-sm text-center">
        {message}
      </p>
    </div>
  );
};

// Pre-configured urgency components for common use cases
export const CapacityUrgency = ({ service = 'general', message = null }) => (
  <HonestUrgency type="capacity" service={service} customMessage={message} />
);

export const MarketUrgency = ({ service = 'general', message = null }) => (
  <HonestUrgency type="market" service={service} customMessage={message} />
);

export const ProfessionalUrgency = ({ service = 'general', message = null }) => (
  <HonestUrgency type="professional" service={service} customMessage={message} />
);

// Combined urgency display for maximum impact
export const UrgencyStack = ({ service = 'general' }) => (
  <div className="space-y-4">
    <MarketUrgency service={service} />
    <CapacityUrgency service={service} />
    <ProfessionalUrgency service={service} />
  </div>
);

// Emergency-specific urgency - Updated for chat-first approach
export const EmergencyUrgency = () => (
  <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
    <div className="flex items-center justify-center space-x-3 mb-2">
      <AlertTriangle size={20} className="text-red-400 animate-pulse" />
      <span className="text-red-400 font-semibold">Active Crisis Support</span>
    </div>
    <p className="text-gray-300 text-sm text-center mb-3">
      Chat support available for immediate consultation on active crisis situations
    </p>
    <div className="flex items-center justify-center space-x-4 text-sm">
      <div className="flex items-center space-x-1">
        <MessageCircle size={14} className="text-red-400" />
        <span className="text-red-400 font-semibold">Chat: Available Now</span>
      </div>
      <div className="flex items-center space-x-1">
        <Phone size={14} className="text-red-400" />
        <span className="text-red-400 font-mono text-xs">Call: 1-813-686-7496</span>
      </div>
    </div>
  </div>
);

export default HonestUrgency;