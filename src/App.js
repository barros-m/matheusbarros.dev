import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import TechStacks from './components/TechStacks';
import Portfolio from './components/Portfolio';
import Connect from './components/Connect';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <TechStacks />
      <Portfolio />
      <Connect />
      <Footer />
    </div>
  );
};

export default App;
