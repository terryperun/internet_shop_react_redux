import React from 'react';
import T from 'prop-types';
import CartProductItem from '../../Item/CartProductItem/CartProductItem';

const CartItemList = ({
  products,
  navigateToItem,
  onRemoveFromCart,
  // isOpen,
  createNewItem,
}) => {
  const container = [...products]
    .reverse()
    .map(item => (
      <CartProductItem
        id={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
        price={item.price}
        navigateToItem={navigateToItem}
        item={item}
        onRemoveFromCart={onRemoveFromCart}
      />
    ));
  return (
    <div>
      <ul>{container}</ul>
    </div>
  );
};

CartItemList.propTypes = {
  // products: T.array,
  navigateToItem: T.func,
};

export default CartItemList;
