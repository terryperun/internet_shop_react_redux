import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import UserItemContainer from '../../components/ItemContainers/UserItemContainer/UserItemContainer';

const Store = (props) => {
  return (
    <div>
      <Header />
      <UserItemContainer products={props.products} />
      <p>Store</p>

      <Footer />
    </div>
  )};

export default Store;
