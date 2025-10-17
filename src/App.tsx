import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResourcesPage from './pages/ResourcesPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/media/NewsPage';
import EventsPage from './pages/media/EventsPage';
import GalleryPage from './pages/media/PicturesPage';
import BlogPage from './pages/BlogPage';
import NewsletterPage from './pages/NewsletterPage';
import Y3Cs from './pages/projects/Y3Cs';
import EconomyLagos from './pages/projects/EconomyLagos';
import LetOurLagosBreathe from './pages/projects/LetOurLagosBreathe';
import Mission5050 from './pages/projects/Mission5050';
import Eco4Show from './pages/projects/Eco4Show';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Public Routes */}
            <Route path="/*" element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/projects/y3cs" element={<Y3Cs />} />
                  <Route path="/projects/economy-lagos" element={<EconomyLagos />} />
                  <Route path="/projects/let-our-lagos-breathe" element={<LetOurLagosBreathe />} />
                  <Route path="/projects/mission-50-50" element={<Mission5050 />} />
                  <Route path="/projects/eco4show" element={<Eco4Show />} />
                  <Route path="/resources" element={<ResourcesPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/newsletter" element={<NewsletterPage />} />
                  <Route path="/media" element={<MediaPage />} />
                  <Route path="/media/news" element={<NewsPage />} />
                  <Route path="/media/events" element={<EventsPage />} />
                  <Route path="/media/gallery" element={<GalleryPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;