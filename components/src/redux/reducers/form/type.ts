import ICardForm from '../../../components/cardForm/type';

export interface IFormState {
  cards: ICardForm[];
  isLoading: boolean;
  cardInfo: ICardForm;
}
