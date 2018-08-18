import React from 'react';
import s from './AdminProductItem.module.css';


const AdminItem = ({
  image,
  title,
  clickItem,
  id,
  clickEdit,
}) => (
  <div className={s.itemContainer}>
    <div onClick={evt => clickItem(evt, id)}>
      <div className={s.image}>
        <img className={s.itemImg} src={image} alt="img" width="100px" />
      </div>
      <div className={s.title}>
        {title}
      </div>
    </div>
    {/* </Link> */}
    <div className={s.btn}>
      <button
        className={s.editBtn}
        onClick={evt => clickEdit(evt, id)}
      >
         Edit
      </button>
      <button
        className={s.removeBtn}
        onClick={() => console.log('delete')}
      >
         Remove
      </button>
    </div>

  </div>
);


export default AdminItem;
