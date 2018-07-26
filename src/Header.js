import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div>
      <div className="App-header">
        <div className="header-logo">
          <Link to="/">MLTrcPublic</Link>
        </div>
        <div className="header-search">
          <form>
            <input placeholder="I'm looking for..."/>
          </form>
        </div>
        <div className="header-cart">
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
};
export default Header
