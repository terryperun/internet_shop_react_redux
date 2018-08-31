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
      itemPost: false,
      // /
    };
    this.clickItem = this.clickItem.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModalQuick = this.handleCloseModalQuick.bind(this);
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
      itemPost: true,
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
    // console.log('propsItem', this.state.propsItem)
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
            itemPost={this.state.itemPost}
          />

          <button onClick={this.handleCloseModalQuick}>Close Modal</button>
        </Modal>
        <AdminItemList
          products={this.state.products}
          clickItem={this.clickItem}
          handleEdit={this.handleEdit}
        />
        <Footer />
      </div>
    );
  }
}
export default withRouter(Admin);
