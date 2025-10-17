import React from 'react';
import { ArrowRight, Target, Users, Recycle, TrendingDown, Globe, DollarSign, BookOpen, Cpu } from 'lucide-react';

const Mission5050 = () => {
  const pillars = [
    {
      title: 'Education and Advocacy',
      icon: BookOpen,
      description: 'Comprehensive programs to raise awareness and promote climate-friendly behaviors across Lagos communities.'
    },
    {
      title: 'Circular Economy Practices',
      icon: Recycle,
      description: 'Investment in Premium Collection, Recovery, and Recycling of Plastic and other climate-risk waste resources.'
    },
    {
      title: 'Cleantech Technology and Research',
      icon: Cpu,
      description: 'Advanced technology solutions and research initiatives to support sustainable practices and innovation.'
    },
    {
      title: 'Digitization of Data',
      icon: Globe,
      description: 'Digital platforms and data management systems to track progress and optimize circular economy operations.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Mission 50:50</h1>
            <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6">
              50% Carbon Reduction • 50,000 Jobs
            </div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              An ambitious initiative to reduce Lagos carbon footprint by 50% and create 50,000 jobs over the next five years.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission Overview</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                #Mission50:50 is an initiative designed to reduce Lagos carbon footprint by 50% and create 50,000 jobs over the next five years. The initiative seeks to generate at least four kilograms of plastic from 100 thousand households over the next five years in line with His Excellency Governor Babajide Sanwo-olu's plan of zero carbon for Lagos by 2050.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This project is also estimated to generate up to 10,000 direct and indirect jobs annually within the Circular Economy space, creating opportunities for a healthy, sustainable, and prosperous Lagos while effectively reducing the carbon footprint of our dear state through the mandate of the Office of Climate Change and Circular Economy (OCCE).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                100,000 households form the basis of the Sustainability Plan, with the revolving plan entrenched deeply into the Circular Business Model.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Targets</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-green-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg"><strong>50%</strong> carbon footprint reduction</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg"><strong>50,000</strong> jobs created</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg"><strong>100,000</strong> households engaged</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg"><strong>4kg</strong> plastic per household</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg"><strong>10,000</strong> jobs annually</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mission Impact</h2>
            <p className="text-xl text-gray-600">Transforming Lagos through sustainable circular economy practices</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50%</h3>
              <p className="text-gray-600">Carbon Reduction Target</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50,000</h3>
              <p className="text-gray-600">Jobs to be Created</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100K</h3>
              <p className="text-gray-600">Households Engaged</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10K</h3>
              <p className="text-gray-600">Annual Job Creation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">COP 28 Partnership Pillars</h2>
            <p className="text-xl text-gray-600">
              At COP 28, OCCE intends to attract technical, funding, and development partners across four key pillars
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${index % 2 === 0 ? 'bg-green-500' : 'bg-yellow-500'} mr-4`}>
                    <pillar.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Plan */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sustainability Plan</h2>
            <p className="text-xl text-gray-600">Building a circular business model for long-term impact</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Household Engagement</h3>
                <p className="text-gray-700">
                  100,000 households form the basis of the Sustainability Plan, creating a strong foundation for circular economy practices.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Circular Business Model</h3>
                <p className="text-gray-700">
                  The revolving plan is entrenched deeply into the Circular Business Model, ensuring sustainable operations and continuous impact.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Zero Carbon Vision</h3>
                <p className="text-gray-700">
                  Aligned with Governor Sanwo-olu's plan of zero carbon for Lagos by 2050, creating a sustainable future for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Mission 50:50
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Be part of Lagos' ambitious journey to reduce carbon emissions by 50% while creating 50,000 sustainable jobs. Together, we can build a prosperous, zero-carbon future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission5050;