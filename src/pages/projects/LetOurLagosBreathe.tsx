import React from 'react';
import { ArrowRight, Wind, Heart, Users, AlertTriangle } from 'lucide-react';

const LetOurLagosBreathe = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Let Our Lagos Breathe</h1>
            <div className="text-2xl md:text-3xl font-bold text-red-400 mb-6">
              #LetOurLagosBreathe #DontSuffocateUs
            </div>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              A periodic campaign drawing awareness to human activities that contribute to increasing the impact of Climate Change on our environment.
            </p>
          </div>
        </div>
      </section>

      {/* Campaign Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Campaign Overview</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Lagos is Nigeria and West Africa's commercial capital and entertainment hub. This status comes with climate challenges ranging from waste disposal, pollution, and other human activities that leave the ecosystem vulnerable to the impact of climate change.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This periodic campaign seeks to draw awareness to human activities that contribute to increasing the impact of Climate Change on our environment. It leverages the fact that we all love to do or be seen as doing the right thing to appeal to the emotions of the Lagos populace to eschew activities that are unfriendly to the climate.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Piggybacking on the viral lingo, "Let the poor breathe", the campaign seeks to codify climate-friendly behaviour into a simple idea of collective social responsibility.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Climate Challenges</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-red-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg">Waste disposal issues</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg">Air and water pollution</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg">Vulnerable ecosystems</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg">Human activity impacts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Message */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Message</h2>
            <p className="text-xl text-gray-600">Transforming behavior through collective responsibility</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Give Lagos Air</h3>
              <p className="text-gray-700">
                Our aim is to foreground various anti-climate actions people engage in during human and commercial activities and replace those actions with climate-friendly ones.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collective Heritage</h3>
              <p className="text-gray-700">
                "Our Lagos" here is a metaphor for our collective heritage and prosperity; hence, attempts and actions against its climate suffocate it.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Responsibility</h3>
              <p className="text-gray-700">
                Climate-friendly actions will mean giving Lagos a new breath of life for now and future generations through collective social responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Strategy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Campaign Strategy</h2>
            <p className="text-xl text-gray-600">Leveraging emotional appeal and social influence</p>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-yellow-500 p-1 rounded-xl">
            <div className="bg-white p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Emotional Appeal</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    The campaign leverages the fact that we all love to do or be seen as doing the right thing to appeal to the emotions of the Lagos populace.
                  </p>
                  <p className="text-lg text-gray-700">
                    It guilt-trips people who will act otherwise to be part of those "suffocating" Our Lagos - doing the wrong thing!
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Viral Messaging</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Piggybacking on the viral lingo, "Let the poor breathe", the campaign creates memorable and shareable content.
                  </p>
                  <p className="text-lg text-gray-700">
                    The hashtags #LetOurLagosBreathe and #DontSuffocateUs create a unified call to action across social media platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Suffocate Our Lagos
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join the movement to give Lagos the breath of life it deserves. Every climate-friendly action counts towards our collective future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Join the Campaign <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Share the Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LetOurLagosBreathe;