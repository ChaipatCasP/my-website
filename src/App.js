import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import JobReference from './components/JobReference';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <HeroSection />
      <AboutUs />
      <JobReference />
      <Footer />
    </Router>
  );
}

export default App;
