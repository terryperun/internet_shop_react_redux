import React from 'react';
import { Link } from 'react-router';
import s from './Header.module.css';

const Header = () => {
  return (
    <div>
      <div className={s.AppHeader}>
        <div className={s.headerLogo}>
          <Link to="/">MLTrcPublic</Link>
        </div>
        <div className={s.headerSearch}>
          <form>
            <input placeholder="I'm looking for..." />
          </form>
        </div>
        <div className={s.headerCart}>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
