import { SetStateAction } from 'react';

export default interface ISearch {
  setState: (value: SetStateAction<string>) => void;
}
