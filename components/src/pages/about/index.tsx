import { Header } from '../../components/header';
import React from 'react';
import style from './style.module.scss';
import GitHubLogo from '../../assets/github.svg';

export const AboutPage: React.FC = () => {
  return (
    <>
      <Header title={'About Us'} />
      <div className="container">
        <h1>About Us</h1>
        <h2>
          MUSIC COUNTS.<br></br>
          <span className="active">TRACK</span>, <span className="active">FIND</span> AND{' '}
          <span className="active">REDISCOVER</span> MUSIC.
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
    </>
  );
};
