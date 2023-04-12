import React, { useState } from 'react';
import { Genre } from './genre';
import IData from './type';
import { Cover } from './cover';
import style from './style.module.scss';
import { ModalCard } from '../modal/modalCard';
import { createPortal } from 'react-dom';
import { getCard } from '../../managers/API/requests';
import { IModalCard } from '../modal/modalCard/type';

export const Card: React.FC<IData> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [cardModal, setCardModal] = useState<IModalCard['card']>(props);
  const [isLoading, setLoading] = useState(true);

  const handleClick = async () => {
    setLoading(true);
    setShowModal(true);
    const result = await getCard(props.id);
    setCardModal(result);
    setLoading(false);
  };

  return (
    <>
      <li className={style.card} id={'card' + String(props.id)} onClick={handleClick}>
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
        createPortal(
          <ModalCard card={cardModal} onClose={() => setShowModal(false)} isLoading={isLoading} />,
          document.body
        )}
    </>
  );
};
