import { FieldError, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../form/type';

export default interface ICheckbox {
  label: string;
  name: keyof IFormValues;
  register: UseFormRegister<IFormValues>;
  error?: FieldError;
}
