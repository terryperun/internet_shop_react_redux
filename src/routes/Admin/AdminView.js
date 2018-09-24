import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import T from 'prop-types';
import { connect } from 'react-redux';

import * as productsOperations from '../../modules/products/productsOperations';
import AddModal from '../../components/AddModal/AddModal';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AdminItemList from '../../components/ItemContainers/AdminItemList/AdminItemList';
import Api from '../../api/Api';

const appElement = document.getElementById('adminPage');
Modal.setAppElement(appElement);

const createBody = product => ({
  title: product.title || '',
  description: product.description || '',
  price: product.price || '',
  image: '',
});

class Admin extends Component {
  static propTypes = {
    router: T.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      showModal: false,
      showModalLoading: false,
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
    // const body = createBody(product);
    // this.setState({
    //   showModalLoading: true,
    // });

    // const editItemId = product.id;
    // Api.updateProduct(editItemId, body)
    //   .then((json) => {
    //     const stateProductsNow = [...this.state.products];
    //     const newProduct = json[0];

    //     const indexItem = this.state.products.findIndex(elem => elem.id === product.id);
    //     stateProductsNow[indexItem] = newProduct;

    //     this.setState({
    //       products: stateProductsNow,
    //       showModalLoading: false,
    //       showModal: false,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log('Add failed', error);
    //   });
  }

  createProduct(product) {
    const body = createBody(product);
    this.setState({ createNewItem: false, showModalLoading: true });
    Api.createProduct(body)
      .then((json) => {
        const newProduct = json[0];

        this.setState({
          products: this.state.products.concat(newProduct),
          showModalLoading: false,
          showModal: false,
        });
      })
      .catch((error) => {
        console.log('Create failed', error);
      });
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div id="adminPage">
        <Header openModal={this.handleOpenModal} />
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={false}
        >
          <AddModal
            closeModal={this.handleCloseModal}
            isLoading={this.state.showModalLoading}
            propsItem={this.state.propsItem}
            showModal={this.state.showModal}
            createNewItem={this.state.createNewItem}
            onCreate={this.createProduct}
            onUpdate={this.updateProduct}
            closeQuick={this.handleCloseModalQuick}
          />
        </Modal>
        <AdminItemList
          products={this.props.products}
          navigateToItem={this.navigateToItem}
          handleEdit={this.handleEdit}
          deleteItem={this.deleteItem}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
