import React, { Component } from 'react';
import T from 'prop-types';


const equal = (obj1, obj2) => {
  // const OBJ1 = {
  //   id: obj1.id,
  //   title: obj1.title,
  //   description: obj1.description,
  //   image: obj1.image,
  //   price: obj1.price,
  // };
  // const OBJ2 = {
  //   id: obj2.id,
  //   title: obj2.title,
  //   description: obj2.description,
  //   image: obj2.image,
  //   price: obj2.price,
  // };
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
  }

  static getDerivedStateFromProps(props, state) {
    if (equal(props.propsItem, state)) {
      return getProductState(props);
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.state = getProductState(props);

    this.handleChange = this.handleChange.bind(this);
    this.edit = this.edit.bind(this);
  }

  handleChange(name) {
    return (event) => {
      this.setState({ [name]: event.target.value });
    };
  }

  edit() {
    const body = JSON.stringify({
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      image: '',
    });
    // const bodyJ = {
    //   title: 'Phone 8 16Gb',
    //   description: 'Екран Retina 4',
    //   image: '',
    //   price: 8457,
    // };
    // const body = JSON.stringify(bodyJ);
    console.log('bodyJson', body);
    fetch(`/api/v1/products/${this.state.id}`, {
      method: 'PATCH',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch((error) => {
        console.log('Request failed', error);
      });

    //---------------
    // const body = JSON.stringify({
    //   title: this.state.title,
    //   description: this.state.description,
    //   price: this.state.price,
    //   image: '',
    // });
    // fetch(`/admin/products/${this.state.id}`, {
    //   method: 'POST',
    //   body,
    // });
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
            {/* {console.log('props.propsItem', props.propsItem)} */}
            {console.log('state', this.state)}
            <br />
            <button onMouseDown={this.edit} onClick={closeModal} >
              {/* <button onClick={this.create} > */}
              Create
            </button>
          </div>
        }
      </div>
    );
  }
}
export default AddModal;
