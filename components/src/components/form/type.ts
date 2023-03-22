import ICardForm from '../cardForm/type';

interface IFormProps {
  addCard: (card: ICardForm) => void;
}

interface IFormState {
  isSubmitting: boolean;
}

export { IFormProps, IFormState };
