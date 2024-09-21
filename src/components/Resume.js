import React from 'react';

const Resume = () => {
  const headerStyle = {
    padding: '5px',
    textAlign: 'center',
    color: 'white',
    backgroundImage: `url('/Images/595B5F.jpeg')`, // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor:'rgb(204, 204, 204);'
  };

  const containerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 50px)',
    boxSizing: 'border-box',
    paddingBottom: '50px',
  };

  const imageStyle = {
    marginTop: '2.7rem',
    maxWidth: '100%',
    height: '800px',
    backgroundColor: '#f1f1f1', // Change background color as needed
    border: '2px solid #ccc', // Add border
    borderRadius: '8px', // Add border radius for rounded corners
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add box shadow for subtle elevation
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const buttonStyle = {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none', // Ensure button behaves like a link
    display: 'inline-block',
    textAlign: 'center',
  };

  return (
    <>
      <div className="header" style={headerStyle}>
      <h2>My Resume </h2>
      </div>

      <div style={containerStyle}>
        <img style={imageStyle} src="/Images/Ankita Chature_page-0001.jpg" alt="Resume" />
        <div style={overlayStyle}></div>
        <a href="/Images/Ankita Chature_page-0001.jpg" download="Ankita_Chature_Resume.jpg">
          <button style={buttonStyle}>Download Resume</button>
        </a>
      </div>
    </>
  );
};

export default Resume;
