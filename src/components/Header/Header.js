import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import * as cartActions from '../../modules/cart/cartActions';
import s from './Header.module.css';
import CartItemList from '../ItemContainers/CartItemList/CartItemList';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      products: [],
    };

    this.pushToCard = this.pushToCard.bind(this);
    this.navigateToItem = this.navigateToItem.bind(this);
    this.onRemoveFromCart = this.onRemoveFromCart.bind(this);
    this.fetchProductsById = this.fetchProductsById.bind(this);
  }

  onRemoveFromCart(item) {
    this.props.removeFromCart(item);
    this.setState({
      products: this.state.products.filter(i => i !== item),
    });
  }

  async fetchProductsById() {
    const getProductsByIds = (ids) => {
      const queryString = ids.map(id => `ids[]=${id}`).join('&&');

      return fetch(`/api/v1/products?${queryString}`).then(raw =>
        raw.json());
      // .then(data => this.setState({ ItemList: data }));
    };
    if (this.props.cartIds.length > 0) {
      const products = await getProductsByIds(this.props.cartIds);
      this.setState({ products });
      console.log(
        'product fetchIDSMODAL',
        this.props.cartIds.length,
        this.state.products,
      );
    }
  }

  pushToCard() {
    const page = '';
    window.history.pushState(page, 'Cart', '/cart');
    this.setState({
      showModal: true,
    });
    this.fetchProductsById();
  }

  navigateToItem(id) {
    console.log('HEADER navigateToItem', id);
    this.props.router.push(`/product/${id}`);
  }

  renderProduct() {
    if (this.state.products.length === 0) {
      console.log('this message will show ');
      return <div>..no cookies :( ..</div>;
    }
    return (
      <CartItemList
        products={this.state.products}
        navigateToItem={this.navigateToItem}
        onRemoveFromCart={this.onRemoveFromCart}
      />
    );
  }

  render() {
    const { openModal } = this.props;
    const content = this.renderProduct();
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
          {content}
        </Modal>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  cartIds: state.cart.items,
});

const mapDispatchToProps = {
  removeFromCart: cartActions.removeFromCart,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header));
