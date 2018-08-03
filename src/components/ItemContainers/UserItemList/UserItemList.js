import React from 'react';
import ProductItem from '../../Item/ProductItem/ProductItem';

const UserItemList = (props) => {
  let container = props.products.map((item) => {
    return (
      <ProductItem
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

export default UserItemList;
