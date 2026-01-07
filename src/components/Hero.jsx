import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content" data-aos="fade-up">
        <div className="badge">SMA REGINA PACIS PRESENTS</div>
        <h1 className="hero-title retro-font">
          REVIVAL <span className="outline">CUP</span> <span className="year">2024</span>
        </h1>
        <p className="hero-desc">
          Kita disini, bersama. Berkompetisi, bernyanyi, bersenang-senang, merayakan bersama. Inilah Revival
        </p>
        <div className="hero-actions">
          <a href="#tickets" className="btn-primary">Dapatkan Tiket</a>
          <a href="#lineup" className="btn-outline">Lihat Lineup</a>
        </div>
        
        {/* <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="mouse"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;