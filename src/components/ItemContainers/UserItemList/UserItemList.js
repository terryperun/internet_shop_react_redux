import React from 'react';
import T from 'prop-types';
import ProductItem from '../../Item/ProductItem/ProductItem';
import s from './UserItemList.module.css';

const UserItemList = ({ products, navigateToItem, onAddInCart }) => {
  const container = products.map(item => (
    <ProductItem
      id={item.id}
      title={item.title}
      description={item.description}
      image={item.image}
      price={item.price}
      navigateToItem={navigateToItem}
      item={item}
      onAddInCart={onAddInCart}
    />
  ));
  return (
    <div className={s.itemsContainer}>
      <ul className={s.ul}>{container}</ul>
    </div>
  );
};

UserItemList.propTypes = {
  products: T.array,
  navigateToItem: T.func,
  onAddInCart: T.func,
};

export default UserItemList;
