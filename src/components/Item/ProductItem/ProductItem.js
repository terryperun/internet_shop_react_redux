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
  <li className={s.itemContainer}>
    <div onClick={() => navigateToItem(id)}>
      <div className={s.image}>
        <img className={s.itemImg} src={image} alt="img" />
      </div>
      <div className={s.title}>
        <div className={s.titleText}>{title}</div>
      </div>
      <div className={s.price}>{price}</div>
    </div>
    <div className={s.btn}>
      <button className={s.addBtn} onClick={() => onAddInCart(item)}>
        Add to cart
      </button>
    </div>
  </li>
);

export default UserItem;
