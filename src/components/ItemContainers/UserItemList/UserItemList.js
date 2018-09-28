import React from 'react';
import T from 'prop-types';
import ProductItem from '../../Item/ProductItem/ProductItem';

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
    <div>
      <ul>{container}</ul>
    </div>
  );
};

UserItemList.propTypes = {
  // products: T.array,
  navigateToItem: T.func,
};

export default UserItemList;
