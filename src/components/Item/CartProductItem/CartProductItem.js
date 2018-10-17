import React from 'react';
import T from 'prop-types';

import s from './CartProductItem.module.css';

const AdminItem = ({
  image,
  title,
  navigateToItem,
  id,
  price,
  onRemoveFromCart,
  item,
  // isOpen,
}) => (
  <div className={s.itemContainer}>
    <div onClick={() => navigateToItem(id)}>
      <div className={s.image}>
        <img className={s.itemImg} src={image} alt="img" />
      </div>
      <div className={s.title}>{title}</div>
    </div>
    <div className={s.input}>
      <input type="number" className={s.changeInput} />
    </div>
    <div className={s.priceContainer}>
      <div className={s.price}>{`${price} грн`}</div>
    </div>
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
  item: T.object,
  title: T.string,
  image: T.string,
  navigateToItem: T.func,
  id: T.string,
  price: T.string,
  onRemoveFromCart: T.func,
};

export default AdminItem;
