import React from 'react';
import { Link } from 'react-router';
import s from './Header.module.css';

const Header = () => {
  return (
    <div>
      <div className={s.headerContainer}>
        <div className={s.logo}>
          <Link to="/">MLTrcPublic</Link>
        </div>
        <div className={s.search}>
          <form>
            <input placeholder="I'm looking for..." />
          </form>
        </div>
        <div className={s.cart}>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
