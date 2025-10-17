import React, { useState } from 'react';
import { ArrowRight, Calendar, MapPin, Users, Award, Lightbulb, DollarSign, Target, Palette, ChevronLeft, ChevronRight } from 'lucide-react';

const Eco4Show = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const brochureImages = [
    '/projects/eco-fashion/Eco4show brochure new_page-0001.jpg',
    '/projects/eco-fashion/Eco4show brochure new_page-0002.jpg',
    '/projects/eco-fashion/Eco4show brochure new_page-0003.jpg',
    '/projects/eco-fashion/Eco4show brochure new_page-0004.jpg',
    '/projects/eco-fashion/Eco4show brochure new_page-0005.jpg',
    '/projects/eco-fashion/Eco4show brochure new_page-0006.jpg',
    '/projects/eco-fashion/Eco4show brochure new_page-0007.jpg'
  ];

  const objectives = [
    {
      number: '01',
      title: 'Aligning the Lagos Fashion Sector',
      description: 'Aligning the Lagos Fashion Sector with OCCE\'s Five Pillar Framework for a Thriving Circular Economy',
      icon: Target,
      color: 'yellow'
    },
    {
      number: '02', 
      title: 'Galvanise Interests',
      description: 'Galvanise interests in the Lagos ECOFashion Market',
      icon: Users,
      color: 'blue'
    },
    {
      number: '03',
      title: 'Co-create a Roadmap',
      description: 'Co-create a roadmap that is both visionary and operational',
      icon: Lightbulb,
      color: 'orange'
    },
    {
      number: '04',
      title: 'Define Resource Requirements',
      description: 'Define resource requirements for take-off, starting with the ECOFashion Fest',
      icon: DollarSign,
      color: 'teal'
    }
  ];

  const pillars = [
    {
      number: '01',
      title: 'People Development',
      description: 'Build local knowledge within the fashion industry',
      details: ['Empower fashion professionals', 'Create guidelines for recycling businesses', 'Facilitate knowledge transfer through media'],
      color: 'blue'
    },
    {
      number: '02',
      title: 'Commerce',
      description: 'Unlock commercial opportunities',
      details: ['Link local and international opportunities', 'Create a platform for existing businesses to showcase', 'Facilitate business connections'],
      color: 'purple'
    },
    {
      number: '03',
      title: 'Finance',
      description: 'Provide financial support',
      details: ['Pitch opportunities for investors', 'Facilitate funding for green fashion', 'Equip fashion entrepreneurs to leverage green City loans and other financial instruments to enable progress'],
      color: 'orange'
    },
    {
      number: '04',
      title: 'Data',
      description: 'Leverage data for growth',
      details: ['Consistently collect data using the ECO platform', 'Use data to inform policy decisions', 'Advocate for looking into ECOFashion holes in policy'],
      color: 'red'
    },
    {
      number: '05',
      title: 'Policy',
      description: 'Shape policy framework',
      details: ['Advocate for looking into ECOFashion holes in policy'],
      color: 'purple'
    }
  ];

  const eventComponents = [
    { title: 'Exhibition', description: 'Display-to-sell of different circular fashion materials, arts, etc.' },
    { title: 'Training', description: 'Different levels of training such as masterclasses, craft, learning, etc.' },
    { title: 'Conference', description: 'Engagement platform for policymakers' },
    { title: 'Funding', description: 'Pitch opportunities for investors to showcase their impact funds and for entrepreneurs to access loans and other financial instruments to enable progress' },
    { title: 'Research & Dev.', description: 'Data Collection, feasibility studies, ECO reporting' },
    { title: 'Entertainment & Runway', description: 'Mainstreaming fashion through a circular fashion concert' }
  ];

  const sponsorshipOpportunities = [
    'Brand Exposure through Vendor Exhibition',
    'Engagement & Storytelling to Share Your Brand',
    'Co-create Workshop Content and Direction',
    'Product Showcase with Special Discount and Giveaways',
    'Prime Visibility & Exposure Accross all Event Platforms',
    'Attend Exclusive Pre-Event Mixers with Key Partners & Sponsors',
    'Honoree Gala Award Presentation'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % brochureImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + brochureImages.length) % brochureImages.length);
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/projects/eco-fashion/Eco4show brochure new_page-0001.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-black/70 to-yellow-900/90"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-300/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 animate-fade-in-up">
              <Palette className="h-4 w-4 mr-2" />
              Sustainable Fashion Initiative
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              ECO<span className="text-yellow-400">4</span>SHOW
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold text-green-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Circular Fashion Fest 2025
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Redefining Style, Sustainability, and Opportunity for Lagos
            </p>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <button className="group bg-gradient-to-r from-green-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center animate-glow">
                Learn More About ECO4SHOW
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About ECO4SHOW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About ECO4SHOW</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The ECOFashion Fest, themed ECO4Show, is Lagos State's flagship platform to unlock the future of fashion through sustainability, innovation, and circular economy practices. Conceived by the Office of Climate Change and Circular Economy (OCCE), this landmark initiative brings together designers, artisans, recyclers, investors, policymakers, and consumers to co-create a thriving circular fashion ecosystem for Lagos.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The ECOFashion Fest is a movement. It celebrates the creativity of Lagos' fashion industry while addressing the urgent challenge of textile waste and its environmental impact.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From exhibitions and runway shows to workshops, policy dialogues, and financing opportunities, the Fest creates an avenue for stakeholders to showcase ideas, forge collaborations, and shape a new narrative where style drives socio-economic growth and environmental sustainability.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-xl animate-slide-in-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-green-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg">Lagos State's flagship fashion platform</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg">Focus on circular economy practices</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg">Multi-stakeholder collaboration</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg">Sustainable fashion ecosystem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Working Objectives</h2>
            <p className="text-xl text-gray-600">Strategic goals for transforming Lagos fashion industry</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="modern-card p-8 hover-lift animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 ${
                    objective.color === 'yellow' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                    objective.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                    objective.color === 'orange' ? 'bg-gradient-to-r from-orange-400 to-orange-500' :
                    'bg-gradient-to-r from-teal-400 to-teal-500'
                  }`}>
                    <objective.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-gray-400">{objective.number}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                <p className="text-gray-700 leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OCCE's Five Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">OCCE's Five Pillars</h2>
            <p className="text-xl text-gray-600">Framework for sustainable fashion development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="modern-card p-8 hover-lift animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 text-white font-bold ${
                    pillar.color === 'blue' ? 'bg-blue-500' :
                    pillar.color === 'purple' ? 'bg-purple-500' :
                    pillar.color === 'orange' ? 'bg-orange-500' :
                    pillar.color === 'red' ? 'bg-red-500' :
                    'bg-purple-500'
                  }`}>
                    {pillar.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Components */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Snapshot</h2>
            <p className="text-xl text-gray-600">Six key components of the ECO4SHOW experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventComponents.map((component, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-3">
                  <span className="text-2xl font-bold text-green-500 mr-3">0{index + 1}</span>
                  <h3 className="text-lg font-bold text-gray-900">{component.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sponsorship Opportunities</h2>
            <p className="text-xl text-gray-300">Partner with us to shape the future of sustainable fashion</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorshipOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300 animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start">
                  <div className="bg-yellow-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white">{opportunity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ECO4SHOW Brochure</h2>
            <p className="text-xl text-gray-600">Explore the complete vision and details</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={brochureImages[currentImage]} 
                alt={`ECO4SHOW Brochure Page ${currentImage + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
            
            {/* Page Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {brochureImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImage ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-center text-gray-600 mt-4">
              Page {currentImage + 1} of {brochureImages.length}
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the ECO4SHOW Movement
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Be part of Lagos' sustainable fashion revolution. Together, we can build a circular future where no fabric is wasted, and every creation adds value to people, the planet, and prosperity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Become a Partner <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eco4Show;