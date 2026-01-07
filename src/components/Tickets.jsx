import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../styles/Tickets.css';

const Tickets = () => {
  return (
    <section id="tickets" className="section-padding ticket-section">
      <div className="section-header">
        <h2>Dapatkan Tiketmu</h2>
        <p>Jangan sampai kehabisan. Harga naik seiring waktu.</p>
      </div>

      <div className="ticket-container">
        {/* Card 1 */}
        <div className="ticket-card sold-out" data-aos="flip-left">
          <div className="ticket-header">
            <h3>Early Bird</h3>
            <div className="price">Rp 35.000</div>
          </div>
          <div className="ticket-body">
            <ul>
              <li><FaCheckCircle /> Akses Masuk</li>
              <li><FaCheckCircle /> Sticker Pack</li>
            </ul>
            <button className="ticket-btn" disabled>Sold Out</button>
          </div>
        </div>

        {/* Card 2 - Featured */}
        <div className="ticket-card featured" data-aos="flip-left" data-aos-delay="100">
          <div className="status-badge">Best Value</div>
          <div className="ticket-header">
            <h3>Presale 1</h3>
            <div className="price">Rp 45.000</div>
          </div>
          <div className="ticket-body">
            <ul>
              <li><FaCheckCircle /> Akses Masuk</li>
              <li><FaCheckCircle /> Sticker Pack</li>
              <li><FaCheckCircle /> Kesempatan Doorprize</li>
            </ul>
            <button className="ticket-btn">Beli Sekarang</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="ticket-card" data-aos="flip-left" data-aos-delay="200">
          <div className="ticket-header">
            <h3>On The Spot</h3>
            <div className="price">Rp 60.000</div>
          </div>
          <div className="ticket-body">
            <ul>
              <li><FaCheckCircle /> Akses Masuk</li>
              <li className="text-muted">Tanpa Bonus</li>
            </ul>
            <button className="ticket-btn secondary">Coming Soon</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;