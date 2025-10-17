import React from 'react';
import { Calendar, User, ArrowRight, Play, Image as ImageIcon, FileText } from 'lucide-react';

const MediaPage = () => {
  const blogPosts = [
    {
      category: 'News',
      date: 'July 24, 2025',
      author: 'occeadmin',
      title: 'SA OCCE Backs Nestle\'s Safety Training as Model for Inclusive Climate Action',
      excerpt: 'Special Adviser highlights the importance of inclusive training programs in building climate resilience across Lagos communities.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '5 min read'
    },
    {
      category: 'News', 
      date: 'July 24, 2025',
      author: 'occeadmin',
      title: 'Lagos Circular Vision Takes Center Stage as SA Discusses Sustainability Initiatives',
      excerpt: 'Comprehensive overview of Lagos State\'s ambitious circular economy roadmap and its potential for job creation.',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '7 min read'
    },
    {
      category: 'ECOcirculate',
      date: 'July 2, 2025', 
      author: 'occeladmin',
      title: 'Eco-Circulate Ayobo Activation Deepens Lagos\' Circular Economy Drive',
      excerpt: 'Community engagement initiative in Ayobo demonstrates the power of grassroots participation in circular economy transformation.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '6 min read'
    },
    {
      category: 'Y3Cs',
      date: 'June 28, 2025',
      author: 'occeadmin',
      title: 'Young Climate Champions Launch Summer Boot Camp Program',
      excerpt: 'Students across Lagos participate in innovative climate education programs designed to create the next generation of environmental leaders.',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '4 min read'
    },
    {
      category: 'Mission 50:50',
      date: 'June 25, 2025',
      author: 'occeadmin',
      title: 'Mission 50:50 Reaches Milestone with 10,000 Households Engaged',
      excerpt: 'Significant progress towards the ambitious goal of reducing carbon emissions by 50% while creating 50,000 jobs.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '8 min read'
    },
    {
      category: 'Let Our Lagos Breathe',
      date: 'June 20, 2025',
      author: 'occeadmin',
      title: 'Air Quality Campaign Gains Momentum Across Lagos Communities',
      excerpt: 'Grassroots movement to improve air quality shows promising results as citizens embrace climate-friendly behaviors.',
      image: 'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '5 min read'
    }
  ];

  const mediaTypes = [
    { name: 'All', count: blogPosts.length, active: true },
    { name: 'News', count: 2, active: false },
    { name: 'ECOcirculate', count: 1, active: false },
    { name: 'Y3Cs', count: 1, active: false },
    { name: 'Mission 50:50', count: 1, active: false },
    { name: 'Let Our Lagos Breathe', count: 1, active: false }
  ];

  const featuredMedia = [
    {
      type: 'video',
      title: 'OCCE Lagos: Building a Sustainable Future',
      description: 'Watch our comprehensive overview of climate action initiatives across Lagos State.',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '12:34'
    },
    {
      type: 'gallery',
      title: 'ECOnomy Lagos Festival 2024 Highlights',
      description: 'Photo gallery from our successful circular economy showcase event.',
      thumbnail: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      count: '45 photos'
    }
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Media Center</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Stay informed with the latest news, updates, and insights from OCCE Lagos as we work towards a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Media */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Media</h2>
            <p className="text-xl text-gray-600">Highlights from our recent activities and initiatives</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredMedia.map((media, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${media.thumbnail})` }}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {media.type === 'video' ? (
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors duration-300">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    ) : (
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors duration-300">
                        <ImageIcon className="h-12 w-12 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {media.type === 'video' ? media.duration : media.count}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{media.title}</h3>
                  <p className="text-gray-200">{media.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {mediaTypes.map((type, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                  type.active
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-100'
                }`}
              >
                {type.name} ({type.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News & Articles</h2>
            <p className="text-xl text-gray-600">Stay updated with our ongoing climate action initiatives</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      post.category === 'ECOcirculate' ? 'bg-green-100 text-green-800' : 
                      post.category === 'Y3Cs' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'Mission 50:50' ? 'bg-purple-100 text-purple-800' :
                      post.category === 'Let Our Lagos Breathe' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>by {post.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <button className="inline-flex items-center text-green-500 font-semibold hover:text-green-600 transition-colors group">
                      Read More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
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
            Stay in the Loop
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss important updates about climate action and sustainability initiatives in Lagos.
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

export default MediaPage;