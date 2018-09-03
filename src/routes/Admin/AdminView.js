import React, { Component } from 'react';
import { withRouter } from 'react-router';
//
import Modal from 'react-modal';
import AddModal from '../../components/AddModal/AddModal';
//
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AdminItemList from '../../components/ItemContainers/AdminItemList/AdminItemList';

const appElement = document.getElementById('adminPage');
Modal.setAppElement(appElement);

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isLading: false,
      showModal: false,
      showingLoadForms: false,
      // /
      // itemPost: false,
      // /
    };
    this.clickItem = this.clickItem.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModalQuick = this.handleCloseModalQuick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.createAddItemGlobal = this.createAddItemGlobal.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLading: true });
    const productsJson = await fetch('/api/v1/products');
    // console.log('need inf', productsJson)
    const products = await productsJson.json();
    this.setState({ products, isLading: false });

  }

  handleOpenModal() {
    this.setState({
      showModal: true,
      propsItem: undefined,
      // itemPost: true,
      createNewItem: true,
    });
  }

  handleCloseModal() {
    this.setState({
      showingLoadForms: true,
      id: '',
      title: '',
      description: '',
      price: '',
    });
    setTimeout(() => {
      this.setState({
        showingLoadForms: false,
        showModal: false,
      });
    }, 2000);
  }

  handleCloseModalQuick() {
    this.setState({
      showModal: false,
      id: '',
      title: '',
      description: '',
      price: '',
    });
  }

  clickItem = (evt, id) => {
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
    fetch(`/api/v1/products/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(json => console.log('delete', json))
      .catch((error) => {
        console.log('Request failed', error);
      });
  }

  createAddItemGlobal(item, type) {
    console.log('State Before---', this.state.products);
    console.log('Comes Item---', item);
    console.log('state---', this.state);
    console.log('type---', type);
    // console.log('this.state.products.push(item)', this.state.products.push(item))
    const stateProductsNow = this.state.products;
    if (type = 1) {
      stateProductsNow.push(item);
      this.setState({
        products: stateProductsNow,
      });
      console.log('State After---', this.state.products);
    } else if (type = 2) {
      function getIndexById(idEl, arr) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id === idEl) {
            return i;
          }
        }
      }
      const idItem = getIndexById(item.id, this.state.products);
      stateProductsNow[idItem] = item;
      this.setState({
        products: stateProductsNow,
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
            // itemPost={this.state.itemPost}
            createNewItem={this.state.createNewItem}
            createAddItemGlobal={this.createAddItemGlobal}
          />

          <button onClick={this.handleCloseModalQuick}>Close Modal</button>
        </Modal>
        <AdminItemList
          products={this.state.products}
          clickItem={this.clickItem}
          handleEdit={this.handleEdit}
          deleteItem={this.deleteItem}
        />
        <Footer />
      </div>
    );
  }
}
export default withRouter(Admin);
