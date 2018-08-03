import React from 'react';
import AdminItem from '../../Item/AdminItem/AdminItem';

const AdminItemContainer = (props) => {
  let container = props.products.map((item) => {
    return (
      <AdminItem
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

export default AdminItemContainer;
