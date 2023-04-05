import { UseFormRegister } from 'react-hook-form';
import { FieldError } from 'react-hook-form/dist/types';
import { IFormValues } from '../../form/type';

type TOptions = {
  label: string;
  defaultValue: string;
  genres: string[];
  error?: FieldError;
  register: UseFormRegister<IFormValues>;
  genre: keyof IFormValues;
};

export default TOptions;
