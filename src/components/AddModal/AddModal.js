import React, { Component } from 'react';
// import Modal from 'react-modal';

// Modal.setAppElement(appElement);

class AddModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // product: [],
      title: this.props.propsItem.title || '',
      description: this.props.propsItem.description || '',
      price: this.props.propsItem.price || '',
      // id: this.createId,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.createId = this.createId.bind(this);
  }

  // async componentDidMount() {
  //   const productJson = await fetch(`/api/v1/products/${this.props.IdItemAdd}`);
  //   const product = await productJson.json();
  //   this.setState({ product });
  //   console.log('jsonprod', this.state.product[0].title)
  // }
  handleChange(name) {
    return (event) => {
      this.setState({ [name]: event.target.value });
    };
  }

  render() {
    const {
      closeModal,
      loadForm,
    } = this.props;

    if (loadForm) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {loadForm
          ? <div>..Load..</div>
          : <div>
            <label htmlFor="L1">
              Title:
              <br />
            </label>
            <textarea
              id="L1"
              name="title"
              rows="2"
              value={this.state.title}
              onChange={this.handleChange('title')}
            />
            <br />
            <label htmlFor="L2">
              Description:
              <br />
            </label>
            <textarea
              id="L2"
              name="description"
              rows="7"
              value={this.state.description}
              onChange={this.handleChange('description')}
            />
            <br />
            <label htmlFor="L3">
              Price:
              <br />
            </label>
            <textarea
              id="L3"
              name="price"
              rows="1"
              value={this.state.price}
              onChange={this.handleChange('price')}
            />
            <br />
            <button onClick={closeModal}>
              Create
            </button>
          </div>
        }
      </div>
    );
  }
}
export default AddModal;
