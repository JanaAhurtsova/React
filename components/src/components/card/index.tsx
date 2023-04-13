import React, { useState } from 'react';
import { Genre } from './genre';
import IData from './type';
import { Cover } from './cover';
import style from './style.module.scss';
import { ModalCard } from '../modal/modalCard';
import { createPortal } from 'react-dom';

export const Card: React.FC<IData> = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <li
        className={style.card}
        id={`card${props.id}`}
        role={`card${props.id}`}
        onClick={() => setShowModal(true)}
      >
        <Cover cover={props.cover} album={props.album} />
        <div className={style.card__description}>
          <h3>{props.artist}</h3>
          <h4>{props.album}</h4>
          <div className={style.info}>
            <span>{props.released}</span>
            <span>{props.location}</span>
            <span>{props.label}</span>
          </div>
          <div className={style.genres}>
            {props.genre.map((item) => {
              return <Genre genre={item} key={props.album + item} />;
            })}
          </div>
        </div>
      </li>
      {showModal &&
        createPortal(<ModalCard card={props} onClose={() => setShowModal(false)} />, document.body)}
    </>
  );
};
