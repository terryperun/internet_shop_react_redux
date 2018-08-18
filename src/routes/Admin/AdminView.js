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
      // products: [],
      isLading: false,
      showModal: false,
      showingLoadForms: false,
      IdItemAdd: '',
    };
    this.clickItem = this.clickItem.bind(this);
    this.clickEdit = this.clickEdit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModalQuick = this.handleCloseModalQuick.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
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

  clickEdit = (evt, id, title, description, price) => {
    this.setState({
      showModal: true,
      IdItemAdd: id,
      id,
      title,
      description,
      price,
    });
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
            IdItemAdd={this.state.IdItemAdd}
            closeModal={this.handleCloseModal}
            loadForm={this.state.showingLoadForms}
            //
            inpId={this.state.id}
            title={this.state.title}
            description={this.state.description}
            price={this.state.price}
            //
          />

          <button onClick={this.handleCloseModalQuick}>Close Modal</button>
        </Modal>
        {content}
        <Footer />
      </div>
    );
  }
}
export default withRouter(Admin);
