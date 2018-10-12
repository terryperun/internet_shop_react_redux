import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItemList from '../../components/ItemContainers/CartItemList/CartItemList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as cartActions from '../../modules/cart/cartActions';
import s from './CartView.module.css';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
    this.onRemoveFromCart = this.onRemoveFromCart.bind(this);
    this.navigateToItem = this.navigateToItem.bind(this);
  }

  async componentDidMount() {
    const getProductsByIds = (ids) => {
      const queryString = ids.map(id => `ids[]=${id}`).join('&&');

      return fetch(`/api/v1/products?${queryString}`).then(raw =>
        raw.json());
    };
    if (this.props.cartIds.length > 0) {
      const products = await getProductsByIds(this.props.cartIds);
      this.setState({ products });
    }
  }

  onRemoveFromCart(item) {
    this.props.removeFromCart(item);
    this.setState({
      products: this.state.products.filter(i => i !== item),
    });
  }

  navigateToItem(id) {
    console.log('navigateToItem navigateToItem', id);
    this.props.router.push(`/product/${id}`);
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
        />
        <div className={s.totalPrice}>
          Total price: {this.props.totalPrice}
        </div>
      </div>
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

const mapStateToProps = state => ({
  cartIds: state.cart.items,
  totalPrice: state.cart.totalPrice,
});

const mapDispatchToProps = {
  removeFromCart: cartActions.removeFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
