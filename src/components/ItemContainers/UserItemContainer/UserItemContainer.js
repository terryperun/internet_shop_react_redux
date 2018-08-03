import React from 'react';
import UserItem from '../../Item/UserItem/UserItem';

const UserItemContainer = (props) => {
  let container = props.products.map((item) => {
    return (
      <UserItem
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

export default UserItemContainer;
