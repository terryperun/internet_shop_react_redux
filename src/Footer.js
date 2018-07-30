import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-info">
          <div className="footer-logo"> 2018 Technology Inc. </div>
          <div className="footer-link">
            <Link to="/about">  About Us  </Link>
            <Link to="/contact">  Contact  </Link>
            <Link to="/privacypolicy">  Privacy  </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer
