import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">YOUR LOGO</div>
      <nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#business">Our Business</a></li>
          <li><a href="#reference">Job Reference</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
