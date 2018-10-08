// import React from 'react';
// import { Link } from 'react-router';
// import s from './Header.module.css';
// import { withRouter } from 'react-router';

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import * as cartActions from '../../modules/cart/cartActions';

import s from './Header.module.css';
import CartItemList from '../ItemContainers/CartItemList/CartItemList';

// import Cart from '../../routes/Cart/CartView';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.pushToCard = this.pushToCard.bind(this);
    this.navigateToItem = this.navigateToItem.bind(this);
    this.onRemoveFromCart = this.onRemoveFromCart.bind(this);
  }

  onRemoveFromCart(item) {
    this.props.removeFromCart(item);
  }

  pushToCard() {
    const page = '';
    window.history.pushState(page, 'Cart', '/cart');
    this.setState({
      showModal: true,
    });
  }

  navigateToItem(id) {
    console.log('HEADER navigateToItem', id);
    this.props.router.push(`/product/${id}`);
  }

  render() {
    const { openModal } = this.props;
    return (
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
          {window.location.pathname !== '/cart' ? (
            <button onClick={this.pushToCard}>Cart</button>
          ) : (
            undefined
          )}
        </div>

        {window.location.pathname === '/admin' ? (
          <button
            id="addProductButton"
            className={s.addItemAdminContainer}
            onClick={openModal}
          >
            Add
          </button>
        ) : (
          undefined
        )}

        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={false}
        >
          <CartItemList
            products={this.props.cart}
            navigateToItem={this.navigateToItem}
            onRemoveFromCart={this.onRemoveFromCart}
          />
        </Modal>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.items.map(id => state.entities.products[id]),
});

const mapDispatchToProps = {
  removeFromCart: cartActions.removeFromCart,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header));
