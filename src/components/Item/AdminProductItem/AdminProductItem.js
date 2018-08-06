import React from 'react';
import s from './AdminProductItem.module.css';


const AdminItem = ({
  image,
  title,
}) => (
  <div className={s.itemContainer}>
    <div className={s.image}>
      <img className={s.itemImg} src={image} alt="img" width="100px" />
    </div>
    <div className={s.title}>
      {title}
    </div>
    <div className={s.btn}>
      <button className={s.editBtn}>
         Edit
      </button>
      <button className={s.removeBtn}>
         Remove
      </button>
    </div>

  </div>
);


export default AdminItem;
