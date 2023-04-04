import { ChangeEvent } from 'react';

export default interface ISearch {
  onSubmit: (event: ChangeEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
