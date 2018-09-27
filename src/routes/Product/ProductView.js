import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as productsOperations from '../../modules/products/productsOperations';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import OpenedItem from '../../components/Item/OpenedItem/OpenedItem';
// import UserItemList from '../../components/ItemContainers/UserItemList/UserItemList';
import OpenedItem from '../../components/ItemContainers/OpenedItem/OpenedItem';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      isLading: false,
    };
    // this.navigateToItem = this.navigateToItem.bind(this);
  }

  async componentDidMount() {
    // if (!this.props.product) {
    // fetch product

    // }
    // console.log('-------------------', this.props.product);

    this.props.fetchProduct(this.props.params.id);
    // this.setState({ isLading: true });
    // const productJson = await fetch(`/api/v1/products/${this.props.params.id}`);
    // const product = await productJson.json();
    // this.setState({ product, isLading: false });
    // console.log('////////////////', this.state.product.id);
  }

  // navigateToItem = (evt, id) => {
  //   console.log('product-----------', this.state.product);
  //   this.props.router.push(`product/${id}`);
  // };

  render() {
    const content = this.state.isLading ? (
      <div>..Loading..</div>
    ) : (
      <OpenedItem
        product={this.props.product}
        // product={this.state.product}
        // navigateToItem={this.navigateToItem}
      />
    );
    console.log('wwwwwwwwwwwwww', this.props.product);
    return (
      <div>
        <Header />
        {content}
        {/* {console.log( */}
        {/* 'wwwww2wwwwwww', */}
        {/* this.props.product[this.props.params.id], )} */}
        <Footer />
      </div>
    );
  }
}
// state.products.entities[this.props.params.id];
// state.products.items.map(id => state.products.entities[id]);
// this.props.params.id;
const mapStateToProps = state => ({
  // product: state.products.entities,
  // product: state.products.items.map(id => state.products.entities[id]),
  product: state.products.items.map(id => state.products.entities[id]),
});
const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
// export default Product;
