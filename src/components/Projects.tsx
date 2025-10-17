import React from 'react';
import { ArrowRight, Users, Recycle, Wind, Target, Sparkles, Tv } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      name: 'Y3Cs',
      description: 'Youth Climate Change Champions initiative',
      path: '/projects/y3cs',
      icon: Users,
      color: 'green',
      stats: '500K+ Students',
      delay: '0s'
    },
    {
      name: 'ECOnomy Lagos',
      description: 'Circular economy platform for Lagos',
      path: '/projects/economy-lagos',
      icon: Recycle,
      color: 'yellow',
      stats: '$2.7B Potential',
      delay: '0.1s'
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
      description: 'Air quality improvement campaign',
      path: '/projects/let-our-lagos-breathe',
      icon: Wind,
      color: 'yellow',
      stats: 'City-wide Impact',
      delay: '0.3s'
    },
    {
      name: 'Mission 50:50',
      description: 'Carbon reduction and job creation initiative',
      path: '/projects/mission-50-50',
      icon: Target,
      color: 'green',
      stats: '50K Jobs Target',
      delay: '0.4s'
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-green-200/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-yellow-200/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-green-300/20 rounded-full animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-yellow-100 rounded-full text-green-800 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Our Impact Projects
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            TAKE A LOOK AT OUR PROJECTS
          </h2>
          <p className="text-xl text-gray-600">What we have been doing</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="modern-card p-8 hover-lift cursor-pointer group animate-slide-in-up"
              style={{ animationDelay: project.delay }}
              onClick={() => navigate(project.path)}
            >
              {/* Project Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl ${project.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-yellow-500 to-yellow-600'} flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg animate-glow`}>
                  <project.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg animate-pulse-slow">
                  <div className={`w-3 h-3 rounded-full ${project.color === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                {project.name}
              </h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
              
              {/* Stats Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${project.color === 'green' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {project.stats}
              </div>
              
              <div className="flex items-center text-green-500 group-hover:text-green-600 group-hover:translate-x-2 transform transition-all duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button 
            onClick={() => navigate('/projects')}
            className="group bg-gradient-to-r from-green-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center animate-glow"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;