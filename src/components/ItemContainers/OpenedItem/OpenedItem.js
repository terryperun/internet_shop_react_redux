import React from 'react';
import OpenedItem from '../../Item/OpenedItem/OpenedItem';

const AdminItemList = ({ product, navigateToItem }) => {
  if (!Array.isArray(product) || product.length === 0) {
    return <div>No items</div>;
  }
  const items = product.map(item => (
    <OpenedItem
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      image={item.image}
      price={item.price}
      navigateToItem={navigateToItem}
    />
  ));
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default AdminItemList;
