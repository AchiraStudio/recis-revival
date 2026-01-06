import React, { useState, useEffect } from 'react';
import { Menu, X, Disc } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Competitions', href: '#comps' },
    { name: 'Artists', href: '#artists' },
    { name: 'Merch', href: '#merch' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContainer}>
          <a href="#" className={styles.logo}>
            <Disc className={styles.logoIcon} />
            <span>REVIVAL</span>
          </a>

          {/* Desktop Menu */}
          <ul className={styles.desktopMenu}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button 
            className={styles.mobileToggle} 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.open : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => setIsMobileOpen(false)}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;