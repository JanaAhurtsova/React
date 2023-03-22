import React, { FormEvent } from 'react';
import Checkbox from '../inputField/checkbox/checkbox';
import InputField from '../inputField/input/inputField';
import Radio from '../inputField/radio/radio';
import Select from '../inputField/select/select';
import style from './style.module.scss';
import { IFormProps, IFormState } from './type';

const genres = [
  { value: 'Choose a Genre', hidden: true },
  { value: 'Rock' },
  { value: 'Pop' },
  { value: 'Punk' },
  { value: 'Jazz' },
  { value: 'Classic' },
  { value: 'Country' },
  { value: 'Hip Hop' },
  { value: 'Metal' },
  { value: 'Electronic' },
  { value: 'Blues' },
  { value: 'Techno' },
  { value: 'Reggae' },
];

export default class Form extends React.Component<IFormProps, IFormState> {
  form: React.RefObject<HTMLFormElement>;
  inputNameRef: React.RefObject<HTMLInputElement>;
  inputDateRef: React.RefObject<HTMLInputElement>;
  inputBandRef: React.RefObject<HTMLInputElement>;
  inputSingerRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  inputFileRef: React.RefObject<HTMLInputElement>;
  inputCheckboxRef: React.RefObject<HTMLInputElement>;

  constructor(props: IFormProps) {
    super(props);
    this.form = React.createRef();
    this.inputNameRef = React.createRef();
    this.inputDateRef = React.createRef();
    this.inputBandRef = React.createRef();
    this.inputSingerRef = React.createRef();
    this.selectRef = React.createRef();
    this.inputFileRef = React.createRef();
    this.inputCheckboxRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isSubmitting: false,
    };
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (this.inputFileRef.current) {
      if (this.inputFileRef.current.files) {
        // const file = URL.createObjectURL(this.inputFileRef.current.files[0]) || '';
        // console.log(file);
      }
    }
    console.log(this.selectRef.current?.value);
  }

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit} ref={this.form}>
        <div className={style.information}>
          <div className={style.person}>
            <InputField
              label="Name:"
              type="text"
              name="name"
              placeholder="Enter Name"
              error=""
              forwardedRef={this.inputNameRef}
            />
            <InputField
              label="Release:"
              type="date"
              name="date"
              placeholder="Enter Date of Release"
              error=""
              forwardedRef={this.inputDateRef}
            />
            <div className={style.radios}>
              <label>Artist:</label>
              <div className={style.radio}>
                <Radio label="Band" name="gender" forwardedRef={this.inputBandRef} />
                <Radio label="Singer" name="gender" forwardedRef={this.inputSingerRef} />
              </div>
              <span className="error"></span>
            </div>
          </div>
          <div className={style.selected}>
            <Select
              title="Select Genre:"
              defaultValue={genres[0].value}
              genres={genres}
              error=""
              forwardedRef={this.selectRef}
            />
            <InputField
              label="Upload Image:"
              type="file"
              name="file"
              error=""
              forwardedRef={this.inputFileRef}
            />
          </div>
        </div>
        <Checkbox
          label="I confirm that my details are complete and correct"
          name="checkbox"
          forwardedRef={this.inputCheckboxRef}
          error=""
        />
        <div className={style.buttons}>
          <button className={style.submit}>Submit</button>
          <button className={style.reset}>Reset</button>
        </div>
      </form>
    );
  }
}
