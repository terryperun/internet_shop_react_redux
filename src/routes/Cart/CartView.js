import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItemList from '../../components/ItemContainers/CartItemList/CartItemList';
// import * as productsOperations from '../../modules/products/productsOperations';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as cartActions from '../../modules/cart/cartActions';

// window.onload = function () {
//   if (localStorage.getItem('cartProductsId') !== null) {
//     const cartItemsJSON = localStorage.getItem('cartProductsId');
//     const cartItems = JSON.parse(cartItemsJSON);
//   }
//   console.log('locallocallocal', cartItems);
//   return cartItems;
// };

class Cart extends Component {
  constructor(props) {
    super(props);

    this.onRemoveFromCart = this.onRemoveFromCart.bind(this);
    this.navigateToItem = this.navigateToItem.bind(this);
  }

  async componentDidMount() {
    const getProductsByIds = (ids) => {
      const queryString = ids.map(id => `ids[]=${id}`).join('&&');

      return fetch(`/api/v1/products?${queryString}`).then(raw =>
        raw.json());
      // .then(data => this.setState({ ItemList: data }));
    };
    if (this.props.cart !== undefined) {
      const products = await getProductsByIds(this.props.cart);
      // this.setState({ products });
    }
  }

  onRemoveFromCart(item) {
    this.props.removeFromCart(item);
  }

  navigateToItem(id) {
    console.log('navigateToItem navigateToItem', id);
    this.props.router.push(`/product/${id}`);
  }

  render() {
    return (
      <div>
        <Header />
        <CartItemList
          products={this.props.cart}
          navigateToItem={this.navigateToItem}
          onRemoveFromCart={this.onRemoveFromCart}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.items.map(id => state.entities.products[id]),
});

const mapDispatchToProps = {
  removeFromCart: cartActions.removeFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
