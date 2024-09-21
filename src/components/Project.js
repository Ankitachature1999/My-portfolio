import React, { useState, useEffect } from 'react';

const Projects = () => {
  const headerStyle = {
    width: '100%', // Ensure full width
    padding: '170px',
    textAlign: 'center',
    color: 'white',
    backgroundImage: `url('/Images/project.jpg')`, // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const projects = [
    {
      title: 'React Project',
      description: '"React in Action: Dynamic and Modern Web Solutions"',
      imageUrl: '/Images/react-3.webp',
      link: 'http://localhost/devcons/index.php'
    },
    {
      title: 'WordPress Site',
      description: '"Building Beautiful Websites with WordPress,"WordPress Expertise for Stunning Websites"',
      imageUrl: '/Images/wordpress-6.png',
      link: 'https://dxnbodywellness.com/'
    },
    {
      title: 'HTML, CSS, JS Project',
      description: 'A project built with HTML, CSS, and JavaScript,"Dynamic Web Design with HTML, CSS, and JS"',
      imageUrl: '/Images/other-1.jpg',
      link: 'https://github.com/yourusername/html-css-js-project'
    }
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles = {
    projectsPage: {
      width: '100%',
      padding: '20px',
      textAlign: 'center',
      boxSizing: 'border-box' // Include padding in the element's total width
    },
    projectsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      flexDirection: isMobile ? 'column' : 'row',
    },
    projectCard: {
      background: '#fff',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '300px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      marginTop: '20px' // Add top margin here
    },
    projectCardImage: {
      width: '100%',
      height: 'auto'
    },
    projectCardTitle: {
      margin: '15px 0',
      fontSize: '1.5em'
    },
    projectCardDescription: {
      padding: '0 15px',
      color: '#555'
    },
    projectCardLink: {
      display: 'block',
      margin: '15px',
      padding: '10px 0',
      background: '#007bff',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '5px'
    },
    projectCardLinkHover: {
      background: '#0056b3'
    }
  };

  return (
    <div style={{ width: '100%', margin: 0, padding: 0 }}>
      <div className="header" style={headerStyle}>
        {/* Uncomment if needed */}
        {/* <h1>My Website</h1>
        <p>A website created by me.</p> */}
      </div>
      <div style={styles.projectsPage}>
        <h1 style={{ backgroundColor: '#f1f1f1' }}>My Projects</h1>
        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              style={styles.projectCard}
              key={index}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img src={project.imageUrl} alt={project.title} style={styles.projectCardImage} />
              <h2 style={styles.projectCardTitle}>{project.title}</h2>
              <p style={styles.projectCardDescription}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.projectCardLink}
                onMouseEnter={e => e.currentTarget.style.background = styles.projectCardLinkHover.background}
                onMouseLeave={e => e.currentTarget.style.background = styles.projectCardLink.background}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
