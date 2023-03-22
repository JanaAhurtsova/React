import ICardForm from '../cardForm/type';

export default interface IForm {
  addCard: (card: ICardForm) => void;
}
