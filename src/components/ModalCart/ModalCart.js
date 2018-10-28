import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import Cart from '../../routes/Cart/CartView';
import s from './ModalCart.module.css';
import CartItemList from '../../components/ItemContainers/CartItemList/CartItemList';
import * as cartActions from '../../modules/cart/cartActions';
import Loading from '../../components/Loading/Loading';

class ModalCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
    this.onRemoveFromCart = this.onRemoveFromCart.bind(this);
    this.navigateToItem = this.navigateToItem.bind(this);
    this.back = this.back.bind(this);
  }

  async componentDidMount() {
    const getProductsByIds = (ids) => {
      const queryString = ids.map(id => `ids[]=${id}`).join('&&');

      return fetch(`/api/v2/products?${queryString}`).then(raw =>
        raw.json());
    };
    if (this.props.cartIds.length > 0) {
      const products = await getProductsByIds(this.props.cartIds);
      this.setState({ products });
    }
  }

  onRemoveFromCart(item) {
    console.log('remove from cart', item);
    this.props.removeFromCart(item);
    this.setState({
      products: this.state.products.filter(i => i !== item),
    });
  }

  back(e) {
    const { history } = this.props;
    e.stopPropagation();
    history.goBack();
  }

  navigateToItem(id) {
    console.log('toItem', id);
    this.props.history.push(`/product/${id}`);
  }

  renderProduct() {
    if (this.state.products.length === 0) {
      return <Loading />;
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
    const { history } = this.props;
    const content = this.renderProduct();
    return (
      <div onClick={e => this.back(e)} className={s.backCart}>
        <div className={s.modalCart}>
          {content}
          <div className={s.closeModalCart}>
            <button
              type="button"
              className={s.closeModalCartBtn}
              onClick={e => this.back(e)}
            >
              Close
            </button>
          </div>
        </div>
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalCart));
