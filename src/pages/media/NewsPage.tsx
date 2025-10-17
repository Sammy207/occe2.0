import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const NewsPage = () => {
  const newsArticles = [
    {
      category: 'News',
      date: 'July 24, 2025',
      author: 'occeadmin',
      title: 'SA OCCE Backs Nestle\'s Safety Training as Model for Inclusive Climate Action',
      excerpt: 'Special Adviser highlights the importance of inclusive training programs in building climate resilience across Lagos communities.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '5 min read',
      featured: true
    },
    {
      category: 'News', 
      date: 'July 24, 2025',
      author: 'occeadmin',
      title: 'Lagos Circular Vision Takes Center Stage as SA Discusses Sustainability Initiatives',
      excerpt: 'Comprehensive overview of Lagos State\'s ambitious circular economy roadmap and its potential for job creation.',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '7 min read',
      featured: true
    },
    {
      category: 'Policy Update',
      date: 'July 20, 2025',
      author: 'occeadmin',
      title: 'New Climate Finance Framework Launched for Lagos State',
      excerpt: 'OCCE announces comprehensive framework to attract international climate funding and support local green initiatives.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '6 min read'
    },
    {
      category: 'Partnership',
      date: 'July 18, 2025',
      author: 'occeadmin',
      title: 'OCCE Partners with International Organizations for Climate Action',
      excerpt: 'Strategic partnerships established with global climate organizations to accelerate Lagos\' sustainability goals.',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '4 min read'
    },
    {
      category: 'Achievement',
      date: 'July 15, 2025',
      author: 'occeadmin',
      title: 'Lagos Recognized as Leading African City in Climate Action',
      excerpt: 'International recognition for Lagos State\'s innovative approach to climate change and circular economy initiatives.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '5 min read'
    },
    {
      category: 'Innovation',
      date: 'July 12, 2025',
      author: 'occeladmin',
      title: 'Tech Solutions Drive Climate Data Collection in Lagos',
      excerpt: 'New digital platforms launched to improve climate data collection and analysis across Lagos State.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '6 min read'
    }
  ];

  const featuredNews = newsArticles.filter(article => article.featured);
  const regularNews = newsArticles.filter(article => !article.featured);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Latest News</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Stay updated with the latest developments in climate action and circular economy initiatives from OCCE Lagos.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Stories</h2>
            <p className="text-xl text-gray-600">Top climate action news from Lagos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredNews.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }}>
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>by {article.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <button className="inline-flex items-center text-green-500 font-semibold hover:text-green-600 transition-colors group">
                      Read More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All News</h2>
            <p className="text-xl text-gray-600">Complete coverage of OCCE Lagos activities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }}>
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      article.category === 'Policy Update' ? 'bg-blue-100 text-blue-800' :
                      article.category === 'Partnership' ? 'bg-purple-100 text-purple-800' :
                      article.category === 'Achievement' ? 'bg-yellow-100 text-yellow-800' :
                      article.category === 'Innovation' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <button className="inline-flex items-center text-green-500 font-semibold hover:text-green-600 transition-colors group">
                    Read More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss important climate action news from Lagos.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;