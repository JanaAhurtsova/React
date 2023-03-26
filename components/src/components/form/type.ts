import ICardForm from '../cardForm/type';

interface IFormProps {
  addCard: (card: ICardForm) => void;
}

interface IFormState {
  errors: Partial<TError>;
}

type TError = {
  name: string;
  img: string;
  date: string;
  genre: string;
  artist: string;
  checkbox: string;
};

export { IFormProps, IFormState };
