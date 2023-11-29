import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './style.module.scss';

type THeaderProps = {
  title: string;
};

export default class Header extends React.Component<THeaderProps> {
  render() {
    return (
      <header className={style.header}>
        <div className={style.header__wrapper}>
          <h2>{this.props.title}</h2>
          <nav className={style.navigation}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/form">Form</NavLink>
          </nav>
        </div>
      </header>
    );
  }
}
