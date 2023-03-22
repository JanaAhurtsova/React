type TOptions = {
  title: string;
  defaultValue: string;
  genres: { value: string; hidden?: boolean }[];
  error: string;
  forwardedRef: React.RefObject<HTMLSelectElement>;
};

export default TOptions;
