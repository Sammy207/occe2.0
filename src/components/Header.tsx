import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ];

  const mediaItems = [
    { name: 'News', href: '/media/news' },
    { name: 'Events', href: '/media/events' },
    { name: 'Gallery', href: '/media/gallery' }
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor links for home page
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle regular navigation
      navigate(href);
    }
    setIsMenuOpen(false);
    setIsMediaOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Glass Morphism Background */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-lg border-b border-white/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => navigate('/')}>
            <div className="relative">
              <img 
                src="/OCCE LOGO WHITE-05.png" 
                alt="OCCE Lagos Logo" 
                className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <h1 className="text-lg font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
                OCCE Lagos
              </h1>
              <p className="text-xs text-gray-600">Climate Change & Circular Economy</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="relative text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            {/* Media Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMediaOpen(!isMediaOpen)}
                className="relative text-gray-700 hover:text-green-600 transition-colors duration-200 flex items-center font-medium group"
              >
                Media
                <svg className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {isMediaOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 modern-card py-2 z-50 animate-slide-in-up">
                  {mediaItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50 hover:text-green-600 transition-all duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/blog')}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                Blog
              </button>
              <button 
                onClick={() => navigate('/newsletter')}
                className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                <Sparkles className="h-4 w-4 mr-1" />
                Newsletter
              </button>
              <button 
                onClick={() => navigate('/admin/login')}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                title="Admin Access"
              >
                Admin
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-in-up">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-left text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
              
              <div>
                <button
                  onClick={() => setIsMediaOpen(!isMediaOpen)}
                  className="text-gray-700 hover:text-green-600 transition-colors duration-200 flex items-center w-full font-medium"
                >
                  Media
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMediaOpen && (
                  <div className="ml-4 mt-2 space-y-2 animate-slide-in-up">
                    {mediaItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href)}
                        className="block text-gray-600 hover:text-green-600 transition-colors duration-200"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button 
                  onClick={() => navigate('/blog')}
                  className="block text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                >
                  Blog
                </button>
                <button 
                  onClick={() => navigate('/newsletter')}
                  className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-4 py-2 rounded-full font-medium inline-flex items-center"
                >
                  <Sparkles className="h-4 w-4 mr-1" />
                  Newsletter
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;