import React from 'react';
import style from './style.module.scss';

export default class Modal extends React.Component {
  render() {
    return (
      <div className={style.overlay}>
        <div className={style.modal}>
          <h3>The data has been saved successfully</h3>
        </div>
      </div>
    );
  }
}
