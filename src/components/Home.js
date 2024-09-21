// src/components/Home.js
import React, { useEffect, useState } from 'react';
import './Style.css';

const TypingEffect = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return <p className="typing-text">{displayedText}</p>;
};

const Home = () => {
  return (
    <div className="home-page">
      <div className="left" style={{backgroundColor:'#cccccc'}}>
        <img src="/Images/e703c0e6-7e35-40eb-a7ae-af57ad6cea25.jpg" alt="Profile" className="profile-image" />
      </div>
      <div className="right" style={{backgroundColor:'#e8e8e8'}}>
        <span><h1 style={{color:'orangered'}}>My Portfolio</h1></span>
      
        <h2 style={{color:'black'}}>Wellcome come to my "Portfolio".</h2>
        <TypingEffect  text="I'am a Web Developer/UI & UX Designer." />
        
        <div className="buttons">
          <button className="explore-btn">Explore Now</button>
          <button className="play-btn">Play Video</button>
        </div>
      </div>

     
    </div>
  );
}

export default Home;
