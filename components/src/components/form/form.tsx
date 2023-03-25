import React, { FormEvent } from 'react';
import Checkbox from '../inputField/checkbox/checkbox';
import InputField from '../inputField/input/inputField';
import Radio from '../inputField/radio/radio';
import Select from '../inputField/select/select';
import style from './style.module.scss';
import { IFormProps, IFormState } from './type';
import genres from '../../data/genres';

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
    this.resetForm = this.resetForm.bind(this);
    this.state = {
      errors: {},
    };
  }

  resetForm(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (this.form.current) {
      this.form.current.reset();
    }
  }

  handleSubmit(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.validate(event);
  }

  validate(event: FormEvent<HTMLButtonElement>) {
    this.setState({ errors: {} });
    if (
      this.inputNameRef.current &&
      this.inputDateRef.current &&
      this.selectRef.current &&
      this.inputFileRef.current &&
      this.inputCheckboxRef.current &&
      this.inputBandRef.current &&
      this.inputSingerRef.current
    ) {
      const errors = {} as typeof this.state.errors;
      const name = this.inputNameRef.current.value;
      const release = this.inputDateRef.current.value;
      const genre = this.selectRef.current.value;
      const file =
        this.inputFileRef.current.files && this.inputFileRef.current.files.length
          ? this.inputFileRef.current.files[0]
          : '';
      const image = file ? URL.createObjectURL(file) : '';
      const band = this.inputBandRef.current;
      const singer = this.inputSingerRef.current;
      const artist = () => {
        if (band.checked) {
          return band.value;
        } else if (singer.checked) {
          return singer.value;
        } else {
          return '';
        }
      };
      const confirm = this.inputCheckboxRef.current.checked;

      if (!name.trim()) {
        errors.name = '*Name cannot be blank';
      }
      if (!release) {
        errors.date = '*No date chosen';
      }
      if (release && Date.parse(release) > Date.now()) {
        errors.date = '*This date has not yet come';
      }
      if (!artist()) {
        errors.artist = '*No artist chosen';
      }
      if (genre === 'Choose a Genre') {
        errors.genre = '*No genre chosen';
      }
      if (!confirm) {
        errors.checkbox = '*Information must be confirm';
      }
      if (!file) {
        errors.img = '*No file chosen';
      }
      if (file && !file.type.startsWith('image/')) {
        errors.img = "*Upload file isn't an image";
      }

      this.setState({ errors: errors });

      if (!Object.keys(errors).length) {
        this.props.showModal();
        setTimeout(() => {
          this.props.addCard({
            name: name,
            date: release,
            genre: genre,
            img: image,
            artist: artist(),
          });
          this.resetForm(event);
        }, 3000);
      }
    }
  }

  render() {
    return (
      <form className={style.form} ref={this.form}>
        <div className={style.information}>
          <div className={style.person}>
            <InputField
              label="Name:"
              type="text"
              name="name"
              placeholder="Enter Name"
              error={this.state.errors.name}
              forwardedRef={this.inputNameRef}
            />
            <InputField
              label="Release:"
              type="date"
              name="date"
              placeholder="Enter Date of Release"
              error={this.state.errors.date}
              forwardedRef={this.inputDateRef}
            />
            <div className={style.radios}>
              <label>Artist:</label>
              <div className={style.radio}>
                <Radio label="Band" value="Band" name="artist" forwardedRef={this.inputBandRef} />
                <Radio
                  label="Singer"
                  value="Singer"
                  name="artist"
                  forwardedRef={this.inputSingerRef}
                />
              </div>
              <span className="error">{this.state.errors.artist}</span>
            </div>
          </div>
          <div className={style.selected}>
            <Select
              title="Select Genre:"
              defaultValue={genres[0].value}
              genres={genres}
              error={this.state.errors.genre}
              forwardedRef={this.selectRef}
            />
            <InputField
              label="Upload Image:"
              type="file"
              name="file"
              accept="image/*"
              error={this.state.errors.img}
              forwardedRef={this.inputFileRef}
            />
          </div>
        </div>
        <Checkbox
          label="I confirm that my details are complete and correct"
          name="checkbox"
          forwardedRef={this.inputCheckboxRef}
          error={this.state.errors.checkbox}
        />
        <div className={style.buttons}>
          <button className={style.submit} onClick={this.handleSubmit}>
            Submit
          </button>
          <button className={style.submit} onClick={this.resetForm}>
            Reset
          </button>
        </div>
      </form>
    );
  }
}
