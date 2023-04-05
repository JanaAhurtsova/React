import { UseFormRegister, FieldError } from 'react-hook-form/dist/types';
import { IFormValues } from '../../form/type';

export default interface IRadio {
  name: keyof IFormValues;
  artists: string[];
  register: UseFormRegister<IFormValues>;
  error?: FieldError;
}
