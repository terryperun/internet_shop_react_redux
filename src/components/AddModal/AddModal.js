import React, { Component } from 'react';
import T from 'prop-types';


// const equal = (obj1, obj2) => {
//   if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
//     return true;
//   }
//   return false;
// };

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
    onCreate: T.func,
    closeQuick: T.closeQuick,
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
  }

  handleChange(name) {
    return (event) => {
      this.setState({ [name]: event.target.value });
    };
  }

  render() {
    const {
      closeModal,
      loadForm,
      onCreate,
      closeQuick,
      createNewItem,
    } = this.props;

    const valueBtn = createNewItem && 'Add';

    if (loadForm) {
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
          <button onMouseDown={() => onCreate(this.state)} onClick={closeModal} >
            {valueBtn || 'Edit'}
          </button>
          <button onClick={closeQuick}>Close Modal</button>
        </div>

      </div>
    );
  }
}
export default AddModal;
