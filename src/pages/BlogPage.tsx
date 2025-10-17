import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, Tag } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      category: 'Circular Economy',
      date: 'July 24, 2025',
      author: 'occeadmin',
      title: 'The Future of Circular Economy in Lagos: Opportunities and Challenges',
      excerpt: 'Exploring how Lagos can leverage circular economy principles to create sustainable economic growth while addressing environmental challenges.',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '8 min read',
      featured: true
    },
    {
      category: 'Climate Action',
      date: 'July 20, 2025',
      author: 'occeadmin',
      title: 'Building Climate Resilience in Urban Communities',
      excerpt: 'How community-based approaches are strengthening Lagos\' resilience to climate change impacts.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '6 min read',
      featured: true
    },
    {
      category: 'Sustainability',
      date: 'July 18, 2025',
      author: 'occeadmin',
      title: 'Zero Carbon Lagos: A Roadmap to 2050',
      excerpt: 'Detailed analysis of Lagos State\'s ambitious plan to achieve carbon neutrality by 2050.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '10 min read'
    },
    {
      category: 'Innovation',
      date: 'July 15, 2025',
      author: 'occeadmin',
      title: 'Green Technology Solutions for Waste Management',
      excerpt: 'Innovative technologies transforming waste management practices across Lagos communities.',
      image: 'https://images.pexels.com/photos/9324336/pexels-photo-9324336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '7 min read'
    },
    {
      category: 'Education',
      date: 'July 12, 2025',
      author: 'occeadmin',
      title: 'Empowering Youth Through Climate Education',
      excerpt: 'How the Y3Cs program is creating the next generation of climate champions in Lagos schools.',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '5 min read'
    },
    {
      category: 'Policy',
      date: 'July 10, 2025',
      author: 'occeadmin',
      title: 'Policy Frameworks for Sustainable Development',
      excerpt: 'Examining the policy landscape that supports Lagos\' transition to a sustainable economy.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      readTime: '9 min read'
    }
  ];

  const categories = ['All', 'Circular Economy', 'Climate Action', 'Sustainability', 'Innovation', 'Education', 'Policy'];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">OCCE Blog</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Insights, analysis, and stories from Lagos' journey towards sustainability and circular economy transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600">Deep dives into climate action and circular economy</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                    <span className="bg-yellow-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-3">
                    <Tag className="h-4 w-4 mr-2 text-gray-400" />
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      post.category === 'Circular Economy' ? 'bg-green-100 text-green-800' :
                      post.category === 'Climate Action' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  
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
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                  index === 0
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-xl text-gray-600">Explore our complete collection of insights and analysis</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      post.category === 'Sustainability' ? 'bg-green-100 text-green-800' :
                      post.category === 'Innovation' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'Education' ? 'bg-purple-100 text-purple-800' :
                      post.category === 'Policy' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
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
                    <span>{post.readTime}</span>
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
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-12 w-12 text-white mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stay Updated
            </h2>
          </div>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Subscribe to our blog newsletter and never miss insights on climate action and circular economy developments in Lagos.
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

export default BlogPage;