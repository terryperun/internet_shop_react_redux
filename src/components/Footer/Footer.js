import React from 'react';
import { Link } from 'react-router';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={s.footer}>
        <div className={s.footerInfo}>
          <div className={s.footerLogo}> 2018 Technology Inc. </div>
          <div className={s.footerLink}>
            <Link to="/about">  About Us  </Link>
            <Link to="/contact">  Contact  </Link>
            <Link to="/privacypolicy">  Privacy  </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
