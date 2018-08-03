import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AdminItemList from '../../components/ItemContainers/AdminItemList/AdminItemList';

const Admin = (props) => {
  return (
    <div>
      <Header />
      <p>Admin</p>
      <AdminItemList products={props.products} />
      Test string
      {console.log('props', props.products)}
      <Footer />
    </div>
  );
};

export default Admin;


// import React, { Component } from 'react';
//
// import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';
// import PageAddItem from './components/PageAddItem/PageAddItem';
//
// class Admin extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       addItem: false,
//     };
//     this.pageAddItem = this.pageAddItem.bind(this);
//   }
//
//   pageAddItem() {
//     this.setState({
//       addItem: true,
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <Header addItem={this.pageAddItem} />
//         <p>Admin</p>
//         {/* {this.state.addItem
//           ? <PageAddItem />
//           : <NoAdd />
//         } */}
//         <PageAddItem />
//
//         <Footer />
//       </div>
//     );
//   }
// }
// export default Admin;
