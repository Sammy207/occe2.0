import React from 'react';
import { BookOpen, RefreshCw, DollarSign, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      number: '01',
      icon: BookOpen,
      title: 'Education and Advocacy to Improve Climate Change Mitigation Efforts',
      description: 'We enable the MDAs and other stakeholders within the public and private sectors with awareness, education, and advocacy programs that will improve behavioral acceptability of climate change.',
      color: 'green',
      delay: '0s'
    },
    {
      number: '02',
      icon: RefreshCw,
      title: 'Create, Stimulate, and Manage the Circular Economy Platforms',
      description: 'Increase and improve employment opportunities in the state by unlocking and harnessing the opportunities within the circular economy to reduce GHG emissions.',
      color: 'yellow',
      delay: '0.2s'
    },
    {
      number: '03',
      icon: DollarSign,
      title: 'Finance for Climate Change',
      description: 'The Office will implement finance and budgeting processes, including accessing and accounting for reporting development aid and climate finance (required and received). For example, cost mitigation and adaptation actions over the medium and long term.',
      color: 'green',
      delay: '0.4s'
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/9324336/pexels-photo-9324336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 via-white/90 to-gray-100/95"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-green-200/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-200/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-green-300/20 rounded-full animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-yellow-100 rounded-full text-green-800 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Our Core Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our key focus areas for a sustainable Lagos</p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="modern-card overflow-hidden hover-lift animate-slide-in-up"
              style={{ animationDelay: service.delay }}
            >
              <div className="md:flex">
                <div className="md:w-1/3 p-8 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden group">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-current rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-current rounded-full"></div>
                    <div className="absolute top-1/2 right-8 w-4 h-4 border-2 border-current rounded-full"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center md:justify-start mb-6">
                      <div className={`p-6 rounded-2xl ${service.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-yellow-500 to-yellow-600'} group-hover:rotate-12 group-hover:scale-110 transform transition-all duration-500 shadow-lg animate-glow`}>
                        <service.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <span className={`text-6xl font-bold ${service.color === 'green' ? 'text-green-500' : 'text-yellow-500'} opacity-80`}>
                        {service.number}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">{service.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mt-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Implementation Progress</span>
                      <span className="text-sm font-medium text-gray-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${service.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-yellow-500 to-yellow-600'} animate-shimmer`}
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => window.location.href = '/about'}
            className="group bg-gradient-to-r from-green-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center animate-glow"
          >
            Learn More About Our Services
            <BookOpen className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;