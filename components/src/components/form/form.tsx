import React, { FormEvent } from 'react';
import InputField from '../inputField/input/inputField';
import Radio from '../inputField/radio/radio';
import Select from '../inputField/select/select';
import style from './style.module.scss';
import IForm from './type';

const countries = [
  'Choose Country',
  'Belarus',
  'Ukraine',
  'Russia',
  'Germany',
  'Poland',
  'Lithuania',
  'Latvia',
  'Georgia',
  'Greece',
  'Uzbekistan',
  'Italy',
  'Estonia',
  'Serbia',
];

export default class Form extends React.Component<IForm> {
  form: React.RefObject<HTMLFormElement>;
  inputNameRef: React.RefObject<InputField>;
  inputDateRef: React.RefObject<InputField>;
  inputMaleRef: React.RefObject<Radio>;
  inputFemaleRef: React.RefObject<Radio>;
  selectRef: React.RefObject<Select>;
  inputFileRef: React.RefObject<InputField>;
  inputCheckboxRef: React.RefObject<HTMLInputElement>;

  constructor(props: IForm) {
    super(props);
    this.form = React.createRef();
    this.inputNameRef = React.createRef();
    this.inputDateRef = React.createRef();
    this.inputMaleRef = React.createRef();
    this.inputFemaleRef = React.createRef();
    this.selectRef = React.createRef();
    this.inputFileRef = React.createRef();
    this.inputCheckboxRef = React.createRef();
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
              placeholder="Enter Your Name"
              error=""
              ref={this.inputNameRef}
            />
            <InputField
              label="Date of Birth:"
              type="date"
              name="date"
              placeholder="Enter Your Birthday"
              error=""
              ref={this.inputDateRef}
            />
            <div className={style.radios}>
              <label>Gender:</label>
              <div className={style.radio}>
                <Radio label="Male" name="gender" ref={this.inputMaleRef} />
                <Radio label="Female" name="gender" ref={this.inputFemaleRef} />
              </div>
              <span className="error"></span>
            </div>
          </div>
          <div className={style.selected}>
            <Select
              title={'Select Country:'}
              defaultValue={countries[0]}
              countries={countries}
              error=""
              ref={this.selectRef}
            />
            <InputField
              label="Upload Image:"
              type="file"
              name="file"
              error=""
              ref={this.inputFileRef}
            />
          </div>
        </div>
        <div className={style.confirm}>
          <div>
            <input
              className={style.checkbox}
              type="checkbox"
              name="file"
              ref={this.inputCheckboxRef}
            />
            <label className={style.checkbox__label}>
              I confirm that my details are complete and correct
            </label>
          </div>
          <span className="error"></span>
        </div>
        <div className={style.buttons}>
          <button className={style.submit}>Submit</button>
          <button className={style.reset}>Reset</button>
        </div>
      </form>
    );
  }
}
