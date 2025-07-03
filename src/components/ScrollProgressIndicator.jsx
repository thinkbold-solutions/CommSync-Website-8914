import React from 'react';
import { useScrollProgress } from '../hooks/useIntersectionObserver';

const ScrollProgressIndicator = ({ className = '' }) => {
  const scrollProgress = useScrollProgress();

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 h-1 bg-gray-800 ${className}`}>
      <div 
        className="h-full bg-gradient-to-r from-primary-red to-primary-blue transition-all duration-150 ease-out"
        style={{ 
          width: `${scrollProgress * 100}%`,
          transform: `translateZ(0)` // Force GPU acceleration
        }}
      />
    </div>
  );
};

export default ScrollProgressIndicator;