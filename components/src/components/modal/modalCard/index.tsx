import { useGetCardQuery } from '../../../redux/reducers/API';
import { Genre } from '../../card/genre';
import { Loader } from '../../loader';
import style from './style.module.scss';
import { IModalCard } from './type';

export const ModalCard: React.FC<IModalCard> = ({ card, onClose }) => {
  const { data = card, isError, isLoading } = useGetCardQuery(card.id);

  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <span className={style.close__button} id="close" onClick={onClose}></span>
        {isError && <span>Oops... Something went wrong</span>}
        {isLoading ? (
          <Loader />
        ) : (
          <div className={style.content}>
            <img className={style.cover} src={data.cover} alt={data.album} />
            <div className={style.card__description}>
              <h3 className={style.artist}>{data.artist}</h3>
              <h4 className={style.album}>{data.album}</h4>
              <div className={style.info}>
                <span>{data.released}</span>
                <span>{data.location}</span>
                <span>{data.label}</span>
              </div>
              <div className={style.genres}>
                {data.genre.map((genre) => {
                  return <Genre genre={genre} key={data.album + genre} />;
                })}
              </div>
            </div>
            <p className={style.profile}>{data.profile}</p>
          </div>
        )}
      </div>
    </div>
  );
};
