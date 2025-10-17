import React from 'react';
import { MapPin, Phone, Clock, Sparkles, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-green-500/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-400/20 rounded-full animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="flex items-center mb-6">
              <Sparkles className="h-6 w-6 text-green-400 mr-2" />
              <h3 className="text-2xl font-bold text-white">Contact</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">3rd Floor, Room 307, Alausa Secretariat Ikeja, Lagos State</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <p className="text-gray-300">+234 803 347 8436</p>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-green-500 to-yellow-500 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <p className="text-gray-300">Mon - Fri: 8:00 am - 5:00 pm</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
              <h3 className="text-2xl font-bold text-white">Menu</h3>
            </div>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Our Projects', href: '#projects' },
                { name: 'Resources', href: '/resources' },
                { name: 'Blog', href: '/blog' },
                { name: 'Newsletter', href: '/newsletter' },
                { name: 'Media', href: '/media' },
                { name: 'Contact', href: '#contact' }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    onClick={() => window.location.href = item.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Blog */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-6">
              <Sparkles className="h-6 w-6 text-green-400 mr-2" />
              <h3 className="text-2xl font-bold text-white">Recent Blog</h3>
            </div>
            <div className="modern-card bg-gray-800/50 p-6 hover-lift">
              <p className="text-sm text-green-400 mb-2 font-medium">Latest Article</p>
              <h4 
                className="font-semibold text-white hover:text-green-400 transition-colors cursor-pointer leading-relaxed"
                onClick={() => window.location.href = '/blog'}
              >
                SA OCCE Backs Nestle's Safety Training as Model for Inclusive Climate Action
              </h4>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <button 
                  onClick={() => window.location.href = '/blog'}
                  className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium inline-flex items-center group"
                >
                  Read More 
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0 group">
              <div className="relative">
                <img 
                  src="/OCCE LOGO WHITE-05.png" 
                  alt="OCCE Lagos Logo" 
                  className="h-16 w-auto group-hover:scale-110 transition-transform duration-300 brightness-0 invert"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">OCCE Lagos</h4>
                <p className="text-sm text-gray-400">Climate Change & Circular Economy</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent mb-2 animate-shimmer">
                …toward a zero-carbon Lagos
              </p>
              <p className="text-sm text-gray-400">
                © 2025 Office of Climate Change & Circular Economy Lagos. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;