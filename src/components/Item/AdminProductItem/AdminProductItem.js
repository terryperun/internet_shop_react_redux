import React from 'react';
import s from './AdminProductItem.module.css';


const AdminItem = ({
  image,
  title,
  navigateToItem,
  id,
  handleEdit,
  deleteItem,
  propsItem,
}) => (
  <div className={s.itemContainer}>
    <div onClick={evt => navigateToItem(evt, id)}>
      <div className={s.image}>
        <img className={s.itemImg} src={image} alt="img" width="100px" />
      </div>
      <div className={s.title}>
        {title}
      </div>
    </div>
    <div className={s.btn}>
      <button
        className={s.editBtn}
        onClick={evt => handleEdit(propsItem)}
      >
        {/* {console.log('props', this.props.title)} */}
         Edit
      </button>
      <button
        className={s.removeBtn}
        onClick={evt => deleteItem(id)}
      >
         Remove
      </button>
    </div>

  </div>
);


export default AdminItem;
