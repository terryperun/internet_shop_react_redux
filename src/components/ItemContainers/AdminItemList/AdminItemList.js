import React from 'react';
import AdminProductItem from '../../Item/AdminProductItem/AdminProductItem';

const AdminItemList = (props) => {
  let container = props.products.map((item) => {
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
        {container}
      </ul>
    </div>
  );
};

export default AdminItemList;
