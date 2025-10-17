import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const EventsPage = () => {
  const upcomingEvents = [
    {
      title: 'ECOnomy Lagos Festival 2025',
      date: 'August 15-17, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Lagos Continental Hotel, Victoria Island',
      description: 'Annual festival bringing together stakeholders to showcase circular economy opportunities and innovations in Lagos State.',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Festival',
      attendees: '500+ expected',
      featured: true
    },
    {
      title: 'Y3Cs Summer Boot Camp',
      date: 'August 5-12, 2025',
      time: '8:00 AM - 4:00 PM',
      location: 'Various Schools Across Lagos',
      description: 'Intensive summer program for Young Climate Champions focusing on practical climate action and circular economy projects.',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Education',
      attendees: '1000+ students',
      featured: true
    },
    {
      title: 'Climate Finance Workshop',
      date: 'July 30, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Alausa Secretariat, Ikeja',
      description: 'Workshop on accessing international climate finance and implementing sustainable funding mechanisms.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Workshop',
      attendees: '100 participants'
    },
    {
      title: 'Let Our Lagos Breathe Campaign Launch',
      date: 'August 1, 2025',
      time: '11:00 AM - 2:00 PM',
      location: 'Tafawa Balewa Square, Lagos Island',
      description: 'Public launch of the awareness campaign focusing on air quality improvement and climate-friendly behaviors.',
      image: 'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Campaign',
      attendees: '2000+ citizens'
    }
  ];

  const pastEvents = [
    {
      title: 'Mission 50:50 Stakeholder Meeting',
      date: 'July 10, 2025',
      location: 'Lagos State House, Marina',
      description: 'Strategic meeting with key stakeholders to discuss the implementation of Mission 50:50 initiative.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Meeting',
      attendees: '50 stakeholders'
    },
    {
      title: 'Circular Economy Business Forum',
      date: 'June 25, 2025',
      location: 'Civic Centre, Victoria Island',
      description: 'Forum connecting circular economy businesses with investors and potential partners.',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Forum',
      attendees: '200 businesses'
    },
    {
      title: 'World Environment Day Celebration',
      date: 'June 5, 2025',
      location: 'Freedom Park, Lagos Island',
      description: 'Community celebration featuring environmental exhibitions, tree planting, and awareness activities.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Celebration',
      attendees: '1500+ participants'
    }
  ];

  const featuredEvents = upcomingEvents.filter(event => event.featured);
  const regularEvents = upcomingEvents.filter(event => !event.featured);

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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Events</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Join us at upcoming climate action events and discover how you can be part of Lagos' sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Events</h2>
            <p className="text-xl text-gray-600">Don't miss these major climate action events</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-video bg-cover bg-center relative" style={{ backgroundImage: `url(${event.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-3">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      event.category === 'Festival' ? 'bg-purple-100 text-purple-800' :
                      event.category === 'Education' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-5 w-5 mr-3 text-green-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-5 w-5 mr-3 text-green-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-5 w-5 mr-3 text-green-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="h-5 w-5 mr-3 text-green-500" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center">
                    Register Now <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Mark your calendar for these important events</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {regularEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${event.image})` }}></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        event.category === 'Workshop' ? 'bg-blue-100 text-blue-800' :
                        event.category === 'Campaign' ? 'bg-red-100 text-red-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm">{event.description}</p>
                    <div className="space-y-1 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-green-500 font-semibold hover:text-green-600 transition-colors inline-flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
            <p className="text-xl text-gray-600">Recent climate action events and their impact</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-xl border border-gray-200">
                <div className="aspect-video bg-cover bg-center rounded-lg mb-4" style={{ backgroundImage: `url(${event.image})` }}></div>
                <div className="flex items-center mb-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    event.category === 'Meeting' ? 'bg-gray-100 text-gray-800' :
                    event.category === 'Forum' ? 'bg-blue-100 text-blue-800' :
                    event.category === 'Celebration' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {event.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{event.description}</p>
                <div className="space-y-1 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.attendees}</span>
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
            Join Our Events
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Be part of Lagos' climate action community. Register for upcoming events and help build a sustainable future.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            View Event Calendar <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;