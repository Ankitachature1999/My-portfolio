import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaSass } from 'react-icons/fa';
import { SiWebpack } from 'react-icons/si';

const technicalSkills = [
  { name: 'HTML', level: 'Expert', icon: <FaHtml5 color="#E34F26" />, description: 'Markup language for creating web pages.' },
  { name: 'CSS', level: 'Expert', icon: <FaCss3Alt color="#1572B6" />, description: 'Style sheet language for designing web pages.' },
  { name: 'JavaScript', level: 'Advanced', icon: <FaJsSquare color="#F7DF1E" />, description: 'Programming language for web development.' },
  { name: 'React.js', level: 'Advanced', icon: <FaReact color="#61DAFB" />, description: 'JavaScript library for building user interfaces.' },
  { name: 'Node.js', level: 'Intermediate', icon: <FaNodeJs color="#339933" />, description: 'JavaScript runtime for server-side programming.' },
  { name: 'Git', level: 'Advanced', icon: <FaGitAlt color="#F05032" />, description: 'Version control system for tracking changes in code.' },
  { name: 'Webpack', level: 'Intermediate', icon: <SiWebpack color="#8DD6F9" />, description: 'Module bundler for JavaScript applications.' },
  { name: 'Sass', level: 'Intermediate', icon: <FaSass color="#CC6699" />, description: 'Preprocessor scripting language for CSS.' },
];

const nonTechnicalSkills = [
  { name: 'Communication', level: 'Expert', description: 'Excellent verbal and written communication skills.' },
  { name: 'Teamwork', level: 'Expert', description: 'Proven ability to work effectively in a team environment.' },
  { name: 'Problem-Solving', level: 'Advanced', description: 'Strong problem-solving skills with a creative approach.' },
  { name: 'Time Management', level: 'Advanced', description: 'Effective time management and ability to meet deadlines.' },
  { name: 'Adaptability', level: 'Advanced', description: 'Adaptable to new environments and technologies.' },
];

const SkillSection = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>

      <h3>Technical Skills</h3>
      <div className="skills-grid">
        {technicalSkills.map((skill, index) => (
          <div key={index} className="skill-card" title={skill.description}>
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>

      <h3>Non-Technical Skills</h3>
      <div className="skills-grid">
        {nonTechnicalSkills.map((skill, index) => (
          <div key={index} className="skill-card" title={skill.description}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>

      <style>
        {`
          .skills-container {
            text-align: center;
            padding: 50px 20px;
            background-color: #f9f9f9;
          }
          .skills-container h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }
          .skills-container h3 {
            font-size: 2rem;
            margin-top: 40px;
            margin-bottom: 20px;
          }
          .skills-grid {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
          }
          .skill-card {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            width: 200px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            position: relative;
          }
          .skill-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }
          .skill-card .icon {
            font-size: 3rem;
            margin-bottom: 10px;
          }
          .skill-card h3 {
            margin: 0;
            font-size: 1.5rem;
          }
          .skill-card p {
            margin: 5px 0 0;
            color: #555;
          }
          .skill-card[title] {
            position: relative;
          }
          .skill-card[title]:hover::after {
            content: attr(title);
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #333;
            color: #fff;
            padding: 5px 10px;
            border-radius: 5px;
            white-space: nowrap;
            font-size: 0.8rem;
            z-index: 1;
          }
        `}
      </style>
    </div>
  );
};

export default SkillSection;
