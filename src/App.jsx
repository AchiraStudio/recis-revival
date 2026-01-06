import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competitions from './components/Competitions';
import Artists from './components/Artists';
import Merch from './components/Merch';
import './App.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <Competitions />
      <Artists />
      <Merch />
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div>
              <h2 className="text-gradient">RECIS REVIVAL</h2>
              <p>Bogor, Indonesia</p>
            </div>
            <div>
              <p>© 2024 SMA Regina Pacis.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;