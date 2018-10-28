import React from 'react';
import s from './Loading.module.css';

const Loading = () => (
  <div className={s.container}>
    <div className={s.loading}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loading;
