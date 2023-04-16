import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { search } from '../reducers/main';
import { SetStateAction, useEffect, useCallback } from 'react';
import ICardForm from '../../components/cardForm/type';
import { addCard } from '../reducers/form';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface ISearchDispatch {
  setValue: (value: SetStateAction<string>) => void;
}

export const useSearchEvent = ({ setValue }: ISearchDispatch) => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.searchValue);

  useEffect(() => {
    setValue(searchValue);
  }, [searchValue, setValue]);

  return useCallback(
    (value: string) => {
      dispatch(search(value));
    },
    [dispatch]
  );
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
