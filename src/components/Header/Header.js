import React from 'react';
import { Link } from 'react-router';
import s from './Header.module.css';

const Header = () => (
  <header className={s.container}>
    <div className={s.logo}>
      <Link to="/">MLTrcPublic</Link>
    </div>
    <div className={s.searchContainer}>
      <form>
        <input placeholder="I'm looking for..." />
      </form>
    </div>
    <div className={s.cart}>
      <Link to="/cart">Cart</Link>
    </div>
  </header>
);
export default Header;
