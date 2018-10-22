import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import * as cartActions from '../../modules/cart/cartActions';
import s from './Header.module.css';
import CartItemList from '../ItemContainers/CartItemList/CartItemList';
import Api from '../../api/Api';
import * as authOperations from '../../modules/auth/authOperations';

class Header extends Component {
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
    // this.findInPage = this.findInPage.bind(this);
  }

  onRemoveFromCart(item) {
    this.props.removeFromCart(item);
    this.setState({
      products: this.state.products.filter(i => i !== item),
    });
  }

  // findInPage() {
  //   return (event) => {
  //     this.setState({
  //       findInPage: event.target.value,
  //     });
  //     console.log(this.state.findInPage);
  //   };
  // }
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
    this.props.history.push(`/product/${id}`);
  }

  handleCloseModal() {
    this.setState({
      showModal: false,
    });
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
              // onChange={this.findInPage()}
            />
          </form>
        </div>
        <div className={s.cart}>
          {location.pathname !== '/cart' ? (
            <button onClick={this.pushToCard}>
              Cart {this.props.amountProductsCard}
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

        <button onClick={() => this.interactLogBtn()}>
          {loginBtn}
        </button>
        <div className={s.fullName}>{fullName}</div>

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
  userInfo: state.auth.viewer,
  amountProductsCard: state.cart.items.length,
});

const mapDispatchToProps = {
  removeFromCart: cartActions.removeFromCart,
  removeConnectedUser: authOperations.removeConnectedUser,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header));
