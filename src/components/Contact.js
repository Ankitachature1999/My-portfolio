import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const globalStyle = {
    boxSizing: 'border-box',
    fontFamily: 'Arial, Helvetica, sans-serif',
  };

  const headerStyle = {
    backgroundImage: 'url("/Images/contact.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '170px 20px',
    textAlign: 'center',
    fontSize: '35px',
    color: 'white',
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  };

  const navStyle = {
    flex: 1,
    background: '#ccc',
    padding: '20px',
  };

  const articleStyle = {
    flex: 3,
    backgroundColor: '#f1f1f1',
    padding: '20px',
    borderRadius: '8px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  };

  const textareaStyle = {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    minHeight: '100px',
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: 'fit-content',
    alignSelf: 'flex-start',
  };

  const mapStyle = {
    marginTop: '20px',
    border: '0',
    width: '100%',
    height: '300px',
    borderRadius: '8px',
  };

  const socialContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '20px',
  };

  const socialLinkStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    backgroundColor: '#a3a3a3', // Background color
    borderRadius: '50%', // Circular shape
    color: 'white', // Icon color
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow
    transition: 'transform 0.3s ease', // Smooth hover effect
    textDecoration: 'none',
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={globalStyle}>
      <header style={headerStyle}>
        {/* <h2>Cities</h2> */}
      </header>
      <section style={sectionStyle}>
        <nav style={navStyle}>
          <div className="row" style={{ position: 'relative', marginTop: '3rem' }}>
            <div className="side">
              <h2>About Me</h2>
              <h5>Photo of me:</h5>
              <div className="fakeimg" style={{ height: '200px' }}>
                <img
                  src="/Images/girl-face.jpg"
                  alt="Photo of me"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <p>"Transforming challenges into opportunities......."</p>
              <h2 style={{ textAlign: 'center', position: 'relative', marginTop: '1.5rem' }}>Contact Details</h2>
              <p style={{ textAlign: 'center' }}>"Feel Free To Get In Touch With Me."</p>
              <section className="contact">
                <div className="contact-info">
                  <div className="info">
                    <h3 style={{ marginTop: '1rem' }}>Phone Number:</h3>
                    <p>+12345678910</p>
                    <p>+12345678910</p>
                  </div>
                  <div className="info">
                    <h3 style={{ marginTop: '1rem' }}>Address:</h3>
                    <p>Shivaji Nagar, near rest house</p>
                    <p>near water tank</p>
                    <p>Nanded, Maharashtra</p>
                    <p>India</p>
                  </div>
                  <div className="info">
                    <h3 style={{ marginTop: '1rem' }}>Email:</h3>
                    <p>
                      <a style={{ color: '#323531' }} href="mailto:ankitachature0@gmail.com">ankitachature0@gmail.com</a>
                    </p>
                    <p>
                      <a style={{ color: '#323531' }} href="mailto:ankitachature7@gmail.com">ankitachature7@gmail.com</a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </nav>
        <article style={articleStyle}>
          <h3>Contact Form</h3>
          <form style={formStyle}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" style={inputStyle} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" style={inputStyle} required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" style={textareaStyle} required></textarea>

            <button type="submit" style={buttonStyle}>Submit</button>
          </form>
          {/* Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1427978339127!2d-122.08560848467994!3d37.42199997982544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e5314ddffb%3A0x28b9e4eac16de6e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1609969831873!5m2!1sen!2sus"
            style={mapStyle}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          {/* Social Media Links */}
          <div style={socialContainerStyle}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              onMouseOver={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              onMouseOver={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              onMouseOver={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              onMouseOver={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            
          </div>
          <h3 style={{color:'#323531', backgroundColor:'#7a7a7a', textAlign:'center',position:'relative', marginTop:'3rem', padding:'1rem'}}>Feel Free To Contact Me </h3>
        </article>
      
      </section>
     
    </div>
  );
}

export default Contact;
