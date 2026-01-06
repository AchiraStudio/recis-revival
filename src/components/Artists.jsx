import React from 'react';
import { Instagram, Music } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Artists.css';

const Artists = () => {
  const [ref, isVisible] = useScrollReveal();

  const artists = [
    {
      name: "RAN",
      role: "Headliner",
      desc: "Bringing the hits and positive vibes. A legendary performance awaits.",
      image: "https://picsum.photos/seed/ran/800/1000",
      bg: "linear-gradient(45deg, #ff6b00, #db2777)"
    },
    {
      name: "Raissa Anggiani",
      role: "Guest Star",
      desc: "Emotional lyrics and soothing vocals for the soul.",
      image: "https://picsum.photos/seed/raissa/800/1000",
      bg: "linear-gradient(45deg, #db2777, #8b5cf6)"
    }
  ];

  return (
    <section id="artists" className={styles.artists}>
      <div className="container">
        {artists.map((artist, index) => (
          <div 
            key={index} 
            className={`${styles.artistBlock} ${index % 2 !== 0 ? styles.reverse : ''} ${isVisible ? styles.visible : ''}`}
            ref={ref}
          >
            <div className={styles.imageContainer}>
              <img src={artist.image} alt={artist.name} />
              <div className={styles.tag} style={{ background: artist.bg }}>
                <Music size={20} />
                {artist.role}
              </div>
            </div>
            <div className={styles.textContainer}>
              <h1>{artist.name}</h1>
              <div className={styles.line} style={{ background: artist.bg }}></div>
              <p>{artist.desc}</p>
              <a href="#" className={styles.link}>
                <Instagram size={18} /> Follow on Instagram
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artists;