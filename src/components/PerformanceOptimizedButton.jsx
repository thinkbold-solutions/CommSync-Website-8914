import React, { useState } from 'react';

const PerformanceOptimizedButton = ({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  onClick,
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const getVariantClasses = () => {
    switch (variant) {
      case 'emergency':
        return 'btn-emergency';
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'assessment':
        return 'btn-assessment';
      case 'glass':
        return 'btn-glass';
      default:
        return 'btn-primary';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-4 py-2 text-sm';
      case 'medium':
        return 'px-6 py-3 text-base';
      case 'large':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  const handleClick = (e) => {
    if (!isLoading && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={`
        ${getVariantClasses()} 
        ${getSizeClasses()} 
        ${className}
        ${isPressed ? 'scale-95' : 'scale-100'}
        ${isLoading ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}
        transform transition-transform duration-150 ease-out
        focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-opacity-50
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default PerformanceOptimizedButton;