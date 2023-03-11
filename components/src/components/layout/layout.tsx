import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import RssLogo from '../../assets/rs_school_js.svg';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </nav>
        </header>
        <Outlet />
        <footer>
          <a href="https://rs.school/react/">
            <img src={RssLogo} alt="RSS Logo" />
          </a>
          <h3>©2023</h3>
        </footer>
      </>
    );
  }
}
