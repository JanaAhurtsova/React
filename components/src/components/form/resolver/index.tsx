import { Resolver } from 'react-hook-form';
import { errorsText } from '../../../data/errors';
import { IFormValues, TError } from '../type';
import { SelectElement } from '../../../managers/hiddenElement';
import { Type } from './enum';

export const resolver: Resolver<IFormValues> = async (values) => {
  const handleValues = (values: IFormValues) => {
    const file = values?.file?.[0];
    const image = file ? URL.createObjectURL(file) : '';
    const card = {
      name: values.name,
      image: image,
      release: values.release,
      genre: values.genre,
      artist: values.artist,
    };

    return card;
  };

  const generateError = (message: string) => ({
    type: Type.REQUIRED,
    message,
  });

  const handleError = (values: IFormValues) => {
    const errors = {} as TError;
    const file = values?.file?.[0];

    if (!values.name.trim()) {
      errors.name = generateError(errorsText.name);
    }
    if (!values.release) {
      errors.release = generateError(errorsText.date);
    }
    if (values.release && Date.parse(values.release) > Date.now()) {
      errors.release = generateError(errorsText.dateInvalid);
    }
    if (!values.artist) {
      errors.artist = generateError(errorsText.artist);
    }
    if (values.genre === SelectElement) {
      errors.genre = generateError(errorsText.genre);
    }
    if (!values.confirm) {
      errors.confirm = generateError(errorsText.checkbox);
    }
    if (!file) {
      errors.file = generateError(errorsText.file);
    }
    if (file && !file.type.startsWith(Type.IMAGE)) {
      errors.file = generateError(errorsText.fileFormat);
    }

    return errors;
  };

  return {
    values: handleValues(values),
    errors: handleError(values),
  };
};
