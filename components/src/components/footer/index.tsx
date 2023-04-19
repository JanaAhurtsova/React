import React from 'react';
import style from './style.module.scss';
import RssLogo from '../../assets/rs_school_js.svg';

export const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <a className={style.rss__link} href="https://rs.school/react/">
        <img className={style.rss} src={RssLogo} alt="RSS Logo" />
      </a>
      <h3>©2023</h3>
    </footer>
  );
};
