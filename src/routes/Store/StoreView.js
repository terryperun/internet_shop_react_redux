import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as productsOperations from '../../modules/products/productsOperations';
import * as cartActions from '../../modules/cart/cartActions';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import UserItemList from '../../components/ItemContainers/UserItemList/UserItemList';
import Loading from '../../components/Loading/Loading';
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
    await this.props.fetchProducts();
    // if (!this.props.products) {
    //   await this.props.fetchProducts();
    // }
  }

  navigateToItem(id) {
    this.props.history.push(`/product/${id}`);
  }

  addToCart(product) {
    this.props.addToCart(product);
    this.props.history.push({
      pathname: '/cart',
      state: {
        modal: true,
      },
    });
  }

  renderProducts() {
    if (this.props.isLoading) {
      // return <div>..Loading..</div>;
      return <Loading />;
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
});

const mapDispatchToProps = {
  fetchProducts: productsOperations.fetchProducts,
  addToCart: cartActions.addToCart,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Store));
