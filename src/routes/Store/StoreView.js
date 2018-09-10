import React, { Component } from 'react';
import { withRouter } from 'react-router';
import T from 'prop-types';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import UserItemList from '../../components/ItemContainers/UserItemList/UserItemList';
import Api from '../../api/Api';

class Store extends Component {
  static propTypes = {
    router: T.object,
  }
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isLoading: true,
    };
    this.navigateToItem = this.navigateToItem.bind(this);
  }

  async componentDidMount() {
    const products = await Api.getProducts();
    this.setState({ products, isLoading: false });
  }

  navigateToItem(id) {
    this.props.router.push(`/admin/product/${id}`);
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.isLoading
          ? <div>Loading...</div>
          : <UserItemList
            products={this.state.products}
            navigateToItem={this.navigateToItem}
          />}
        <Footer />
      </div>
    );
  }
}
export default withRouter(Store);
