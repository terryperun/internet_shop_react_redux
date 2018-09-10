import React from 'react';
import { Link } from 'react-router';
import s from './Header.module.css';
import { withRouter } from 'react-router';

const Header = ({
  openModal,
  closeModal,
  router,
  // match,
  location,
  // history,
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
    111
    {location.pathname === '/admin/'
      ?<button
        id="addProductButton"
        className={s.addItemAdminContainer}
        onClick={openModal}
      >
        Add
      </button>
    : undefined}
    222
    {location.pathname}
    3333

  </header>
);
export default withRouter(Header);
