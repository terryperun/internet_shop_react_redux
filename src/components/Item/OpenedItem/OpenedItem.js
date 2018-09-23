import React from 'react';
import s from './OpenedItem.module.css';

const OpenedItem = ({
  image,
  title,
  description,
  price,
  id,
}) => (
  <div>
    <div className={s.containerDescription}>
      <div className={s.image}>
        <img className={s.itemImg} src={image} alt="img" width="200px" />
      </div>
      <div className={s.title}>
        {title}
      </div>
      <div className={s.description}>
        {description}
      </div>
    </div>
    <div className={s.buy}>
      <div className={s.price}>
        Price: {price}
      </div>
      <div className={s.btn}>
        <button className={s.addBtn}>
           Add to card
        </button>
      </div>
    </div>
  </div>
);

export default OpenedItem;