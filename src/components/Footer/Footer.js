import React from 'react';
import { Link } from 'react-router';
import s from './Footer.module.css';

const Footer = () => (
  <footer className={s.container}>
    <div className={s.logo}> 2018 Technology Inc. </div>
    <div className={s.linkContainer}>
      <Link to="/about">  About Us  </Link>
      <Link to="/contact">  Contact  </Link>
      <Link to="/privacypolicy">  Privacy  </Link>
    </div>
  </footer>
);
export default Footer;
