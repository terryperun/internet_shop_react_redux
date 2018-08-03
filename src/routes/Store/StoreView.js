import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import UserItemList from '../../components/ItemContainers/UserItemList/UserItemList';

const Store = (props) => {
  return (
    <div>
      <Header />
      <UserItemList products={props.products} />
      <p>Store</p>

      <Footer />
    </div>
  )};

export default Store;
