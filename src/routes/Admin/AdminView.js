import React, { Component } from 'react';
import { withRouter } from 'react-router';
//
import Modal from 'react-modal';
import AddModal from '../../components/AddModal/AddModal';
//
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AdminItemList from '../../components/ItemContainers/AdminItemList/AdminItemList';
import Api from '../../api/Api';

const appElement = document.getElementById('adminPage');
Modal.setAppElement(appElement);

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isLading: true, //----------
      showModal: false,
      showingLoadForms: false,
    };

    this.navigateToItem = this.navigateToItem.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModalQuick = this.handleCloseModalQuick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.createAddItemGlobal = this.createAddItemGlobal.bind(this);
    this.modalCreate = this.modalCreate.bind(this);
  }

  async componentDidMount() {
    const productsJson = await Api.getProducts();
    const products = await productsJson.json();
    this.setState({ products, isLading: false });
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
      showingLoadForms: true,
    });
  }

  handleCloseModalQuick() {
    this.setState({
      showModal: false,
    });
  }

  navigateToItem = (evt, id) => {
    this.props.router.push(`/admin/product/${id}`);
    // browserHistory.push(`/admin/product/${id}`);
  }

  handleEdit = (propsItem) => {
    this.setState({
      showModal: true,
      propsItem,
    });
  }

  deleteItem(id) {
    Api.removeProduct(id)
      .then(res => res.json())
      .then(this.setState({ products: this.state.products.filter(i => i.id !== id) }))
      .catch((error) => {
        console.log('Request failed', error);
      });
  }

  createAddItemGlobal(item, type) {
    const changeState = (value) => {
      this.setState({
        products: value,
      });
    };
    const stateProductsNow = [...this.state.products];
    if (type === 'addNewItem') {
      stateProductsNow.push(item);
      changeState(this.state.products.concat(item));
    } else if (type === 'editItem') {
      const indexItem = this.state.products.findIndex(elem => elem.id === item.id);
      stateProductsNow[indexItem] = item;
      changeState(stateProductsNow);
    }
    this.setState({
      showingLoadForms: false,
      showModal: false,
    });
  }

  modalCreate(modalState) {
    const body = {
      title: modalState.title || '',
      description: modalState.description || '',
      price: modalState.price || '',
      image: '',
    };
    if (this.state.createNewItem) {
      this.setState({ createNewItem: false });
      Api.createProduct(body)
        .then(res => res.json())
        .then(json => this.createAddItemGlobal(json[0], 'addNewItem'))
        .catch((error) => {
          console.log('Create failed', error);
        });
    } else {
      const idEditItem = modalState.id;
      Api.updateProduct(body, idEditItem)
        .then(res => res.json())
        .then(json => this.createAddItemGlobal(json[0], 'editItem'))
        .catch((error) => {
          console.log('Add failed', error);
        });
    }
  }

  render() {
    if (this.state.isLading) {
      return <div>Loading...</div>;
    }

    return (
      <div id="adminPage">
        <Header
          openModal={this.handleOpenModal}
        />
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={false}
        >
          <AddModal
            closeModal={this.handleCloseModal}
            loadForm={this.state.showingLoadForms}
            propsItem={this.state.propsItem}
            showModal={this.state.showModal}
            createNewItem={this.state.createNewItem}
            onCreate={this.modalCreate}
            closeQuick={this.handleCloseModalQuick}
          />
        </Modal>
        <AdminItemList
          products={this.state.products}
          navigateToItem={this.navigateToItem}
          handleEdit={this.handleEdit}
          deleteItem={this.deleteItem}
        />
        <Footer />
      </div>
    );
  }
}
export default withRouter(Admin);
