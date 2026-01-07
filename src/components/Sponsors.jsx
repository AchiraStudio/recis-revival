import React from 'react';
import '../styles/Sponsors.css';

const Sponsors = () => {
  return (
    <div className="sponsor-marquee">
      <div className="marquee-content">
        <span>SPONSORED BY:</span>
        <span className="sponsor-name">BANK BJB</span>
        <span className="sponsor-name">TEH BOTOL SOSRO</span>
        <span className="sponsor-name">INDOMIE</span>
        <span className="sponsor-name">HYDRO COCO</span>
        <span className="sponsor-name">EINAUDI MUSIC</span>
        {/* Repeat for seamless loop */}
        <span>SPONSORED BY:</span>
        <span className="sponsor-name">BANK BJB</span>
        <span className="sponsor-name">TEH BOTOL SOSRO</span>
      </div>
    </div>
  );
};

export default Sponsors;