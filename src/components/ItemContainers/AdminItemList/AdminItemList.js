import React from 'react';
import AdminProductItem from '../../Item/AdminProductItem/AdminProductItem';

const AdminItemList = ({
  products,
  clickItem,
  handleEdit,
}) => {
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div>
        No items
      </div>
    );
  }

  const items = products.map(item => (
    <AdminProductItem
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      image={item.image}
      price={item.price}
      clickItem={clickItem}
      handleEdit={handleEdit}
      propsItem={item}
    />
  ));
  return (
    <div>
      <ul>
        {items}
      </ul>
    </div>
  );
};

export default AdminItemList;
