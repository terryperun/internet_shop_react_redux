import React, { Component } from 'react';
import T from 'prop-types';


const equal = (obj1, obj2) => {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    return true;
  }
  return false;
};

const getProductState = props => (props.propsItem || {
  id: '',
  title: '',
  description: '',
  image: '',
  price: '',
});

class AddModal extends Component {
  static propTypes = {
    propsItem: T.object,
    closeModal: T.func,
    loadForm: T.bool.isRequired,
    createNewItem: T.bool,
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (!equal(props.propsItem, state)) {
  //     return getProductState(props);
  //   }
  //   return null;
  // }

  constructor(props) {
    super(props);

    this.state = ({
      ...getProductState(props),
      createNewItem: this.props.createNewItem || false,
    });

    this.handleChange = this.handleChange.bind(this);
    this.editCreate = this.editCreate.bind(this);
    // this.getEditInfoFromJson = this.getEditInfoFromJson.bind(this);
    // this.getCreateInfoFromJson = this.getCreateInfoFromJson.bind(this);
    this.getItemInfoFromJson = this.getItemInfoFromJson.bind(this);
  }

  handleChange(name) {
    return (event) => {
      this.setState({ [name]: event.target.value });
    };
  }

  // getEditInfoFromJson(item) {
  //   console.log('Edit VLUE', item)
  //   this.props.createAddItemGlobal(item);
  // }
  //
  // getCreateInfoFromJson(item) {
  //   console.log('Crete VLUE', item)
  //   this.props.createAddItemGlobal(item);
  // }
  getItemInfoFromJson(item, type) {
    this.props.createAddItemGlobal(item, type);
  }

  editCreate() {
    const body = JSON.stringify({
      title: this.state.title || '',
      description: this.state.description || '',
      price: this.state.price || '',
      image: '',
    });
    console.log('createNewItemBEFORE', this.state.createNewItem)
    if (this.props.createNewItem) {
      this.setState({ createNewItem: false });
      console.log('createNewItemAFTER', this.state.createNewItem)
      fetch('/api/v1/products/', {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(json => this.getItemInfoFromJson(json[0], 1))
        .catch((error) => {
          console.log('Create failed', error);
        });
    } else {
      console.log('WORK ENATHER ELSE', body);
      fetch(`/api/v1/products/${this.state.id}`, {
        method: 'PATCH',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(json => this.getItemInfoFromJson(json[0], 2))
        .catch((error) => {
          console.log('Add failed', error);
        });
    }
    this.setState({ createNewItem: false });
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
            <button onMouseDown={this.editCreate} onClick={closeModal} >
              Create
            </button>
            <button onClick={this.handleCloseModalQuick}>Close Modal</button>
          </div>
        }
      </div>
    );
  }
}
export default AddModal;
