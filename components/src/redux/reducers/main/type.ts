import IData from '../../../components/card/type';

export interface ICardsState {
  cards: IData[];
  isLoading: boolean;
  error: string;
  searchValue: string;
}
