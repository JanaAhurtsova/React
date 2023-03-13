import { NavLink } from 'react-router-dom';
import React, { MouseEvent } from 'react';
import style from './style.module.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <div className={style.header__wrapper}>
          <nav className={style.navigation}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </nav>
        </div>
      </header>
    );
  }
}
