import { UseFormRegister } from 'react-hook-form';
import { FieldError } from 'react-hook-form/dist/types';
import { IFormValues } from '../../form/type';

export default interface IInputField {
  label: string;
  type: string;
  name: keyof IFormValues;
  placeholder?: string;
  register: UseFormRegister<IFormValues>;
  error?: FieldError;
  accept?: string;
}
