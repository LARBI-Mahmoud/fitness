// src/components/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 MyCompany. All Rights Reserved.</p>
      <div>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Footer;
