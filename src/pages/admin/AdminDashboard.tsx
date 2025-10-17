import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { FileText, Image, Calendar, Users, BookOpen, Mail, Plus, CreditCard as Edit, Trash2, Eye, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('news');
  const [stats, setStats] = useState({
    news: 0,
    blog_posts: 0,
    resources: 0,
    gallery: 0,
    events: 0,
    newsletter_subscribers: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [newsCount, blogCount, resourcesCount, galleryCount, eventsCount, subscribersCount] = await Promise.all([
        supabase.from('news').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
        supabase.from('resources').select('*', { count: 'exact', head: true }),
        supabase.from('gallery').select('*', { count: 'exact', head: true }),
        supabase.from('events').select('*', { count: 'exact', head: true }),
        supabase.from('newsletter_subscribers').select('*', { count: 'exact', head: true })
      ]);
      
      setStats({
        news: newsCount.count || 0,
        blog_posts: blogCount.count || 0,
        resources: resourcesCount.count || 0,
        gallery: galleryCount.count || 0,
        events: eventsCount.count || 0,
        newsletter_subscribers: subscribersCount.count || 0
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
      // Show error message to user
      setStats({
        news: 0,
        blog_posts: 0,
        resources: 0,
        gallery: 0,
        events: 0,
        newsletter_subscribers: 0
      });
    }
  };

  const tabs = [
    { id: 'news', name: 'News', icon: FileText, count: stats.news },
    { id: 'blog', name: 'Blog Posts', icon: BookOpen, count: stats.blog_posts },
    { id: 'resources', name: 'Resources', icon: FileText, count: stats.resources },
    { id: 'gallery', name: 'Gallery', icon: Image, count: stats.gallery },
    { id: 'events', name: 'Events', icon: Calendar, count: stats.events },
    { id: 'newsletter', name: 'Newsletter', icon: Mail, count: stats.newsletter_subscribers }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'news':
        return <NewsManager />;
      case 'blog':
        return <BlogManager />;
      case 'resources':
        return <ResourcesManager />;
      case 'gallery':
        return <GalleryManager />;
      case 'events':
        return <EventsManager />;
      case 'newsletter':
        return <NewsletterManager />;
      default:
        return <NewsManager />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/OCCE LOGO WHITE-05.png" 
                alt="OCCE Logo" 
                className="h-10 w-auto mr-3"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">OCCE Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {user?.username}</p>
              </div>
            </div>
            <button
              onClick={logout}
              className="flex items-center px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          {tabs.map((tab) => (
            <div key={tab.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="bg-green-500 p-3 rounded-full">
                  <tab.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{tab.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{tab.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <tab.icon className="h-5 w-5 mr-2" />
                    {tab.name}
                    <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                      {tab.count}
                    </span>
                  </div>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

// Placeholder components for each manager
const NewsManager = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-900">News Management</h2>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center">
        <Plus className="h-5 w-5 mr-2" />
        Add News
      </button>
    </div>
    <div className="bg-gray-50 rounded-lg p-8 text-center">
      <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-600">News management interface will be implemented here</p>
    </div>
  </div>
);

const BlogManager = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-900">Blog Posts Management</h2>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center">
        <Plus className="h-5 w-5 mr-2" />
        Add Post
      </button>
    </div>
    <div className="bg-gray-50 rounded-lg p-8 text-center">
      <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-600">Blog management interface will be implemented here</p>
    </div>
  </div>
);

const ResourcesManager = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-900">Resources Management</h2>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center">
        <Plus className="h-5 w-5 mr-2" />
        Add Resource
      </button>
    </div>
    <div className="bg-gray-50 rounded-lg p-8 text-center">
      <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-600">Resources management interface will be implemented here</p>
    </div>
  </div>
);

const GalleryManager = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-900">Gallery Management</h2>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center">
        <Plus className="h-5 w-5 mr-2" />
        Add Image
      </button>
    </div>
    <div className="bg-gray-50 rounded-lg p-8 text-center">
      <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-600">Gallery management interface will be implemented here</p>
    </div>
  </div>
);

const EventsManager = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-900">Events Management</h2>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center">
        <Plus className="h-5 w-5 mr-2" />
        Add Event
      </button>
    </div>
    <div className="bg-gray-50 rounded-lg p-8 text-center">
      <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-600">Events management interface will be implemented here</p>
    </div>
  </div>
);

const NewsletterManager = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-900">Newsletter Subscribers</h2>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center">
        <Mail className="h-5 w-5 mr-2" />
        Send Newsletter
      </button>
    </div>
    <div className="bg-gray-50 rounded-lg p-8 text-center">
      <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-600">Newsletter management interface will be implemented here</p>
    </div>
  </div>
);

export default AdminDashboard;