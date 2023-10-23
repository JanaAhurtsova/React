import React from 'react';
import TOptions from './type';
import style from './style.module.scss';
import { SelectElement } from '../../../managers/hiddenElement';

export const Select: React.FC<TOptions> = ({
  label,
  defaultValue,
  select,
  register,
  options,
  error,
}) => {
  return (
    <div className={style.select__wrapper}>
      <label>{label}</label>
      <select className={style.select} defaultValue={defaultValue} {...register(select)}>
        {options.map((item) => {
          return (
            <option key={item} value={item} hidden={item === SelectElement}>
              {item}
            </option>
          );
        })}
      </select>
      <span className="error">{error?.message}</span>
    </div>
  );
};
