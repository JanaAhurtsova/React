import React, { useState, useEffect } from 'react';
import { Card } from '../card';
import style from './style.module.scss';
import { Loader } from '../loader';
import { useSearchCardsQuery } from '../../redux/reducers/API';
import { useAppSelector } from '../../redux/hooks';

export const CardList: React.FC = () => {
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const [value, setValue] = useState('');
  const { data = [], isError, isFetching } = useSearchCardsQuery(value);

  useEffect(() => {
    setValue(searchValue);
  }, [searchValue]);

  return (
    <>
      {isError && <span>Oops... Something went wrong</span>}
      {isFetching ? (
        <Loader />
      ) : (
        <ul className={style.card__list}>
          {!isError && !data.length && <div className={style.no_cards}>No cards found</div>}
          {data.map((card) => {
            return <Card {...card} key={card.id} />;
          })}
        </ul>
      )}
    </>
  );
};
