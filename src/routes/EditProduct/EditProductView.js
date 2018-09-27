import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as productsOperations from '../../modules/products/productsOperations';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AdminProductView from '../../components/Item/AdminProductView/AdminProductView';

class EditProduct extends Component {
  // constructor(props) {
  //   super(props);
  // }

  async componentDidMount() {
    if (!this.props.product) {
      this.props.fetchProduct(this.props.params.id);
    }
  }
  renderProduct() {
    if (this.props.isLoading) {
      return <div>..Loading..</div>;
    }

    if (!this.props.product) {
      return <div>No product</div>;
    }

    return <AdminProductView product={this.props.product} />;
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
const mapStateToProps = (state, props) => ({
  product: state.products.entities[props.params.id],
  isLoading: state.products.isLoading,
  isError: !!state.products.error,
  errorMessage: state.products.error
    ? state.products.error.message
    : null,
});

const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProduct);
