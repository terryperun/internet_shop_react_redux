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
    <div className={s.mainInfo} onClick={() => navigateToItem(id)}>
      <div className={s.imageContainer}>
        <img className={s.Img} src={image} alt="img" />
      </div>
      <div className={s.titleContainer}>
        <div className={s.titleText}>{title}</div>
      </div>
      <div className={s.priceContainer}>
        <div>
          {price}
          грн
        </div>
      </div>
    </div>
    <div className={s.btn}>
      <button className={s.addBtn} onClick={() => onAddInCart(item)}>
        Add to cart
      </button>
    </div>
    {/* <hr className={s.hr} /> */}
  </li>
);

export default UserItem;
