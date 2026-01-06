import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Merch.css';

const Merch = () => {
  const [ref, isVisible] = useScrollReveal();

  const items = [
    { name: "Revival Tee", price: "Rp 150.000", img: "https://picsum.photos/seed/shirt/400/500" },
    { name: "Snapback Cap", price: "Rp 120.000", img: "https://picsum.photos/seed/cap/400/500" },
    { name: "Tote Bag", price: "Rp 75.000", img: "https://picsum.photos/seed/bag/400/500" },
    { name: "Wristband", price: "Rp 25.000", img: "https://picsum.photos/seed/band/400/500" },
  ];

  return (
    <section id="merch" className={styles.merch}>
      <div className="container">
        <div className={styles.header} ref={ref}>
          <span className="text-gradient">EXCLUSIVE</span>
          <h2>Official Merchandise</h2>
          <p>Grab the gear before it's gone.</p>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={`${styles.card} ${isVisible ? styles.visible : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className={styles.imgWrapper}>
                <img src={item.img} alt={item.name} />
              </div>
              <div className={styles.info}>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merch;