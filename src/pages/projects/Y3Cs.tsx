import React from 'react';
import { ArrowRight, Users, BookOpen, Trophy, Heart, DollarSign, UserCheck, ShoppingCart } from 'lucide-react';

const Y3Cs = () => {
  const pillars = [
    {
      title: 'School Club Meetings',
      icon: BookOpen,
      description: 'Working with the Ministry of Education and other relevant MDAs, the program will be added to the list of school extracurricular activities clubs. Students of the clubs will be exposed to a well-designed curriculum, study tours, excursions, etc, that progressively develop their awareness of the subject and eventually turn them into climate change advocates in their homes and immediate communities.'
    },
    {
      title: 'Competition',
      icon: Trophy,
      description: 'Participating schools will also be exposed to a state-wide competition programme that will range from debates, essays, quizzes, and other engaging competitions that could increase interest and entrench the required behavior and habit in students and their communities.'
    },
    {
      title: 'Boot Camps and Project Exhibitions',
      icon: Users,
      description: 'Summer boot camps and project exhibitions that seek to identify talents and encourage circular innovation in students. Proceeds from sales, grants and donations from these camps will be used to further drive change in the communities of the winning schools.'
    },
    {
      title: 'Community Services',
      icon: Heart,
      description: 'Students of the Y3Cs will have community days when they go into local communities and carry out climate-friendly actions.'
    }
  ];

  const partnershipOptions = [
    {
      title: 'Donation',
      icon: DollarSign,
      description: 'Make periodic donations to support the smooth running and attractiveness of the Y3Cs clubs in schools. Such donation goes into teacher training, learning materials, community services, and project development.'
    },
    {
      title: 'Sponsorship',
      icon: Trophy,
      description: 'Sponsor any of our annual competitions and boot camps with rewards and prizes that encourage the participation of more schools and more students. Also, community services in areas of interest could be sponsored. For example, a beverage company can sponsor community engagement and service in the collection of waste plastics, etc.'
    },
    {
      title: 'Volunteering',
      icon: UserCheck,
      description: 'Individuals, groups, organizations, etc. can encourage employee volunteering to mentor or engage in community with students. You can also volunteer your facilities for study tours, excursions, etc which could increase the practical knowledge of the students.'
    },
    {
      title: 'Procurement',
      icon: ShoppingCart,
      description: 'Commit to procuring premium materials collected by students to encourage them'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Young Climate Champions Club</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6">Y3Cs</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Instilling climate awareness in primary and junior secondary school students through hands-on extra-curricular activities.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Y3Cs</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Young Climate Champions Club (Y3Cs) is an Initiative of the Lagos State Office of Climate Change and Circular Economy (OCCE) designed to instill climate awareness in primary and junior secondary school students in Lagos through hands-on extra-curricular activities.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The program also seeks to leverage the positive influence of children on parents and adults to engender climate-friendly behaviors in homes and local communities in Lagos State.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                OCCE recognizes that to reach our state's ambitious target of Net Zero by 2050 and preserve the earth for our collective prosperity, education and enlightenment are very important not just for their awareness value but for developing skills and competencies that can reduce, reuse, and recycle waste; and convert them into economic value through sustainable circular systems.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Ambition</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-green-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg"><strong>500,000 students</strong> to be reached</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg"><strong>10m kg</strong> carbon emissions reduction</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg"><strong>4 years</strong> implementation timeline</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 w-4 h-4 rounded-full mr-3"></div>
                  <span className="text-lg">Plastic collection points in <strong>all schools</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Programme Pillars</h2>
            <p className="text-xl text-gray-600">Comprehensive approach to climate education and action</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
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

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Partner with Us</h2>
            <p className="text-xl text-gray-600">Join us in empowering the next generation of climate champions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipOptions.map((option, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${index % 2 === 0 ? 'bg-green-500' : 'bg-yellow-500'} mr-4`}>
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{option.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Y3Cs Movement
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Help us reach 500,000 students and create the next generation of climate champions in Lagos State.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Y3Cs;