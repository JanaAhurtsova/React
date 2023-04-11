import { UseFormRegister } from 'react-hook-form';
import { FieldError } from 'react-hook-form/dist/types';
import { IFormValues } from '../../form/type';

type TOptions = {
  label: string;
  defaultValue: string;
  options: string[];
  error?: FieldError;
  register: UseFormRegister<IFormValues>;
  select: keyof IFormValues;
};

export default TOptions;
