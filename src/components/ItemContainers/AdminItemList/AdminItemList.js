import React from 'react';
import AdminProductItem from '../../Item/AdminProductItem/AdminProductItem';

const AdminItemList = ({
  products,
}) => {
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div>
        No items
      </div>
    );
  }

  let items = products.map((item) => {
    return (
      <AdminProductItem
        id={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
        price={item.price}
      />
    );
  });
  return (
    <div>
      <ul>
        {items}
      </ul>
    </div>
  );
};

export default AdminItemList;
