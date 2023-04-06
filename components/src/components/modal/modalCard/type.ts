import IData from '../../card/type';

export interface IModalCard {
  card: IData;
  onClose: () => void;
}
