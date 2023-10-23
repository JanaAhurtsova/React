interface IFormValues {
  name: string;
  file: FileList;
  release: string;
  genre: string;
  artist: string;
  confirm: boolean;
}

type TError = {
  [PropertyKey in keyof IFormValues]: {
    type: string;
    message: string;
  };
};

export { TError, IFormValues };
