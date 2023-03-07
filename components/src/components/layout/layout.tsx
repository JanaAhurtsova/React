import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import RssLogo from '../../assets/rs_school_js.svg';
import GitHubLogo from '../../assets/github.svg';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
        </header>
        <main className="container">
          <Outlet />
        </main>
        <footer>
          <a href="https://rs.school/react/">
            <img src={RssLogo} alt="RSS Logo" />
          </a>
          <h3>2023</h3>
          <a href="https://github.com/JanaAhurtsova">
            <img src={GitHubLogo} alt="GitHub Logo" />
          </a>
        </footer>
      </>
    );
  }
}
