import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Users, Calendar, Download, Eye } from 'lucide-react';

const NewsletterPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setSubscribed(true);
    setEmail('');
    setName('');
  };

  const newsletters = [
    {
      title: 'Climate Action Monthly - July 2025',
      date: 'July 30, 2025',
      description: 'Latest updates on Lagos climate initiatives, Y3Cs program highlights, and circular economy success stories.',
      subscribers: '2,450',
      opens: '1,890',
      featured: true
    },
    {
      title: 'ECOnomy Lagos Quarterly Report',
      date: 'July 15, 2025',
      description: 'Comprehensive quarterly review of circular economy progress, business partnerships, and upcoming events.',
      subscribers: '2,450',
      opens: '1,650',
      featured: true
    },
    {
      title: 'Mission 50:50 Progress Update',
      date: 'June 30, 2025',
      description: 'Monthly progress report on carbon reduction targets and job creation milestones.',
      subscribers: '2,380',
      opens: '1,720'
    },
    {
      title: 'Let Our Lagos Breathe Campaign News',
      date: 'June 15, 2025',
      description: 'Campaign updates, community engagement results, and air quality improvement initiatives.',
      subscribers: '2,380',
      opens: '1,580'
    },
    {
      title: 'OCCE Policy Brief - May 2025',
      date: 'May 31, 2025',
      description: 'Policy updates, regulatory changes, and new frameworks supporting climate action in Lagos.',
      subscribers: '2,320',
      opens: '1,450'
    },
    {
      title: 'Youth Climate Champions Spotlight',
      date: 'May 15, 2025',
      description: 'Featuring outstanding Y3Cs participants, school achievements, and upcoming boot camps.',
      subscribers: '2,320',
      opens: '1,680'
    }
  ];

  const stats = [
    { label: 'Total Subscribers', value: '2,450', icon: Users, color: 'green' },
    { label: 'Monthly Newsletters', value: '4', icon: Calendar, color: 'yellow' },
    { label: 'Average Open Rate', value: '72%', icon: Eye, color: 'green' },
    { label: 'Total Sent', value: '24', icon: Mail, color: 'yellow' }
  ];

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
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Mail className="h-16 w-16 text-white mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">Newsletter</h1>
            </div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Stay informed with regular updates on climate action, circular economy initiatives, and sustainability progress in Lagos State.
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-gray-600">Get the latest climate action news delivered to your inbox</p>
          </div>

          {!subscribed ? (
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-xl border border-gray-200">
              <form onSubmit={handleSubscribe} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center"
                  >
                    Subscribe Now <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 text-center">
                  By subscribing, you agree to receive newsletters from OCCE Lagos. You can unsubscribe at any time.
                </p>
              </form>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Successfully Subscribed!</h3>
              <p className="text-gray-700">
                Thank you for subscribing to our newsletter. You'll receive our latest updates on climate action and circular economy initiatives.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Newsletter Statistics</h2>
            <p className="text-xl text-gray-600">Our growing community of climate action advocates</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className={`${stat.color === 'green' ? 'bg-green-500' : 'bg-yellow-500'} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Archive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Newsletter Archive</h2>
            <p className="text-xl text-gray-600">Browse our previous newsletters and stay up to date</p>
          </div>

          <div className="space-y-6">
            {newsletters.map((newsletter, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${newsletter.featured ? 'border-2 border-green-200' : 'border border-gray-200'}`}>
                <div className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        {newsletter.featured && (
                          <span className="bg-green-100 text-green-800 px-3 py-1 text-sm font-semibold rounded-full mr-3">
                            Featured
                          </span>
                        )}
                        <span className="text-sm text-gray-500">{newsletter.date}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{newsletter.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{newsletter.description}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{newsletter.subscribers} subscribers</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          <span>{newsletter.opens} opens</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-6 flex flex-col space-y-2">
                      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors inline-flex items-center">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </button>
                      <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Load More Newsletters
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Subscribe?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Regular Updates</h3>
                <p className="text-white/90">
                  Get monthly updates on climate action progress and new initiatives
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Community Access</h3>
                <p className="text-white/90">
                  Join a community of climate advocates and sustainability champions
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Exclusive Content</h3>
                <p className="text-white/90">
                  Access exclusive insights, reports, and early event notifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterPage;