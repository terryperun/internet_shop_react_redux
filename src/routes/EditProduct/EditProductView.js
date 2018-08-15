// import React, { Component } from 'react';
// import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';
// import OpenedItem from '../../components/Item/OpenedItem/OpenedItem';
//
// const EditProduct = (props) => {
//   console.log('wooooork', props.params.id);
//   const { params } = props;
//   return (
//     <div>
//       <Header />
//       <p>EditProduct</p>
//       <OpenedItem id={props.params.id} />
//       {params.id}
//       <Footer />
//     </div>
//   );
// };
// export default EditProduct;

import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import OpenedItem from '../../components/ItemContainers/OpenedItem/OpenedItem';

class EditProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      isLading: false,
    };
  }

  async componentDidMount() {
    this.setState({ isLading: true });
    const productJson = await fetch(`/api/v1/products/${this.props.params.id}`);
    const product = await productJson.json();
    this.setState({ product, isLading: false });
  }

  render() {
    const content = this.state.isLading
      ? <div>..Loading..</div>
      : <OpenedItem product={this.state.product} />;
    return (
      <div>
        <Header />
        {content}
        <Footer />
      </div>
    );
  }
}
export default EditProduct;
