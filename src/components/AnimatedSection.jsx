import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  ...props 
}) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold,
    rootMargin: '50px'
  });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const durationClass = duration === 600 ? 'duration-600' : duration === 800 ? 'duration-700' : 'duration-500';
    
    if (!hasIntersected) {
      // Initial state - hidden but maintaining layout
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
        case 'fade-down':
          return `${baseClasses} ${durationClass} opacity-0 -translate-y-8`;
        case 'fade-left':
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`;
        case 'fade-right':
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`;
        case 'scale':
          return `${baseClasses} ${durationClass} opacity-0 scale-95`;
        case 'fade':
        default:
          return `${baseClasses} ${durationClass} opacity-0`;
      }
    }
    
    // Animated state - visible
    return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;