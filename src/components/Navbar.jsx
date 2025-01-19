import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './style/navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div className='nav_container'>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          
          <li className="dropdown" onClick={toggleDropdown}>
            <a href="#services">Our Services</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#service1">Service 1</a></li>
                <li><a href="#service2">Service 2</a></li>
                <li><a href="#service3">Service 3</a></li>
              </ul>
            )}
          </li>
          
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#search"><i className="fas fa-search"></i> Search</a></li>
        </ul>
        <button className="talk-expert-btn">Talk To An Expert</button>
      </nav>
    </div>
  );
}

export default Navbar;
