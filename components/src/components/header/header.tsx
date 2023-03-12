import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './style.module.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <nav className={style.navigation}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </nav>
      </header>
    );
  }
}
