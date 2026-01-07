import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaTicketAlt } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo retro-font">
          REVIVAL<span className="dot">.</span>
        </div>

        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Beranda</a></li>
          <li><a href="#lineup" onClick={() => setIsOpen(false)}>Lineup</a></li>
          <li><a href="#competitions" onClick={() => setIsOpen(false)}>Kompetisi</a></li>
          <li><a href="#merch" onClick={() => setIsOpen(false)}>Merchandise</a></li>
          <li className="nav-btn-item">
            <a href="#tickets" className="nav-ticket-btn" onClick={() => setIsOpen(false)}>
              <FaTicketAlt /> Beli Tiket
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;