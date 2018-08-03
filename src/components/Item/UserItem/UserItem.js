import React from 'react';
import s from './UserItem.module.css';


const UserItem = props => (
  <div className={s.itemContainer}>
    <div className={s.image}>
      <img className={s.itemImg} src={props.img} alt="img" width="200px" />
    </div>
    <div className={s.title}>
      {props.title}
    </div>
    <div className={s.price}>
      {props.price}
    </div>
    <div className={s.btn}>
      <button className={s.addBtn}>
         Add to card
      </button>
    </div>
  </div>
);


export default UserItem;
