import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import '../styles/Hero.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="home" className={styles.hero}>
      {/* Background Gradients */}
      <div className={styles.bgOrb1}></div>
      <div className={styles.bgOrb2}></div>

      <div className={`container ${styles.content} ${isVisible ? styles.visible : ''}`} ref={ref}>
        <div className={styles.tagline}>
          <span className={styles.pulseDot}></span>
          SMA REGINA PACIS PRESENTS
        </div>
        <h1 className={styles.title}>
          RECIS <br />
          <span className="text-gradient">REVIVAL</span>
        </h1>
        <p className={styles.description}>
          Step back into the rhythm. A 90s nostalgia meets modern energy. 
          The ultimate comeback is here.
        </p>
        
        <div className={styles.buttonGroup}>
          <a href="#comps" className={`${styles.btn} ${styles.primary}`}>
            Explore Events
            <ArrowRight size={18} />
          </a>
          <a href="#merch" className={`${styles.btn} ${styles.secondary}`}>
            Get Merch
          </a>
        </div>

        <div className={styles.countdown}>
          <div className={styles.dateBox}>
            <Calendar size={20} className="text-[var(--color-sunset)]" />
            <span>NOVEMBER 09, 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;