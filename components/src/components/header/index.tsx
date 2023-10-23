import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './style.module.scss';
import { THeaderProps } from './type';

export const Header: React.FC<THeaderProps> = (props: THeaderProps) => {
  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <h2>{props.title}</h2>
        <nav className={style.navigation}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/form">Form</NavLink>
        </nav>
      </div>
    </header>
  );
};
