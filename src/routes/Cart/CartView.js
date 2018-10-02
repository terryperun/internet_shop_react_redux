import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItemList from '../../components/ItemContainers/CartItemList/CartItemList';
import * as productsOperations from '../../modules/products/productsOperations';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Cart extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Header />
        <CartItemList products={this.props.cart} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.items.map(id => state.entities.products[id]),
  state,
});

const mapDispatchToProps = {
  fetchProducts: productsOperations.fetchProducts,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
