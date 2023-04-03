import React, { FormEvent } from 'react';
import { Checkbox } from '../inputField/checkbox';
import { InputField } from '../inputField/input';
import { Radio } from '../inputField/radio';
import { Select } from '../inputField/select';
import style from './style.module.scss';
import { IFormProps, IFormValues } from './type';
import { genres } from '../../data/genres';
import { SubmitHandler, useForm } from 'react-hook-form';
import { resolver } from './resolver';
import ICardForm from '../cardForm/type';
import { artists } from '../../data/artists';
import { DelayedResetTime } from '../../managers/timers';

export const Form: React.FC<IFormProps> = ({ addCard }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({ resolver, mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<IFormValues | ICardForm> = (card) => {
    if (!('image' in card)) {
      return;
    }

    if (!Object.keys(errors).length) {
      addCard(card);

      setTimeout(() => {
        reset();
      }, DelayedResetTime);
    }
  };

  const resetForm = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    reset();
  };

  return (
    <form id="form" className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.information}>
        <div className={style.person}>
          <InputField
            label="Name:"
            type="text"
            name="name"
            placeholder="Enter Name"
            error={errors.name}
            register={register}
          />
          <InputField
            label="Release:"
            type="date"
            name="release"
            placeholder="Enter Date of Release"
            error={errors.release}
            register={register}
          />
          <Radio artists={artists} error={errors.artist} name="artist" register={register} />
        </div>
        <div className={style.selected}>
          <Select
            label="Select Genre:"
            defaultValue={genres[0]}
            genre="genre"
            genres={genres}
            error={errors.genre}
            register={register}
          />
          <InputField
            label="Upload Image:"
            type="file"
            name="file"
            accept="image/*"
            error={errors.file}
            register={register}
          />
        </div>
      </div>
      <Checkbox
        label="I confirm that my details are complete and correct"
        name="confirm"
        register={register}
        error={errors.confirm}
      />
      <div className={style.buttons}>
        <button type="submit" className={style.submit}>
          Submit
        </button>
        <button className={style.submit} onClick={resetForm.bind(this)}>
          Reset
        </button>
      </div>
    </form>
  );
};
