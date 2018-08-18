import React, { Component } from 'react';
import { withRouter } from 'react-router';
//
import Modal from 'react-modal';
import AddModal from '../../components/AddModal/AddModal';
//
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AdminItemList from '../../components/ItemContainers/AdminItemList/AdminItemList';
// import EditProductView from '../EditProduct/EditProductView';
//
// Modal.setAppElement('#adminPage');
//
// const appElement = document.getElementById('adminPage');

// Modal.setAppElement('#adminPage');
//

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isLading: false,
      showModal: false,
      showingLoadForms: false,
    };
    this.clickItem = this.clickItem.bind(this);
    this.clickEdit = this.clickEdit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
    console.log('addItem', this.state.showModal);
  }

  handleCloseModal() {
    this.setState({
      showingAlert: true,
    });
    setTimeout(() => {
      this.setState({
        showingLoadForms: false,
        showModal: false
      });
    }, 2000);
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

  clickEdit = (evt, id) => {
    const IdItemAdd = id;
    console.log('id', id);
    // browserHistory.push(`/admin/product/${id}`);
  }

  render() {
    const content = this.state.isLading
      ? <div>Loading...</div>
      : <AdminItemList
          products={this.state.products}
          clickItem={this.clickItem}
          clickEdit={this.clickEdit}
        />;
    return (
      <div id="adminPage">
        <Header openModal={this.handleOpenModal} closeModal={this.handleCloseModal} />
        <p>Admin----------------------------------------------</p>
        {/* <AddModal /> */}
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={false}
        >
          <AddModal
            // id={IdItemAdd||true}
            closeModal={this.handleCloseModal}
            loadForm={this.state.showingLoadForms}
          />

          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
        <p>Admin----------------------------------------------</p>
        {content}
        <Footer />
      </div>
    );
  }
}
export default withRouter(Admin);
