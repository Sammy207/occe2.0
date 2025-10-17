import React from 'react';
import { Calendar, User, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      category: 'News',
      date: 'July 24, 2025',
      author: 'occeadmin',
      title: 'SA OCCE Backs Nestle\'s Safety Training as Model',
      excerpt: 'for Inclusive Climate Action',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      delay: '0s'
    },
    {
      category: 'News', 
      date: 'July 24, 2025',
      author: 'occeadmin',
      title: 'Lagos Circular Vision Takes Center Stage as SA',
      excerpt: 'discusses sustainability initiatives',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      delay: '0.1s'
    },
    {
      category: 'ECOcirculate',
      date: 'July 2, 2025', 
      author: 'occeladmin',
      title: 'Eco-Circulate Ayobo Activation Deepens Lagos\' Circular Economy Drive',
      excerpt: 'Community engagement in circular economy',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      delay: '0.2s'
    }
  ];

  return (
    <section id="blog" className="py-32 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 via-white/90 to-gray-100/95"></div>
        </div>
        
        {/* Animated Elements */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-green-200/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-yellow-200/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300/20 rounded-full animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-yellow-100 rounded-full text-green-800 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Latest Updates
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">OUR BLOG</h2>
          <p className="text-xl text-gray-600">Our news & articles</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="modern-card overflow-hidden hover-lift group animate-slide-in-up"
              style={{ animationDelay: post.delay }}
            >
              {/* Image with Overlay */}
              <div className="relative aspect-video overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
                    post.category === 'ECOcirculate' ? 'bg-green-500/90 text-white' : 'bg-yellow-500/90 text-white'
                  }`}>
                    {post.category}
                  </span>
                </div>
                
                {/* Trending Icon */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>by {post.author}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <button className="inline-flex items-center text-green-500 font-semibold hover:text-green-600 transition-colors group group-hover:translate-x-2 transform duration-300">
                    Read More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button 
            onClick={() => window.location.href = '/blog'}
            className="group bg-gradient-to-r from-green-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center animate-glow"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;