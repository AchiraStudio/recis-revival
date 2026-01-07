import React from 'react';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top section-padding">
        <div className="footer-brand">
          <h2 className="retro-font">REVIVAL.</h2>
          <p>Membawa kembali semangat masa muda. Event tahunan terbesar dari SMA Regina Pacis Bogor.</p>
        </div>
        
        <div className="footer-links">
          <h3>Navigasi</h3>
          <ul>
            <li><a href="#home">Beranda</a></li>
            <li><a href="#competitions">Kompetisi</a></li>
            <li><a href="#tickets">Tiket</a></li>
            <li><a href="#merch">Store</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Hubungi Kami</h3>
          <p><FaMapMarkerAlt /> Jl. Ir. H. Juanda No. 2, Bogor</p>
          <p><FaWhatsapp /> +62 812-3456-7890 (Panitia)</p>
          <p><FaEnvelope /> info@recisrevival.com</p>
          <div className="socials">
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Recis Revival Team. Developed with ❤️ by Achira Studios.</p>
      </div>
    </footer>
  );
};

export default Footer;