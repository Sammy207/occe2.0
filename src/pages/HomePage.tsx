import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Blog from '../components/Blog';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Blog />
    </div>
  );
};

export default HomePage;