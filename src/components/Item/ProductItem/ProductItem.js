import React from 'react';
import s from './ProductItem.module.css';

const UserItem = ({
  id,
  image,
  title,
  price,
  navigateToItem,
  onAddInCart,
  item,
}) => (
  <div className={s.itemContainer}>
    <div onClick={() => navigateToItem(id)}>
      <div className={s.image}>
        <img
          className={s.itemImg}
          src={image}
          alt="img"
          width="200px"
        />
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.price}>{price}</div>
    </div>
    <div className={s.btn}>
      <button className={s.addBtn} onClick={() => onAddInCart(item)}>
        Add to cart
      </button>
    </div>
  </div>
);

export default UserItem;
