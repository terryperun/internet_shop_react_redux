import React, { Component } from 'react';
import T from 'prop-types';

const getProductState = props =>
  props.propsItem || {
    title: '',
    description: '',
    image: '',
    price: '0',
  };

class AddModal extends Component {
  static propTypes = {
    propsItem: T.object, // eslint-disable-line
    closeModal: T.func,
    isLoading: T.bool.isRequired,
    createNewItem: T.bool,
    onCreate: T.func,
    onUpdate: T.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      ...getProductState(props),
      createNewItem: this.props.createNewItem || false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    return (event) => {
      this.setState({ [name]: event.target.value });
    };
  }

  render() {
    const {
      closeModal,
      isLoading,
      createNewItem,
      onCreate,
      onUpdate,
    } = this.props;

    const valueBtn = createNewItem && 'Add';
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div>
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
          <button
            onClick={() => {
              if (createNewItem) {
                onCreate(this.state);
              } else {
                onUpdate(this.state);
              }
            }}
          >
            {valueBtn || 'Edit'}
          </button>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </div>
    );
  }
}
export default AddModal;
