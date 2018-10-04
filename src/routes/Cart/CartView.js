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

    this.state = {
      products: [],
    };
    this.onRemoveFromCart = this.onRemoveFromCart.bind(this);
  }

  async componentDidMount() {
    const getProductsByIds = (ids) => {
      const queryString = ids.map(id => `ids[]=${id}`).join('&&');

      return fetch(`/api/v1/products?${queryString}`).then(raw =>
        raw.json());
      // .then(data => this.setState({ ItemList: data }));
    };
    if (this.props.cartIds.length > 0) {
      const products = await getProductsByIds(this.props.cartIds);
      this.setState({ products });
      console.log('323232323232', products);
    }
  }

  onRemoveFromCart(item) {
    this.props.removeFromCart(item);
    console.log('item', item);
  }

  render() {
    return (
      <div>
        <Header />
        <CartItemList
          products={this.state.products}
          onRemoveFromCart={this.onRemoveFromCart}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartIds: state.cart.items,
});

const mapDispatchToProps = {
  removeFromCart: cartActions.removeFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
