import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import OpenedItem from '../../components/ItemContainers/OpenedItem/OpenedItem';
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
    this.setState({ isLading: true });
    const productJson = await fetch(`/api/v1/products/${this.props.params.id}`);
    const product = await productJson.json();
    this.setState({ product, isLading: false });
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
        product={this.state.product}
        // navigateToItem={this.navigateToItem}
      />
    );
    return (
      <div>
        <Header />
        {content}
        <Footer />
      </div>
    );
  }
}

// const mapStateToProps = (state, props) => ({
//   product: {},
// })
export default Product;
// -----------------------------------
