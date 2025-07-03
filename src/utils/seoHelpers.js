// SEO-safe animation and performance utilities

export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, defaultOptions);
};

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const generateStructuredData = (type, data) => {
  const baseStructure = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return JSON.stringify(baseStructure);
};

export const optimizeForCore = () => {
  // Optimize for Core Web Vitals
  
  // Preload critical resources
  if (typeof window !== 'undefined') {
    // Preload hero image
    const heroImage = new Image();
    heroImage.src = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    
    // Preconnect to external domains
    const preconnectLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://images.unsplash.com'
    ];
    
    preconnectLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      document.head.appendChild(link);
    });
  }
};

export const deferNonCriticalCSS = () => {
  // Defer non-critical CSS loading
  if (typeof window !== 'undefined') {
    const loadCSS = (href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      link.onload = () => { link.media = 'all'; };
      document.head.appendChild(link);
    };
    
    // Example: Load AOS CSS only when needed
    // loadCSS('https://unpkg.com/aos@2.3.1/dist/aos.css');
  }
};

// Performance monitoring
export const measurePerformance = (name, fn) => {
  if (typeof window !== 'undefined' && window.performance) {
    const startTime = performance.now();
    const result = fn();
    const endTime = performance.now();
    console.log(`${name} took ${endTime - startTime} milliseconds`);
    return result;
  }
  return fn();
};

// Lazy loading utility
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};