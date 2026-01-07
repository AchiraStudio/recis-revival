import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import Competitions from './components/Competitions';
import GuestStars from './components/GuestStars';
import Tickets from './components/Tickets';
import Merch from './components/Merch';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
      once: false
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Sponsors />
      <GuestStars />
      <Competitions />
      <Tickets />
      <Merch />
      <Footer />
    </div>
  );
}

export default App;