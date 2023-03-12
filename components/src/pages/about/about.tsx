import React from 'react';
import style from './style.module.css';
const GitHubLogo = new URL('../../../public/github.svg', import.meta.url).href;

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>About Us</h1>
        <h2>
          MUSIC COUNTS.<br></br>
          TRACK, FIND AND REDISCOVER MUSIC.
        </h2>
        <p>
          {
            "It's easy to find the right music for every moment – on your phone, your computer, your tablet and more. So whether you're behind the wheel, working out, partying or relaxing, the right music is always at your fingertips."
          }
        </p>
        <div className={style.contacts}>
          <h3>Contact:</h3>
          <a className={style.contact__link} href="https://github.com/JanaAhurtsova">
            <img className={style.contact__icon} src={GitHubLogo} alt="GitHub Logo" />
            Jana Ahurtsova
          </a>
        </div>
      </div>
    );
  }
}
