import React from 'react';
import './App.css';

const imageList = Array.from({ length: 12 }, (_, i) => `gal${i + 1}.jpg`);

function App() {
  return (
    <div className="app">
      {/* Hero Banner */}
      <div className="hero-section" id="home">
        <nav className="navbar">
          <div className="nav-left">
  <span className="menu">&#9776;</span>
  <div className="brand-wrapper">
    <span className="brand">Chaitanya Garden and Developers</span>
    <span className="sub-brand">Indrayani Hitech Nursery</span>
  </div>
</div>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <div className="search">
            <span role="img" aria-label="search">🔍</span>
            <input type="text" placeholder="Search..." />
          </div>
        </nav>
        <img src="/banner.png" alt="Banner" className="fullscreen-banner cropped" />
      </div>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>🌿 Plant Nursery</h3>
            <p>Provides wide range of natural plants and accessories in Pune. We have the largest collection of Annual Flowers, Aquatic Plants, Aromatic Plants.</p>
          </div>
          <div className="service-card">
            <h3>🏞️ Podium Garden</h3>
            <p>Landscaping services focused on enhancing soil quality for a crack-free, well-drained hard surface of land.</p>
          </div>
          <div className="service-card">
            <h3>🧹 Garden Maintenance</h3>
            <p>We provide Garden Maintenance Services in compliance with market standards, ensuring clean, healthy, and beautiful landscapes.</p>
          </div>
          <div className="service-card">
            <h3>🌱 Garden Development</h3>
            <p>Offering extensive garden development services with rich experience and quality execution to meet every client’s expectations.</p>
          </div>
          <div className="service-card">
            <h3>🌼 Vertical Garden</h3>
            <p>Vertical Gardening services for homes, offices, and public areas – adding beauty and greenery to any vertical space.</p>
          </div>
          <div className="service-card">
            <h3>💧 Garden Material & Irrigation</h3>
            <p>We recommend and install irrigation systems for all gardens – designed to optimize plant health and water efficiency.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery" id="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {imageList.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={`/images/${img}`} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section (scroll only when clicked) */}
      <section className="about-us" id="about">
        <h2>About Us</h2>
        <div className="about-container">
          <div className="about-text">
            <p><strong>Chaitanya Patil Nursery</strong> is a leading supplier of plants in Pune. With our vast experience over many years, we are producing, cultivating and marketing different kinds of plants all over the country and we also undertake projects of gardening. We own thousands of varieties of plants in the plant kingdom. Our plant production and marketing house is situated at Pune.</p>
            <p>Our organization is a unique essence of greenery, freshness, immorality and indeed a green revolution. We are very proud to introduce the reputed green enterprise to those who endeavor nature and since our establishment we are being a part of India's richest biodiversity. We boost our customers from all cities of Maharashtra who are a prominent part of this biome.</p>
            <p>Our organization is led by <strong>Mr. Patil Brothers</strong> having a practical experience of many years in the landscaping and horticulture. With his able assistance he is managing the group of Garden Architects, Horticulturist and other staff.</p>
            <h3>OUR SERVICES</h3>
          </div>
          <div className="about-image">
            <img src="/images/ab.jpg" alt="About Us" />
          </div>
        </div>
      </section>
      {/* Contact Us Section */}
{/* Contact Us Section */}
<section className="contact-us" id="contact">
  <h2>Contact Us</h2>
  <div className="contact-container">
    <div className="contact-form">
      <h3>Send Us a Message</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Mobile" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">📩 Send Message</button>
      </form>
    </div>

    <div className="contact-info">
      <h3>📇 Chaitanya Patil</h3>
      <ul>
        <li>📞 <strong>Mobile:</strong> 7397921283, 8605498901</li>
        <li>📍 <strong>Address:</strong> Ambethan Road, Zitramala, Chakan 410501</li>
        <li>📧 <strong>Email:</strong> patilchaitanya831@gmail.com</li>
      </ul>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <p>Indrayani Hitech Nursery</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
          <p>www.gardening.com</p>
          <hr />
          <p className="copyright">© Chaitanya Garden and Developers</p>
          <p className="design">Design by Susmit Pawar</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
