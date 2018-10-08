import React, { Component } from 'react';
// import { withRouter } from 'react-router';
import T from 'prop-types';
import { connect } from 'react-redux';

import * as productsOperations from '../../modules/products/productsOperations';
import * as cartActions from '../../modules/cart/cartActions';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import UserItemList from '../../components/ItemContainers/UserItemList/UserItemList';
// import Api from '../../api/Api';

class Store extends Component {
  static propTypes = {
    router: T.object,
  };
  constructor(props) {
    super(props);

    this.navigateToItem = this.navigateToItem.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  async componentDidMount() {
    this.props.fetchProducts();
    // if (!this.props.products) {
    //   this.props.fetchProducts();
    // }
  }

  navigateToItem(id) {
    this.props.router.push(`/product/${id}`);
  }

  addToCart(product) {
    this.props.addToCart(product);

    // if (localStorage.getItem('cartProductsId') == null) {
    //   const cartProduct = [];
    //   cartProduct.push(product);
    //   localStorage.setItem('cartProductsId', cartProduct);
    // } else {
    //   const cartProducts = JSON.parse(localStorage.getItem('cartProductsId'));
    //   cartProducts.push(product);
    //   localStorage.setItem('cartProductsId', cartProducts);
    // }
    // const products = JSON.stringify(product);
  }

  renderProducts() {
    if (this.props.isLoading) {
      return <div>..Loading..</div>;
    }

    if (!this.props.products) {
      return <div>No product</div>;
    }

    return (
      <UserItemList
        products={this.props.products}
        navigateToItem={this.navigateToItem}
        onAddInCart={this.addToCart}
      />
    );
  }

  render() {
    const content = this.renderProducts();
    return (
      <div>
        <Header />
        {content}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items.map(id => state.entities.products[id]),
  isLoading: state.products.isLoading,
  isError: state.products.error,
  errorMessage: state.products.error
    ? state.products.error.message
    : null,
  cartIds: state.cart.items,
  // carts: state.cart,
});

const mapDispatchToProps = {
  fetchProducts: productsOperations.fetchProducts,
  addToCart: cartActions.addToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Store);
