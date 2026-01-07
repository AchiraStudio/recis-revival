import React from 'react';
import { FaSpotify, FaMusic } from 'react-icons/fa';
import '../styles/GuestStars.css';

const stars = [
  {
    id: 1,
    name: "RAN",
    genre: "Pop / R&B",
    // Replace with the actual YouTube Video ID (the part after v=)
    videoId: "dQw4w9WgXcQ", 
    hits: ["Dekat di Hati", "Pandangan Pertama", "Selamat Pagi"],
    desc: "Trio ikonik yang selalu membawa warna ceria dan energi positif di setiap panggungnya. Siapkan diri untuk bernyanyi bersama!"
  },
  {
    id: 2,
    name: "Raissa Anggiani",
    genre: "Indie Pop",
    // Replace with the actual YouTube Video ID
    videoId: "dQw4w9WgXcQ", 
    hits: ["Kau Rumahku", "Satu Tuju", "Losing Us"],
    desc: "Suara lembut yang menyentuh hati, siap mengajak kita galau bersama di malam puncak. Rasakan atmosfer magisnya."
  }
];

const GuestStars = () => {
  return (
    <section id="lineup" className="section-padding lineup-section">
      <div className="section-header" data-aos="fade-down">
        <h2 className="glow-text">Guest Stars</h2>
        <p>Penampilan spesial yang akan mengguncang panggung Revival Cup.</p>
      </div>

      <div className="stars-grid">
        {stars.map((star) => (
          <div key={star.id} className="artist-card" data-aos="fade-up">
            
            {/* Left Side: YouTube Video */}
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${star.videoId}`}
                title={star.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Right Side: Content */}
            <div className="artist-content">
              <div className="artist-header">
                <div className="header-top">
                  <h3>{star.name}</h3>
                  <span className="genre"><FaMusic size={12} style={{marginRight:'5px'}}/> {star.genre}</span>
                </div>
                <p className="artist-desc">{star.desc}</p>
              </div>

              <div className="top-hits">
                <h4><FaSpotify className="spotify-icon" /> Popular Hits</h4>
                <ul>
                  {star.hits.map((song, idx) => (
                    <li key={idx}>
                      <div className="song-info">
                        <span className="idx">{idx + 1}</span>
                        <span className="song-name">{song}</span>
                      </div>
                      <div className="equalizer-bar"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuestStars;