import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as productsOperations from '../../modules/products/productsOperations';
import * as cartActions from '../../modules/cart/cartActions';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductView from '../../components/Item/ProductView/ProductView';

class Product extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  async componentDidMount() {
    if (!this.props.product) {
      await this.props.fetchProduct(this.props.match.params.id);
    }
  }

  addToCart() {
    this.props.addToCart(this.props.product);
  }

  renderProduct() {
    if (this.props.isLoading) {
      return <div>..Loading..</div>;
    }

    if (!this.props.product) {
      return <div>No product</div>;
    }

    return (
      <ProductView
        product={this.props.product}
        onAddtoCart={this.addToCart}
      />
    );
  }
  render() {
    const content = this.renderProduct();
    return (
      <div>
        <Header />
        {content}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: state.entities.products[props.match.params.id],
  isLoading: state.products.isLoading,
  isError: !!state.products.error,
  errorMessage: state.products.error
    ? state.products.error.message
    : null,
  cart: state.cart.totalPrice,
});
const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
  addToCart: cartActions.addToCart,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
