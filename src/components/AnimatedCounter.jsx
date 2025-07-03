import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  className = '',
  startOnView = true 
}) => {
  const [count, setCount] = useState(0);
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if ((!startOnView || hasIntersected) && !hasStarted) {
      setHasStarted(true);
      let startTime = null;
      const startValue = 0;
      const endValue = parseInt(end.toString().replace(/\D/g, '')) || 0;

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * endValue);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [end, duration, hasIntersected, startOnView, hasStarted]);

  const displayValue = typeof end === 'string' && isNaN(end) ? end : count;

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;