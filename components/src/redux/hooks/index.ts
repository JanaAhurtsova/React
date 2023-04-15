import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { search } from '../reducers/main';
import { SetStateAction, useEffect } from 'react';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface ISearchDispatch {
  value: string;
  setValue: (value: SetStateAction<string>) => void;
}

export const useSearchDispatch = ({ value, setValue }: ISearchDispatch) => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.searchValue);

  useEffect(() => {
    setValue(searchValue);
  }, [searchValue, setValue]);

  return {
    search: () => {
      dispatch(search(value));
    },
  };
};
