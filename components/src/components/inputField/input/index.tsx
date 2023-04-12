import React from 'react';
import IInputField from './type';
import style from './style.module.scss';

export const InputField: React.FC<IInputField> = ({
  name,
  placeholder,
  register,
  type,
  label,
  accept,
  error,
}) => {
  return (
    <div className={style.input__wrapper}>
      <label>{label}</label>
      <input
        className={style.input}
        type={type}
        placeholder={placeholder}
        accept={accept}
        {...register(name)}
      />
      <span className="error">{error?.message}</span>
    </div>
  );
};
