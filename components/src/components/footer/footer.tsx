import React from 'react';
import style from './style.module.scss';

const RssLogo = new URL('../../../public/rs_school_js.svg', import.meta.url).href;

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={style.footer}>
        <a className={style.rss__link} href="https://rs.school/react/">
          <img className={style.rss} src={RssLogo} alt="RSS Logo" />
        </a>
        <h3>©2023</h3>
      </footer>
    );
  }
}
