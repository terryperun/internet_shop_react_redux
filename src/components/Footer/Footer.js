import React from 'react';
import { Link } from 'react-router';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={s.footerContainer}>
        <div className={s.logo}> 2018 Technology Inc. </div>
        <div className={s.link}>
          <Link to="/about">  About Us  </Link>
          <Link to="/contact">  Contact  </Link>
          <Link to="/privacypolicy">  Privacy  </Link>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
