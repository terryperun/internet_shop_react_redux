import React from 'react';
import AdminProductItem from '../../Item/AdminProductItem/AdminProductItem';

const AdminItemList = ({
  products,
  navigateToItem,
  handleEdit,
  deleteItem,
}) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No items</div>;
  }
  const items = products.map(item => (
    <AdminProductItem
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      image={item.image}
      price={item.price}
      navigateToItem={navigateToItem}
      handleEdit={handleEdit}
      propsItem={item}
      deleteItem={deleteItem}
    />
  ));
  return (
    <div>
      <ul>{items}</ul>
      {console.log('iddddddddddddddddddd', products)}
    </div>
  );
};

export default AdminItemList;
