import React from 'react';
import { Link } from 'react-router';
import s from './Header.module.css';

const Header = ({
  openModal,
  closeModal,
}) => (
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
    <button
      id="addProductButton"
      className={s.addItemAdminContainer}
      onClick={openModal}
    >
      Add
    </button>
  </header>
);
export default Header;
