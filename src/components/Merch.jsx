import React from 'react';
import '../styles/Merch.css';

const items = [
  { id: 1, name: "Revival Hoodie", price: "Rp 185.000", img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Graphic Tee", price: "Rp 95.000", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, name: "Retro Tote", price: "Rp 65.000", img: "https://images.unsplash.com/photo-1597484661643-2f6f332063f3?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Lanyard", price: "Rp 35.000", img: "https://images.unsplash.com/photo-1634212579624-954f9a39f607?q=80&w=1000&auto=format&fit=crop" }
];

const Merch = () => {
  return (
    <section id="merch" className="section-padding">
      <div className="section-header" data-aos="fade-up">
        <h2>Merchandise</h2>
        <p>Bawa pulang kenangan Revival Cup. Pre-order dibuka sekarang.</p>
      </div>

      <div className="merch-grid">
        {items.map((item, idx) => (
          <div key={item.id} className="merch-card" data-aos="zoom-in" data-aos-delay={idx * 100}>
            <div className="merch-img" style={{ backgroundImage: `url(${item.img})` }}>
              <span className="badge-new">New</span>
            </div>
            <div className="merch-info">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <button className="buy-btn">Pesan</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Merch;