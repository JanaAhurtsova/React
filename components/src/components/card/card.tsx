import React from 'react';
import Genre from './genre';
import IData from './type';
import Cover from './cover';
import style from './style.module.scss';

export default class Card extends React.Component<IData> {
  render() {
    return (
      <li className={style.card} key={String(this.props.id)}>
        <Cover cover={this.props.cover} album={this.props.album} />
        <div className={style.card__description}>
          <h3>{this.props.artist}</h3>
          <h4>{this.props.album}</h4>
          <div className={style.info}>
            <span>{this.props.released}</span>
            <span>{this.props.location}</span>
            <span>{this.props.label}</span>
          </div>
          <div className={style.genres}>
            {this.props.genre.map((genre) => {
              return <Genre genre={genre} key={this.props.album + genre} />;
            })}
          </div>
        </div>
      </li>
    );
  }
}
