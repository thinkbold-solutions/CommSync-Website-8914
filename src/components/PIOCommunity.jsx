import React from 'react';
import {Users,MessageCircle,BookOpen,Award} from 'lucide-react';
import {Link} from 'react-router-dom';

const PIOCommunity=()=> {
  return (
    <section id="community" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Content - Mobile First */}
          <div data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold mb-4 sm:mb-6">
              Join the{' '}
              <span className="text-gradient">
                CommSync PIO Network
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Connect with a community of dedicated public information officers. Access exclusive training, share experiences, and grow your professional network in a supportive environment.
            </p>

            {/* Benefits List - Mobile Optimized */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                {icon: BookOpen, text: 'Exclusive training materials and resources'},
                {icon: MessageCircle, text: 'Peer support and knowledge sharing'},
                {icon: Award, text: 'Professional development opportunities'},
                {icon: Users, text: 'Networking with industry experts'},
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <IconComponent size={18} className="sm:w-5 sm:h-5 text-primary-red flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">{benefit.text}</span>
                  </div>
                );
              })}
            </div>

            <Link 
              to="/pio-community"
              className="bg-primary-blue hover:bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl inline-block"
            >
              Learn More & Join
            </Link>
          </div>

          {/* Right Column - Interactive Preview - Mobile First */}
          <div data-aos="fade-left" className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 sm:p-6 shadow-2xl">
              {/* Mock Community Interface - Mobile Optimized */}
              <div className="bg-dark-background rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-red rounded-full"></div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold">PIO Network Updates</div>
                    <div className="text-xs text-gray-400">Latest discussions</div>
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="bg-gray-700 rounded p-2 text-xs sm:text-sm">
                    "New crisis communication templates available..."
                  </div>
                  <div className="bg-gray-700 rounded p-2 text-xs sm:text-sm">
                    "Upcoming webinar: Media Relations Best Practices"
                  </div>
                </div>
              </div>

              <div className="bg-dark-background rounded-lg p-3 sm:p-4">
                <div className="text-xs sm:text-sm font-semibold mb-2">Training Calendar</div>
                <div className="grid grid-cols-3 gap-1 sm:gap-2 text-xs">
                  <div className="bg-primary-blue/20 rounded p-1 sm:p-2 text-center">
                    <div className="font-semibold text-xs sm:text-sm">15</div>
                    <div className="text-xs">Workshop</div>
                  </div>
                  <div className="bg-primary-red/20 rounded p-1 sm:p-2 text-center">
                    <div className="font-semibold text-xs sm:text-sm">22</div>
                    <div className="text-xs">Webinar</div>
                  </div>
                  <div className="bg-gray-600 rounded p-1 sm:p-2 text-center">
                    <div className="font-semibold text-xs sm:text-sm">28</div>
                    <div className="text-xs">Conference</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PIOCommunity;