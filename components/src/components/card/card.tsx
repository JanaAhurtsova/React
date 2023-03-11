import React from 'react';
import IData from './type';

export default class Card extends React.Component<IData> {
  render() {
    return (
      <div className="card" id={String(this.props.id)}>
        <img src={this.props.cover} alt={this.props.album + 'image'} />
        <h3>{this.props.artist}</h3>
        <h4>{this.props.album}</h4>
        <div>
          <span>{this.props.released}</span>
          <span>{this.props.location}</span>
          <span>{this.props.label}</span>
        </div>
        <div>
          <>
            {this.props.genre.map((genre) => {
              <span>{genre}</span>;
            })}
          </>
        </div>
      </div>
    );
  }
}
