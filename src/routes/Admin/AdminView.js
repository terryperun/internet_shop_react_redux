import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AdminItemList from '../../components/ItemContainers/AdminItemList/AdminItemList';
// import EditProductView from '../EditProduct/EditProductView';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isLading: false,
    };
    this.clickItem = this.clickItem.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLading: true });
    const productsJson = await fetch('/api/v1/products');
    const products = await productsJson.json();
    this.setState({ products, isLading: false });
  }

  clickItem = (evt, id) => {
    this.props.router.push(`/admin/product/${id}`);
    // browserHistory.push(`/admin/product/${id}`);
  }

  render() {
    const content = this.state.isLading
      ? <div>Loading...</div>
      : <AdminItemList products={this.state.products} clickItem={this.clickItem} />;
    return (
      <div>
        <Header />
        <p>Admin</p>
        {content}
        <Footer />
      </div>
    );
  }
}
export default withRouter(Admin);
