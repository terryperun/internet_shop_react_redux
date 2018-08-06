import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AdminItemList from '../../components/ItemContainers/AdminItemList/AdminItemList';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isLading: false,
    };
  }

  async componentDidMount() {
    this.setState({ isLading: true })
    const productsJson = await fetch('/api/v1/products');
    const products = await productsJson.json();
    console.log('products', products)
    this.setState({ products, isLading: false });
  }

  render() {
    const content = this.state.isLading
      ? <div>Loading...</div>
      : <AdminItemList products={this.state.products} />
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
export default Admin;
