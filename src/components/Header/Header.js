import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import T from 'prop-types';

import * as cartActions from '../../modules/cart/cartActions';
import s from './Header.module.css';
import CartItemList from '../ItemContainers/CartItemList/CartItemList';
import Api from '../../api/Api';
import * as authOperations from '../../modules/auth/authOperations';

class Header extends Component {
  static propTypes = {
    removeFromCart: T.func,
    removeConnectedUser: T.func,
    cartIds: T.array,
  };
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      products: [],
      // findInPage: '',
    };

    this.pushToCard = this.pushToCard.bind(this);
    this.navigateToItem = this.navigateToItem.bind(this);
    this.onRemoveFromCart = this.onRemoveFromCart.bind(this);
    this.fetchProductsById = this.fetchProductsById.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.interactLogBtn = this.interactLogBtn.bind(this);
    this.closeModalCart = this.closeModalCart.bind(this);
    // this.findInPage = this.findInPage.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  onRemoveFromCart(item) {
    this.props.removeFromCart(item);
    this.setState({
      products: this.state.products.filter(i => i !== item),
    });
  }

  closeModalCart() {
    this.setState({
      showModal: false,
    });
    window.history.pushState('', '', '/');
  }

  interactLogBtn() {
    console.log('do', this.props.userInfo);
    if (this.props.userInfo) {
      window.localStorage.removeItem('token');
      this.props.removeConnectedUser();
    } else {
      this.props.history.push('/login');
    }
  }

  async fetchProductsById() {
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

  pushToCard() {
    // this.setState({
    //   currentLocation: window.location.href,
    // });
    const page = '';
    window.history.pushState(page, 'Cart', '/cart');
    this.setState({
      showModal: true,
    });

    this.fetchProductsById();
    // this.props.openModalCart(true);
  }

  navigateToItem(id) {
    this.props.history.push(`/product/${id}`);
  }

  handleCloseModal() {
    this.setState({
      showModal: false,
    });
    // this.props.openModalCart(false);
  }

  loginBtn() {
    if (this.props.userInfo) {
      return <div>Logout</div>;
    }
    return <div>Login</div>;
  }

  fullName() {
    if (!this.props.userInfo) {
      return;
    }
    return (
      <div>
        {this.props.userInfo.firstName} {this.props.userInfo.lastName}
      </div>
    );
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
          // closeModalCart={this.closeModalCart}
        />
      </div>
    );
  }

  render() {
    const { openModal, location } = this.props;
    const content = this.renderProduct();
    const loginBtn = this.loginBtn();
    const fullName = this.fullName();
    return (
      <header className={s.container}>
        <div className={s.logo}>
          <Link to="/">MLTrcPublic</Link>
        </div>
        <div className={s.searchContainer}>
          <form>
            <input
              placeholder="I'm looking for..."
            />
          </form>
        </div>
        <div className={s.cart}>
          {location.pathname !== '/cart' ? (
            <button onClick={this.pushToCard}>
              Cart{' '}
              {this.props.amountProductsCard
                ? this.props.amountProductsCard
                : undefined}
            </button>
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
        <div className={s.loginBtnInCartContainer}>
          <button
            onClick={() => this.interactLogBtn()}
            className={s.loginBtnCart}
          >
            {loginBtn}
          </button>
        </div>
        <div className={s.fullName}>{fullName}</div>

        <Modal
          isOpen={this.state.showModal}
          // isOpen={this.props.openModalCartBull}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={false}
        >
          {content}
          <div className={s.containerPriseBtn}>
            <div className={s.totalPrice}>
              Total price: {this.props.totalPrice}
            </div>
            <div className={s.closeModalCart}>
              <button
                className={s.closeModalCartBtn}
                onClick={this.closeModalCart}
              >
                Close
              </button>
              {/* <button
                className={s.closeModalCartBtn}
                onClick={() => this.props.openModalCart(false)}
              >
                Close
              </button> */}
            </div>
          </div>
        </Modal>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  cartIds: state.cart.items,
  totalPrice: state.cart.totalPrice,
  userInfo: state.auth.viewer,
  amountProductsCard: state.cart.items.length,
  // openModalCartBull: state.cart.openModalCart,
});

const mapDispatchToProps = {
  removeFromCart: cartActions.removeFromCart,
  removeConnectedUser: authOperations.removeConnectedUser,
  // openModalCart: cartActions.openModalCart,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header));
