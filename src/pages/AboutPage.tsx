import React from 'react';
import { User, Target, Eye, TrendingUp, Shield, Globe } from 'lucide-react';

const AboutPage = () => {
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
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Welcome to OCCE</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Office of Climate Change & Circular Economy Lagos - Leading the way towards a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About OCCE Lagos</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                His Excellency, Gov. Babajide Olusola Sanwo-Olu, created the Office of Climate Change & Circular Economy (OCCE) to mitigate the impact of climate change on the lives and living of the people, businesses, and government of Lagos.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Lagos State must not just act to mitigate the impacts of climate change and protect its fragile ecosystems; it must harness the enormous potential of circular economy to create opportunities for the collective well-being and prosperity of all stakeholders.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision to position Lagos State as the most sustainable city on earth is not only ambitious but also imperative in the face of escalating global challenges related to climate change and the urgent need for circular economy practices.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-xl animate-slide-in-right">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 p-3 rounded-full mr-4 hover:rotate-12 transform transition-transform duration-300">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Titi Oshodi</h3>
                  <p className="text-gray-600">Special Adviser to Lagos State Governor</p>
                  <p className="text-sm text-gray-600">Climate Change & Circular Economy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Climate Change Impact */}
          <div className="mb-16 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Climate Change Impact</h3>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-red-200">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Climate change presents a significant threat to our environment, economy, and overall well-being of the people of Lagos. According to the Intergovernmental Panel on Climate Change (IPCC), the average global temperature is rising, leading to more frequent and severe weather events, such as floods and heatwaves.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Lagos, being a coastal city, is particularly vulnerable to the impacts of climate change, including rising sea levels and extreme weather events.
              </p>
            </div>
          </div>

          {/* Circular Economy */}
          <div className="mb-16 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Circular Economy Principles</h3>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Circular economy principles are crucial in mitigating the adverse effects of climate change by reducing waste and promoting the efficient use of resources. Like many urban cities, Lagos faces the challenges of waste management and pollution.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Embracing circular economy practices can not only alleviate these issues but also contribute to the reduction of greenhouse gas emissions. According to the World Economic Forum, transitioning to a circular economy could cut global carbon emissions by 39% by 2030.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:scale-105 transition-transform duration-300 animate-slide-in-left">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 p-3 rounded-full mr-3 hover:rotate-12 transform transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700">
                We aim to bridge the knowledge gap between the government and the people through education campaigns and advocacy initiatives by fostering a deeper understanding of the link between climate change, circular economy practices, and the well-being of the communities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl hover:scale-105 transition-transform duration-300 animate-slide-in-right">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-600 p-3 rounded-full mr-3 hover:rotate-12 transform transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700">
                Ultimately, we want to position our dear state as a leader in sustainability so our city can inspire other urban centres to take similar actions, contributing to a more sustainable and resilient future for our planet.
              </p>
            </div>
          </div>

          {/* Towards Sustainable Lagos */}
          <div className="bg-gradient-to-r from-green-500 to-yellow-500 p-1 rounded-xl mb-16 animate-fade-in-up">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Towards A Sustainable, Greater Lagos</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
                We are working every day to enable all players whose ambition is to ensure a zero carbon Lagos by 2050.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are convinced that a prosperous and sustainable Lagos will involve the government, businesses, civil societies, and the people. So through our various initiatives, we are changing behaviors and dialing up Circularity (Circular Economy) as the veritable tool of sustainably tackling climate change.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                More than half of Lagos's 21 million residents live in informal settlements, which render them highly vulnerable to the impacts of climate change.
              </p>
            </div>
          </div>

          {/* What Drives Us */}
          <div className="mb-16 animate-slide-in-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Drives Us</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <Shield className="h-6 w-6 text-red-600 mr-2" />
                  <h4 className="font-bold text-gray-900">Climate Risks</h4>
                </div>
                <p className="text-gray-700">Lagos's population and economy are most at risk of flooding, heatwaves, erosion and thunderstorms.</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-6 w-6 text-orange-600 mr-2" />
                  <h4 className="font-bold text-gray-900">GHG Emissions</h4>
                </div>
                <p className="text-gray-700">The majority of Lagos's greenhouse gas emissions are generated in three key sectors: energy, waste, and transport.</p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <Globe className="h-6 w-6 text-yellow-600 mr-2" />
                  <h4 className="font-bold text-gray-900">Vulnerable Communities</h4>
                </div>
                <p className="text-gray-700">More than half (65%) of Lagos's 21 million residents live in informal settlements, highly vulnerable to climate change impacts.</p>
              </div>
            </div>
          </div>

          {/* Climate Threats */}
          <div className="bg-gray-50 p-8 rounded-xl animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Climate Change Threats</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Climate change threatens the general well-being of the Lagos ecosystem, as it will significantly impact food security and commercial activities, leading to increased insecurity, job losses, heightened health risks, and reduced economic activities, which could hinder the state's economic growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Besides infrastructure, the economic sectors most at risk of climate change impacts are tourism and agriculture.
            </p>
            <div className="mt-6 p-4 bg-green-100 rounded-lg border-l-4 border-green-500">
              <p className="text-lg text-gray-700 font-medium">
                We work every day to ensure that the thick clouds of GHGs and other impacts of climate change do not dim our Greater Lagos that's rising.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;