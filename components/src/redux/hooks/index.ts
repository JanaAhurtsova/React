import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { search } from '../reducers/main';
import { SetStateAction, useEffect, useCallback } from 'react';
import ICardForm from '../../components/cardForm/type';
import { addCard } from '../reducers/form';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface ISearchDispatch {
  setValue: (value: SetStateAction<string>) => void;
}

export const useSearchEvent = ({ setValue }: ISearchDispatch) => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.searchValue);

  useEffect(() => {
    setValue(searchValue);
  }, [searchValue, setValue]);

  return {
    search: (value: string) => {
      dispatch(search(value));
    },
  };
};

export const useFormEvent = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (card: ICardForm) => {
      dispatch(addCard(card));
    },
    [dispatch]
  );
};

export const useGetSearchValue = () => {
  return useAppSelector((state) => state.search.searchValue);
};

export const useGetCardsForm = () => {
  return useAppSelector((state) => state.form.cards);
};
