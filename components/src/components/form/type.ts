import ICardForm from '../cardForm/type';

interface IFormProps {
  addCard: (card: ICardForm) => void;
  modalState: (value: React.SetStateAction<boolean>) => void;
}

interface IFormValues {
  name: string;
  file: FileList;
  release: string;
  genre: string;
  artist: string;
  confirm: boolean;
}

type TError = {
  [PropertyKey in keyof IFormValues]: {
    type: string;
    message: string;
  };
};

export { IFormProps, TError, IFormValues };
