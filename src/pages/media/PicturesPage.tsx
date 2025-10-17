import React, { useState } from 'react';
import { Search, Download, Eye, X } from 'lucide-react';

const PicturesPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Events', 'Projects', 'Team', 'Community', 'Environment'];

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'ECOnomy Lagos Festival 2024',
      category: 'Events',
      description: 'Stakeholders gathering at the annual circular economy festival'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Y3Cs Boot Camp',
      category: 'Projects',
      description: 'Young Climate Champions participating in summer boot camp activities'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Special Adviser Titi Oshodi',
      category: 'Team',
      description: 'SA OCCE addressing stakeholders at climate action meeting'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Community Tree Planting',
      category: 'Community',
      description: 'Local communities participating in environmental restoration'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Let Our Lagos Breathe Campaign',
      category: 'Projects',
      description: 'Air quality awareness campaign launch in Lagos'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/9324336/pexels-photo-9324336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Renewable Energy Installation',
      category: 'Environment',
      description: 'Solar panel installation as part of clean energy initiative'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Circular Economy Workshop',
      category: 'Events',
      description: 'Business leaders learning about circular economy practices'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Mission 50:50 Launch',
      category: 'Projects',
      description: 'Official launch of the Mission 50:50 initiative'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Lagos Coastline Protection',
      category: 'Environment',
      description: 'Coastal restoration and protection efforts in Lagos'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Student Climate Champions',
      category: 'Community',
      description: 'Students showcasing their climate action projects'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'OCCE Team Meeting',
      category: 'Team',
      description: 'OCCE staff planning climate action strategies'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Clean Air Initiative',
      category: 'Environment',
      description: 'Air quality monitoring and improvement activities'
    }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Picture Gallery</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Explore visual stories of climate action and circular economy initiatives across Lagos State.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search images..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: `url(${image.src})` }}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                      <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                        <Eye className="h-5 w-5 text-white" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                        <Download className="h-5 w-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      image.category === 'Events' ? 'bg-purple-100 text-purple-800' :
                      image.category === 'Projects' ? 'bg-blue-100 text-blue-800' :
                      image.category === 'Team' ? 'bg-yellow-100 text-yellow-800' :
                      image.category === 'Community' ? 'bg-green-100 text-green-800' :
                      image.category === 'Environment' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {image.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{image.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Load More Images
            </button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Selected image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between text-white">
                <div>
                  <h3 className="font-semibold mb-1">Image Title</h3>
                  <p className="text-sm text-gray-300">Image description goes here</p>
                </div>
                <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Share Your Climate Action
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Have photos from climate action activities? Share them with us and help inspire others to join the movement.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Submit Photos
          </button>
        </div>
      </section>
    </div>
  );
};

export default PicturesPage;