
// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Style.css';

const Header = () => {
  return (
    <header>
      <h1 style={{color:'red'}}>My Portfolio</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName="active">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" activeClassName="active">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;