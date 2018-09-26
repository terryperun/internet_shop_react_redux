import React from 'react';
import T from 'prop-types';
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
        <img
          className={s.itemImg}
          src={image}
          alt="img"
          width="100px"
        />
      </div>
      <div className={s.title}>{title}</div>
    </div>
    <div className={s.btn}>
      <button
        className={s.editBtn}
        onClick={() => handleEdit(propsItem)}
      >
        Edit
      </button>
      <button className={s.removeBtn} onClick={() => deleteItem(id)}>
        Remove
      </button>
    </div>
  </div>
);

AdminItem.propTypes = {
  propsItem: T.object,
  title: T.string,
  image: T.string,
  navigateToItem: T.func,
  id: T.string,
  handleEdit: T.func,
  deleteItem: T.func,
};

export default AdminItem;
