import React from 'react';
import ICheckbox from './type';
import style from './style.module.scss';

export const Checkbox: React.FC<ICheckbox> = ({ register, label, error, name }) => {
  return (
    <div className={style.confirm}>
      <div>
        <input className={style.checkbox} type="checkbox" {...register(name)} />
        <label className={style.checkbox__label}>{label}</label>
      </div>
      <span className="error">{error?.message}</span>
    </div>
  );
};
