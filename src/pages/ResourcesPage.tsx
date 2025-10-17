import React from 'react';
import { Download, FileText, Video, BookOpen, ExternalLink } from 'lucide-react';

const ResourcesPage = () => {
  const resources = [
    {
      category: 'Policy Documents',
      icon: FileText,
      items: [
        { title: 'Lagos Climate Action Plan 2024-2030', type: 'PDF', size: '2.5 MB' },
        { title: 'Circular Economy Framework for Lagos', type: 'PDF', size: '1.8 MB' },
        { title: 'Zero Carbon Lagos Roadmap', type: 'PDF', size: '3.2 MB' }
      ]
    },
    {
      category: 'Educational Materials',
      icon: BookOpen,
      items: [
        { title: 'Climate Change Awareness Handbook', type: 'PDF', size: '4.1 MB' },
        { title: 'Circular Economy Best Practices Guide', type: 'PDF', size: '2.9 MB' },
        { title: 'Youth Climate Champions Curriculum', type: 'PDF', size: '5.3 MB' }
      ]
    },
    {
      category: 'Research Reports',
      icon: FileText,
      items: [
        { title: 'Lagos Carbon Footprint Assessment 2024', type: 'PDF', size: '6.7 MB' },
        { title: 'Economic Impact of Circular Economy in Lagos', type: 'PDF', size: '4.5 MB' },
        { title: 'Waste Management and Recycling Study', type: 'PDF', size: '3.8 MB' }
      ]
    },
    {
      category: 'Video Resources',
      icon: Video,
      items: [
        { title: 'Introduction to OCCE Lagos', type: 'MP4', size: '45 MB' },
        { title: 'Y3Cs Program Overview', type: 'MP4', size: '32 MB' },
        { title: 'ECOnomy Lagos Explained', type: 'MP4', size: '28 MB' }
      ]
    }
  ];

  const externalLinks = [
    { title: 'UN Climate Change', url: 'https://unfccc.int/', description: 'United Nations Framework Convention on Climate Change' },
    { title: 'Ellen MacArthur Foundation', url: 'https://ellenmacarthurfoundation.org/', description: 'Leading circular economy resources and research' },
    { title: 'C40 Cities', url: 'https://www.c40.org/', description: 'Global network of cities addressing climate change' },
    { title: 'Lagos State Government', url: 'https://lagosstate.gov.ng/', description: 'Official Lagos State Government website' }
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Resources</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Access comprehensive resources, research, and educational materials to support climate action and circular economy initiatives in Lagos.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Download Resources</h2>
            <p className="text-xl text-gray-600">Essential documents and materials for climate action</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-xl border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full ${index % 2 === 0 ? 'bg-green-500' : 'bg-yellow-500'} mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.type} • {item.size}</p>
                        </div>
                        <button className="ml-4 p-2 bg-green-100 hover:bg-green-200 rounded-full transition-colors">
                          <Download className="h-5 w-5 text-green-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">External Resources</h2>
            <p className="text-xl text-gray-600">Useful links to partner organizations and global climate initiatives</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {externalLinks.map((link, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{link.description}</p>
                    <p className="text-sm text-green-600">{link.url}</p>
                  </div>
                  <ExternalLink className="h-6 w-6 text-gray-400 group-hover:text-green-600 transition-colors ml-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest resources, research updates, and climate action news from OCCE Lagos.
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

export default ResourcesPage;