import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Recycle, Wind, Target, Tv } from 'lucide-react';

const ProjectsPage = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      name: 'Y3Cs',
      fullName: 'Young Climate Champions Club',
      description: 'Instilling climate awareness in primary and junior secondary school students through hands-on activities.',
      icon: Users,
      color: 'green',
      path: '/projects/y3cs',
      stats: '500,000 students targeted'
    },
    {
      name: 'ECOnomy Lagos',
      fullName: 'Circular Economy Platform',
      description: 'Strategic platform unlocking economic opportunities within the circular economy sector.',
      icon: Recycle,
      color: 'yellow',
      path: '/projects/economy-lagos',
      stats: '$2.7 billion potential by 2030'
    },
    {
      name: 'Eco4Show',
      fullName: 'Circular Economy Platform',
      description: 'Strategic platform unlocking economic opportunities within the circular economy sector.',
      icon: Recycle,
      color: 'green',
      path: '/projects/eco4show',
      stats: '$2.77 billion potential by 2030'
    },
    {
      name: 'Let Our Lagos Breathe',
      fullName: 'Air Quality Campaign',
      description: 'Periodic campaign drawing awareness to activities that contribute to climate change impact.',
      icon: Wind,
      color: 'yellow',
      path: '/projects/let-our-lagos-breathe',
      stats: 'City-wide awareness campaign'
    },
    {
      name: 'Mission 50:50',
      fullName: 'Carbon Reduction Initiative',
      description: 'Reduce Lagos carbon footprint by 50% and create 50,000 jobs over five years.',
      icon: Target,
      color: 'green',
      path: '/projects/mission-50-50',
      stats: '50% carbon reduction, 50,000 jobs'
    }
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Innovative initiatives driving Lagos towards a sustainable, zero-carbon future through community engagement and circular economy solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Have Been Doing
            </h2>
            <p className="text-xl text-gray-600">Transforming Lagos through strategic climate action projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
                onClick={() => navigate(project.path)}
              >
                <div className={`h-2 ${project.color === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full ${project.color === 'green' ? 'bg-green-100' : 'bg-yellow-100'} mr-4`}>
                      <project.icon className={`h-6 w-6 ${project.color === 'green' ? 'text-green-600' : 'text-yellow-600'}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-500">{project.fullName}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    project.color === 'green' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.stats}
                  </div>
                  
                  <div className="flex items-center text-green-500 group-hover:text-green-600">
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Be part of Lagos' transformation towards a sustainable future. Partner with us in creating lasting environmental and economic impact.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Involved <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;