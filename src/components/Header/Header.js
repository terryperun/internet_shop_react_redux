// import React from 'react';
// import { Link } from 'react-router';
// import s from './Header.module.css';
// import { withRouter } from 'react-router';

import React, { Component } from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import s from './Header.module.css';
import CartItemList from '../ItemContainers/CartItemList/CartItemList';

// import Cart from '../../routes/Cart/CartView';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.pushToCard = this.pushToCard.bind(this);
    this.navigateToItem = this.navigateToItem.bind(this);
  }
  pushToCard() {
    const page = '';
    window.history.pushState(page, 'Cart', '/cart');
    this.setState({
      showModal: true,
    });
  }

  navigateToItem(id) {
    this.props.router.push(`/product/${id}`);
  }

  render() {
    const { openModal } = this.props;
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
          <button onClick={this.pushToCard}>Cart</button>
        </div>

        {/* {location.pathname === '/admin' ? ( */}
        <button
          id="addProductButton"
          className={s.addItemAdminContainer}
          onClick={openModal}
        >
          Add
        </button>
        {/* ) : (
          undefined */}
        {/* )} */}

        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={false}
        >
          <CartItemList
            products={this.props.cart}
            navigateToItem={this.navigateToItem}
          />
        </Modal>
      </header>
    );
  }
}

const mapStateToProps = (state, props) => ({
  cart: state.cart.items.map(id => state.entities.products[id]),
  state,
});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
// export default withRouter(Header);

// const Header = ({
//   openModal,
//   closeModal,
//   router,
//   location,
// }) => (
//   <header className={s.container}>
//     <div className={s.logo}>
//       <Link to="/">MLTrcPublic</Link>
//     </div>
//     <div className={s.searchContainer}>
//       <form>
//         <input placeholder="I'm looking for..." />
//       </form>
//     </div>
//     <div className={s.cart}>
//       <Link to="/cart">Cart</Link>
//     </div>
//     {location.pathname === '/admin'
//       ? <button
//         id="addProductButton"
//         className={s.addItemAdminContainer}
//         onClick={openModal}
//       >
//         Add
//         </button>
//     : undefined}
//   </header>
// );
// export default withRouter(Header);
