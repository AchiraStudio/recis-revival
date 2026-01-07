import React from 'react';
import { FaGamepad, FaBasketballBall, FaFutbol, FaGuitar, FaTrophy, FaUsers } from 'react-icons/fa';
import '../styles/Competitions.css';

const comps = [
  {
    id: 1,
    title: "Esports (MLBB)",
    icon: <FaGamepad />,
    fee: "Rp 50.000 / Slot",
    pool: "Rp 1.500.000 + E-Cert",
    desc: "Tunjukkan strategi timmu di Land of Dawn. Open for Public.",
    color: "#00F260"
  },
  {
    id: 2,
    title: "Futsal Putra",
    icon: <FaFutbol />,
    fee: "Rp 350.000 / Tim",
    pool: "Rp 3.000.000 + Trophy",
    desc: "Kompetisi futsal antar SMA se-Jabodetabek. Kuota terbatas!",
    color: "#FF512F"
  },
  {
    id: 3,
    title: "Basket Putri",
    icon: <FaBasketballBall />,
    fee: "Rp 350.000 / Tim",
    pool: "Rp 2.500.000 + Trophy",
    desc: "Jadilah ratu lapangan di kompetisi bergengsi ini.",
    color: "#F09819"
  },
  {
    id: 4,
    title: "Band Audition",
    icon: <FaGuitar />,
    fee: "Rp 200.000 / Band",
    pool: "Tampil di Main Stage",
    desc: "Kesempatan emas untuk tampil sepanggung dengan Guest Star.",
    color: "#DD2476"
  }
];

const Competitions = () => {
  return (
    <section id="competitions" className="section-padding">
      <div className="section-header" data-aos="fade-up">
        <h2>Kompetisi</h2>
        <p>Siapkan tim terbaikmu dan rebut total hadiah puluhan juta rupiah.</p>
      </div>

      <div className="comps-grid">
        {comps.map((item, index) => (
          <div key={item.id} className="comp-card" data-aos="fade-up" data-aos-delay={index * 100} style={{'--accent': item.color}}>
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="desc">{item.desc}</p>
            
            <div className="details">
              <div className="detail-item">
                <FaUsers className="detail-icon"/>
                <span>{item.fee}</span>
              </div>
              <div className="detail-item">
                <FaTrophy className="detail-icon"/>
                <span>{item.pool}</span>
              </div>
            </div>

            <button className="register-btn">Daftar Sekarang</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competitions;