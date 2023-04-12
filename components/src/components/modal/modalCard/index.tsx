import { Genre } from '../../card/genre';
import { Loader } from '../../loader';
import style from './style.module.scss';
import { IModalCard } from './type';

export const ModalCard: React.FC<IModalCard> = ({ card, onClose, isLoading }) => {
  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <span className={style.close__button} onClick={onClose}></span>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={style.content}>
            <img className={style.cover} src={card.cover} alt={card.album} />
            <div className={style.card__description}>
              <h3 className={style.artist}>{card.artist}</h3>
              <h4 className={style.album}>{card.album}</h4>
              <div className={style.info}>
                <span>{card.released}</span>
                <span>{card.location}</span>
                <span>{card.label}</span>
              </div>
              <div className={style.genres}>
                {card.genre.map((genre) => {
                  return <Genre genre={genre} key={card.album + genre} />;
                })}
              </div>
            </div>
            <p className={style.profile}>{card.profile}</p>
          </div>
        )}
      </div>
    </div>
  );
};
