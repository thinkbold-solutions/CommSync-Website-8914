import React from 'react';
import { Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }} 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-background/95 to-primary-blue/20" />

      {/* Rotating Globe Icon - Hidden on mobile */}
      <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
        <Globe size={120} className="animate-rotate-slow text-primary-blue" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold mb-6 sm:mb-8" 
            data-aos="fade-up"
          >
            <span className="text-gradient-subtle">
              Forged in Crisis, Focused on Clarity
            </span>
          </h2>
          
          <div 
            className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed" 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <p>
              CommSync was born from real-world experience in the most challenging communication environments. Our team has navigated complex crises, managed high-stakes media relations, and trained hundreds of public information officers across diverse organizations.
            </p>
            <p>
              We understand that effective communication during critical moments can mean the difference between confusion and clarity, panic and calm, mistrust and confidence. Our mission is to equip public information officers and organizations with the skills, strategies, and support they need to communicate with precision and impact.
            </p>
            <p>
              Through our comprehensive training programs, strategic consulting services, and vibrant professional community, we're building a network of communication experts who are ready to serve their communities when it matters most.
            </p>
          </div>
          
          <div 
            className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8" 
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-red mb-2">500+</div>
              <div className="text-gray-400 text-sm sm:text-base">Professionals Trained</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-blue mb-2">50+</div>
              <div className="text-gray-400 text-sm sm:text-base">Organizations Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-red mb-2">15+</div>
              <div className="text-gray-400 text-sm sm:text-base">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;