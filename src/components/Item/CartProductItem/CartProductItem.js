import React from 'react';
import T from 'prop-types';

import s from './CartProductItem.module.css';

const AdminItem = ({
  image,
  title,
  navigateToItem,
  id,
  price,
  handleEdit,
  // deleteItem,
  propsItem,
  onRemoveFromCart,
  item,
}) => (
  <div className={s.itemContainer}>
    <div onClick={evt => navigateToItem(evt, id)}>
      <div className={s.image}>
        <img
          className={s.itemImg}
          src={image}
          alt="img"
          width="100px"
        />
      </div>
      <div className={s.title}>{title}</div>
    </div>
    <div className={s.changeInput}>
      <input type="number" />
    </div>
    <div className={s.price}>{`${price} грн`}</div>
    <div className={s.btn}>
      <button
        className={s.removeBtn}
        onClick={() => onRemoveFromCart(item)}
      >
        x
      </button>
    </div>
  </div>
);

AdminItem.propTypes = {
  propsItem: T.object,
  title: T.string,
  image: T.string,
  navigateToItem: T.func,
  id: T.string,
  price: T.string,
  handleEdit: T.func,
  deleteItem: T.func,
};

export default AdminItem;
