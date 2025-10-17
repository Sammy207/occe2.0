import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Welcome</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 relative z-10">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              His Excellency, Gov. Babajide Olusola Sanwo-Olu, created the Office of the Special Adviser on Climate Change & Circular Economy (OCCE) in the Ministry of Economic Planning and Budget to unlock circular economy as a way to reduce increasing carbon emissions by turning all forms of waste into resources that can create more jobs, optimize government spending and reduce carbon emissions that threaten the lives and living of the people, businesses, and government of Lagos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lagos State must not just act to mitigate the impacts of climate change and protect its fragile ecosystems; it must harness the enormous potential of circular economy to create opportunities for the collective well-being and prosperity of all stakeholders.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 p-3 rounded-full mr-4">
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

        <div className="bg-gray-50 p-8 rounded-xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our purpose is to accelerate the ongoing connection between people and government-driven climate actions by creating a circular economic ecosystem that can create jobs, optimize government spending, reduce emissions, and improve the well-being of all stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;