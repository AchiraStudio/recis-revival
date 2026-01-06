import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Competitions.css';

const Competitions = () => {
  const [ref, isVisible] = useScrollReveal();
  
  const competitions = [
    { title: "E-Sports", desc: "Valorant & Mobile Legends Championship", img: "https://picsum.photos/seed/esports/600/400" },
    { title: "Basketball", desc: "3v3 Streetball Tournament", img: "https://picsum.photos/seed/basket/600/400" },
    { title: "Modern Dance", desc: "Show your best moves on stage", img: "https://picsum.photos/seed/dance/600/400" },
    { title: "Band", desc: "Battle of the bands, live music energy", img: "https://picsum.photos/seed/band/600/400" },
    { title: "Futsal", desc: "High speed indoor soccer action", img: "https://picsum.photos/seed/futsal/600/400" },
    { title: "Volley", desc: "Jump high, spike hard", img: "https://picsum.photos/seed/volley/600/400" },
  ];

  return (
    <section id="comps" className={styles.comps}>
      <div className="container">
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className="text-gradient">The Cup</h2>
          <h1>Competitions</h1>
          <div className={styles.line}></div>
        </div>

        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`} ref={ref}>
          {competitions.map((comp, index) => (
            <div key={index} className={styles.card} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className={styles.imageWrapper}>
                <img src={comp.img} alt={comp.title} />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.content}>
                <h3>{comp.title}</h3>
                <p>{comp.desc}</p>
                <button className={styles.joinBtn}>View Rules</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;