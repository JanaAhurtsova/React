import { NavLink } from 'react-router-dom';
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </nav>
      </header>
    );
  }
}
