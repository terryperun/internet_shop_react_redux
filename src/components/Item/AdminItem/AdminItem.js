import React from 'react';
import s from './AdminItem.module.css';


const AdminItem = props => (
  <div className={s.itemContainer}>
    <div className={s.image}>
      <img className={s.itemImg} src={props.img} alt="img" width="100px" />
    </div>
    <div className={s.title}>
      {props.title}
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
