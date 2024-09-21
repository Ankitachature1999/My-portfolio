import React from 'react';
import './Style.css';

const About = () => {
  const headerStyle = {
    padding: '170px',
    textAlign: 'center',
    color: 'white',
    backgroundImage: `url('/Images/about3.jpg')`, // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div>
       <div className="header" style={headerStyle}>
      {/* <h1>My Website</h1>
      <p>A website created by me.</p> */}
    </div>

      <div className="row" style={{ position: 'relative', marginTop: '3rem' }}>
        <div className="side">
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div className="fakeimg" style={{ height: '200px' }}>
            <img
              src="/Images/girl-face.jpg"
              alt="Profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <p>"Transforming challenges into opportunities......."</p>
          <h2 style={{ textAlign: 'center', position: 'relative', marginTop: '1.5rem',color:'#323531' }}>
            Contact Details
          </h2>
          <p style={{ textAlign: 'center' }}>"Feel Free To Get In Touch With Me."</p>
          <section className="contact">
            <div className="contact-info">
              <div className="info">
                <h3 style={{ position: 'relative', marginTop: '1rem',color:'#323531' }}>Phone Number :-</h3>
                <p style={{ wordSpacing: '4rem' }}>+12345678910 +12345678910</p>
              </div>
              <div className="info">
                <h3 style={{ position: 'relative', marginTop: '0.8rem',color:'#323531' }}>Address -</h3>
                <p>
                  Shivaji Nagar, near rest house
                  <br />
                  near water tank
                  <br /> Nanded, Maharashtra
                  <br /> India.
                </p>
              </div>
              <div className="info">
                <h3 style={{ position: 'relative', marginTop: '0.8rem',color:'#323531' }}>Email -</h3>
                <p>
                  <a href="mailto:youremail@example.com">ankitachature0@gmail.com</a>
                </p>
                <br />
                <p>
                  <a href="mailto:youremail@example.com">ankitachature7@gmail.com</a>
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="main">
          <h1 style={{ textAlign: 'center', color:'#323531' }}>Educational Details</h1>
          <div className="row" style={{ position: 'relative', marginTop: '1.3rem' }}>
            <div className="column" style={{ backgroundColor: '#f1f1f1' }}>
              <h3 style={{color:'#000000'}}>10th :-</h3>
              <h4>School Name :- </h4>
              <p>Mahatma phule, high School, Nanded. </p>
              <h4>Percentage :- </h4>
              <p>86.85% </p>
              <br />
              <h4>Passing Year :- </h4>
              <p>2015-16 </p>
              <br />
            </div>
            <div className="column" style={{ backgroundColor: '#f1f1f1' }}>
              <h3 style={{color:'#000000'}}>12th :-</h3>
              <h4>College Name :- </h4>
              <p>N.E.S Science College, Nanded. </p>
              <h4>Percentage :- </h4>
              <p>68.85% </p>
              <br />
              <h4>Passing Year :- </h4>
              <p>2017-18 </p>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="column" style={{ backgroundColor: '#f1f1f1' }}>
              <h3 style={{color:'#000000'}}>Diploma :-</h3>
              <h4>College Name :- </h4>
              <p>Government Polytechnic College, Aurangabad. </p>
              <br />
              <h4>Aggregate :- </h4>
              <p>74.85% </p>
              <br />
              <h4>Passing Year :- </h4>
              <p>2021 </p>
              <br />
            </div>
            <div className="column" style={{ backgroundColor: '#f1f1f1' }}>
              <h3 style={{color:'#000000'}}>Degree :-</h3>
              <h4>College Name :- </h4>
              <p>Marathwada Institute Of Technology, Aurangabad. </p>
              <br />
              <h4>CGPA :- </h4>
              <p>8.7 </p>
              <br />
              <h4>Passing Year :- </h4>
              <p>2023 </p>
              <br />
            </div>
          </div>

          <br />
          <h1 style={{ textAlign: 'center', color:'#323531'}}>My Interest In</h1>
          <h3 style={{color:'#000000'}}>Traveling:</h3>
          <p>
            "Every journey is an opportunity to discover new cultures and landscapes. Traveling enriches my soul, feeding my
            curiosity and love for adventure."
          </p>
          <br />

          <h3 style={{color:'#000000'}}>Music:</h3>
          <p>
            "Music is my language, speaking the words my heart cannot. Playing and listening to melodies connects me to the
            deepest parts of myself and others."
          </p>
          <br />

          <h3 style={{color:'#000000'}}>Yoga:</h3>
          <p>
            "Yoga brings balance and tranquility to my life, uniting mind, body, and spirit. Each practice is a journey inward,
            fostering peace, strength, and self-awareness."
          </p>
        </div>
      </div>

      <section>
        <h1 style={{ backgroundColor: 'gray', textAlign: 'center', }}>
          "Get to Know Me: Beyond the Basics"
        </h1>
        <div className="row" style={{ position: 'relative', marginTop: '1.3rem' }}>
          <div className="column">
            <h2 style={{color:'#323531'}}>Strengths:</h2>
            <p style={{ textAlign: 'justify', backgroundColor: '#f1f1f1', padding: '1.3rem' }}>
              "Resilient and adaptable, I thrive in challenging environments, always finding a way to overcome obstacles. My
              keen problem-solving skills and innovative thinking allow me to navigate complex situations with ease. Driven by a
              passion for continuous improvement, I consistently strive for excellence in all that I do."
            </p>
          </div>
          <div className="column">
            <h2 style={{color:'#323531'}}>Weaknesses:</h2>
            <p style={{ textAlign: 'justify', backgroundColor: '#f1f1f1', padding: '1.3rem' }}>
              "At times, my desire for perfection can slow my progress as I strive to get every detail right. I occasionally take
              on too much responsibility, leading to burnout and stress. While I work on setting realistic boundaries, I am
              learning to delegate and trust others more."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
