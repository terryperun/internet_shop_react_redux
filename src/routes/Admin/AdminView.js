import React, { Component } from 'react';
// import { withRouter } from 'react-router';
import Modal from 'react-modal';
import T from 'prop-types';
import { connect } from 'react-redux';

import * as productsOperations from '../../modules/products/productsOperations';
import cartActions from '../../modules/cart/cartActions';
import AddModal from '../../components/AddModal/AddModal';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AdminItemList from '../../components/ItemContainers/AdminItemList/AdminItemList';
// import Api from '../../api/Api';

const appElement = document.getElementById('adminPage');
Modal.setAppElement(appElement);

class Admin extends Component {
  static propTypes = {
    router: T.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      // showModalLoading: false,
    };

    this.navigateToItem = this.navigateToItem.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModalQuick = this.handleCloseModalQuick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  componentDidMount() {
    // if (!this.props.products) {
    //   this.props.fetchProducts();
    // }
    this.props.fetchProducts();
  }

  handleOpenModal() {
    this.setState({
      showModal: true,
      propsItem: undefined,
      createNewItem: true,
    });
  }

  handleCloseModal() {
    this.setState({
      showModalLoading: true,
    });
  }

  handleCloseModalQuick() {
    this.setState({
      showModal: false,
    });
  }

  navigateToItem = (evt, id) => {
    this.props.router.push(`/admin/product/${id}`);
  };

  handleEdit = (propsItem) => {
    this.setState({
      showModal: true,
      propsItem,
    });
  };

  deleteItem(id) {
    this.props.deleteProduct(id);
  }

  async updateProduct(product) {
    this.setState({
      showModalLoading: true,
    });
    await this.props.updateProduct(product.id, product);
    this.setState({
      showModal: false,
      showModalLoading: false,
    });
  }
  // add async/await
  async createProduct(product) {
    console.log('STATE BEFOR SEND TO SERV', product);
    // this.setState({
    //   createNewItem: false,
    // });
    await this.props.createProduct(product);
    this.setState({
      showModal: false,
      createNewItem: false,
    });
    console.log('entities in adminView', this.props.ent);
  }

  // async createProduct(product) {
  //   console.log('STATE BEFOR SEND TO SERV', product);
  //   debugger
  //   this.setState({
  //     createNewItem: true,
  //     showModalLoading: true,
  //   });
  //   await this.props.createProduct(product);
  //   this.setState({
  //     showModal: false,
  //     showModalLoading: false,
  //   });
  // }

  renderProducts() {
    if (this.props.isLoading) {
      console.log('START LOADING');
      return <div>..Loading..</div>;
    }

    if (!this.props.products) {
      return <div>No product</div>;
    }
    console.log(
      'PRODUCTS RENDERED IN ADMIN VIEW',
      this.props.products,
    );
    return (
      <AdminItemList
        products={this.props.products}
        navigateToItem={this.navigateToItem}
        handleEdit={this.handleEdit}
        deleteItem={this.deleteItem}
      />
    );
  }

  render() {
    const content = this.renderProducts();

    return (
      <div id="adminPage">
        <Header openModal={this.handleOpenModal} />
        <Modal
          isOpen={this.state.showModal}
          // isOpen={this.props.isLoading}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={false}
        >
          <AddModal
            closeModal={this.handleCloseModal}
            // isLoading={this.state.showModalLoading}
            isLoading={this.props.isLoading}
            propsItem={this.state.propsItem}
            showModal={this.state.showModal}
            createNewItem={this.state.createNewItem}
            onCreate={this.createProduct}
            onUpdate={this.updateProduct}
            closeQuick={this.handleCloseModalQuick}
          />
        </Modal>
        {content}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items.map(id => state.entities.products[id]),
  ent: state.entities.products,
  isLoading: state.products.isLoading,
  isError: !!state.products.error,
  errorMessage: state.products.error
    ? state.products.error.message
    : null,
});

const mapDispatchToProps = {
  fetchProducts: productsOperations.fetchProducts,
  deleteProduct: productsOperations.deleteProduct,
  updateProduct: productsOperations.updateProduct,
  createProduct: productsOperations.createProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
