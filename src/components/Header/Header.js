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
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  handleCloseModal() {
    this.setState({
      showModal: false,
    });
  }

  renderProduct() {
    if (this.state.products.length === 0) {
      return <div>..no cookies :( ..</div>;
    }
    return (
      <div>
        <CartItemList
          products={this.state.products}
          navigateToItem={this.navigateToItem}
          onRemoveFromCart={this.onRemoveFromCart}
          // isOpen={this.state.showModal}
        />
        <div className={s.totalPrice}>
          Total price: {this.props.totalPrice}
        </div>
      </div>
    );
  }

  render() {
    const { openModal, location } = this.props;
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
          {location.pathname !== '/cart' ? (
            <button onClick={this.pushToCard}>Cart</button>
          ) : (
            undefined
          )}
        </div>

        {location.pathname === '/admin/' ||
        location.pathname === '/admin' ? (
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
  totalPrice: state.cart.totalPrice,
});

const mapDispatchToProps = {
  removeFromCart: cartActions.removeFromCart,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header));
