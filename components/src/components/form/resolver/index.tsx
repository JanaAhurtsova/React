import { Resolver } from 'react-hook-form';
import { errorsText } from '../../../data/errors';
import { IFormValues, TError } from '../type';
import { genres } from '../../../data/genres';

export const resolver: Resolver<IFormValues> = async (values) => {
  const handleValues = (values: IFormValues) => {
    const file = values.file ? values.file[0] : null;
    const image = file ? URL.createObjectURL(file) : '';

    return { ...values, image };
  };

  const generateError = (message: string) => ({
    type: 'required',
    message,
  });

  const handleError = (values: IFormValues) => {
    const errors = {} as TError;
    const file = values.file.length ? values.file[0] : null;

    !values.name.trim() ? (errors.name = generateError(errorsText.name)) : '';
    !values.release ? (errors.release = generateError(errorsText.date)) : '';
    values.release && Date.parse(values.release) > Date.now()
      ? (errors.release = generateError(errorsText.dateInvalid))
      : '';
    !values.artist ? (errors.artist = generateError(errorsText.artist)) : '';
    values.genre === genres[0] ? (errors.genre = generateError(errorsText.genre)) : '';
    !values.confirm ? (errors.confirm = generateError(errorsText.checkbox)) : '';
    !file ? (errors.file = generateError(errorsText.file)) : '';
    file && !file.type.startsWith('image/')
      ? (errors.file = generateError(errorsText.fileFormat))
      : '';

    return errors;
  };

  return {
    values: handleValues(values),
    errors: handleError(values),
  };
};
