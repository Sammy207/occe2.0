import React from 'react';
import { ArrowRight, Target, Lightbulb, Users, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/80 to-yellow-600/70 animate-gradient"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-300/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-yellow-300/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Morphing Shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-green-400/10 to-yellow-400/10 animate-morphing"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-yellow-400/10 to-green-400/10 animate-morphing" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Hero Content */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 animate-fade-in-up">
            <Sparkles className="h-4 w-4 mr-2" />
            Leading Climate Action in Lagos
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Towards a <span className="gradient-text bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-shimmer">zero-carbon</span> Lagos
          </h1>
          
          <p className="text-xl md:text-3xl text-white mb-12 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <span className="text-green-300 font-semibold">Preserving</span> Today, 
            <span className="text-yellow-300 font-semibold"> Protecting</span> Tomorrow
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button className="group bg-gradient-to-r from-green-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center animate-glow">
              Explore Our Mission
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Interactive Icons Section */}
        <div className="flex justify-center items-center gap-20 mb-16">
          {/* Our Ambition Icon */}
          <div className="relative group animate-slide-in-left">
            <div 
              className="bg-gradient-to-r from-green-400 to-green-600 p-8 rounded-full shadow-2xl hover:shadow-green-500/25 hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer animate-glow"
              onClick={() => window.location.href = '/about'}
            >
              <Target className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Our Goal Icon */}
          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-full shadow-2xl hover:shadow-yellow-500/25 hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer animate-pulse-slow"
              onClick={() => window.location.href = '/about'}
            >
              <Lightbulb className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>

        {/* About Preview */}
        <div className="flex justify-center animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
          <div className="relative group">
            <div 
              className="bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 p-8 rounded-full shadow-2xl hover:shadow-green-500/25 hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer animate-gradient"
              onClick={() => window.location.href = '/about'}
            >
              <Users className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;