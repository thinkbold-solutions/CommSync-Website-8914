import React from 'react';
import { Circle, Triangle, Square } from 'lucide-react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-10 opacity-10">
        <Circle size={60} className="text-primary-red animate-float" />
      </div>
      
      <div className="absolute top-1/3 right-20 opacity-10">
        <Triangle size={40} className="text-primary-blue animate-float-delayed" />
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 opacity-10">
        <Square size={50} className="text-primary-red animate-float-slow" />
      </div>
      
      <div className="absolute top-2/3 right-1/3 opacity-10">
        <Circle size={35} className="text-primary-blue animate-float" />
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <div className="w-96 h-96 border border-primary-blue/20 rounded-full animate-rotate-slow"></div>
      </div>
    </div>
  );
};

export default FloatingElements;