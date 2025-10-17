import React from 'react';
import { ArrowRight, Users, TrendingUp, Building, Calendar } from 'lucide-react';

const EconomyLagos = () => {
  const pillars = [
    {
      title: 'Stakeholder Engagements',
      icon: Users,
      goal: 'To foster collaboration among key stakeholders, including government agencies, businesses, NGOs, and local communities.',
      objectives: [
        'Present the economic potential of the circular economy in Lagos State.',
        'Facilitate dialogue on policy frameworks that support circular practices.',
        'Identify challenges and co-create solutions through collective efforts.'
      ]
    },
    {
      title: 'Market Development Initiatives',
      icon: TrendingUp,
      goal: 'To raise awareness, promote existing circular businesses, create new markets and stimulate business and investment interests in circular economy.',
      objectives: [
        'Develop and implement media campaigns showcasing successful circular businesses.',
        'Create a platform for existing businesses to network and explore collaboration opportunities.',
        'Establish a circular economy marketplace to facilitate business transactions.'
      ]
    },
    {
      title: 'Circular Business Outreaches and Incubations',
      icon: Building,
      goal: 'To formalize and scale small circular businesses, fostering growth and sustainability.',
      objectives: [
        'Conduct outreach programs to educate local businesses on circular practices.',
        'Provide support for formalizing operations and accessing resources such as finance, materials, value chain partners, etc.',
        'Identify and incubate viable circular businesses through mentorship and funding.'
      ]
    },
    {
      title: 'ECO-nomy Lagos Fest',
      icon: Calendar,
      goal: 'To bring together local and international stakeholders to strategize, showcase and stimulate circular economy opportunities in Lagos',
      objectives: [
        'Host panel discussions and workshops on circular economy policies, innovations, and best practices.',
        'Organize an exhibition for circular businesses to showcase their products and services.',
        'Facilitate discovery sessions for incubated businesses to pitch to potential investors, funders, and partners.'
      ]
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">ECOnomy Lagos</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Unlocking economic opportunities within the circular economy as a critical means of tackling climate change challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Platform Overview</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Lagos State is at the forefront of embracing sustainable practices through the Circular Economy sector. With an estimated <strong>$2.7 billion by 2030</strong>, the Circular Economy presents an unprecedented opportunity for economic development, job creation, and environmental sustainability in Nigeria.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Lagos Office of Climate Change and Circular Economy (OCCE) has conceived ECO-nomy Lagos as a strategic platform aimed at unlocking economic opportunities within the circular economy – as a critical means of tackling the challenges of climate change that threats the lives and living of the people and businesses of Lagos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                ECO-nomy marries the words "ECO" from ecology and "nomy" from economy to illustrate the opportunities and potentials of Eco-friendly human and industrial practices on wealth creation and total well-being.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-green-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg"><strong>$2.7 billion</strong> potential by 2030</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg"><strong>50%+</strong> employment deficit reduction target</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg">Significant <strong>GDP contribution</strong></span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg">Aligned with <strong>Zero Carbon by 2050</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Strategic Pillars</h2>
            <p className="text-xl text-gray-600">Four comprehensive pillars designed to institutionalize and catalyze circular economy growth</p>
          </div>

          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/4 p-8 bg-gradient-to-br from-green-50 to-yellow-50">
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      <div className={`p-4 rounded-full ${index % 2 === 0 ? 'bg-green-500' : 'bg-yellow-500'}`}>
                        <pillar.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center md:text-left">{pillar.title}</h3>
                  </div>
                  <div className="md:w-3/4 p-8">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Goal:</h4>
                      <p className="text-gray-700">{pillar.goal}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Objectives:</h4>
                      <ul className="space-y-2">
                        {pillar.objectives.map((objective, objIndex) => (
                          <li key={objIndex} className="flex items-start">
                            <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Impact and Outcomes</h2>
            <p className="text-xl text-gray-600">Transforming Lagos through sustainable economic growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Job Creation</h3>
              <p className="text-gray-700">
                ECO-nomy Lagos aims to reduce the current employment deficit in the state by more than 50% by creating jobs within the circular economy sector.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Economic Growth</h3>
              <p className="text-gray-700">
                The platform targets the growth of the circular economy sector, contributing significantly to the state's GDP.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Sustainability</h3>
              <p className="text-gray-700">
                By promoting recycling, clean energy, and sustainable practices, ECO-nomy Lagos aligns with global efforts towards environmental conservation and Lagos's Vision toward Zero Carbon by 2050.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join ECO-nomy Lagos
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Be part of Lagos' circular economy transformation. Partner with us to unlock sustainable economic opportunities.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Get Involved <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default EconomyLagos;