import React, { Component } from 'react';
// import { withRouter } from 'react-router';
import T from 'prop-types';
import { connect } from 'react-redux';

import * as productsOperations from '../../modules/products/productsOperations';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import UserItemList from '../../components/ItemContainers/UserItemList/UserItemList';
// import Api from '../../api/Api';

class Store extends Component {
  static propTypes = {
    router: T.object,
  };
  constructor(props) {
    super(props);

    this.navigateToItem = this.navigateToItem.bind(this);
  }

  async componentDidMount() {
    this.props.fetchProducts();
    // if (!this.props.products) {
    //   this.props.fetchProducts();
    // }
  }

  navigateToItem(id) {
    this.props.router.push(`/product/${id}`);
  }

  renderProduct() {
    if (this.props.isLoading) {
      return <div>..Loading..</div>;
    }

    if (!this.props.products) {
      return <div>No product</div>;
    }

    return (
      <UserItemList
        products={this.props.products}
        navigateToItem={this.navigateToItem}
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

const mapStateToProps = state => ({
  products: state.products.items.map(id => state.entities.products[id]),
  isLoading: state.products.isLoading,
  isError: state.products.error,
  errorMessage: state.products.error
    ? state.products.error.message
    : null,
});

const mapDispatchToProps = {
  fetchProducts: productsOperations.fetchProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Store);
