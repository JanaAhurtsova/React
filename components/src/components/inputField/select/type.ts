type TOptions = {
  title: string;
  defaultValue: string;
  genres: { value: string; hidden?: boolean }[];
  error: string | undefined;
  forwardedRef: React.RefObject<HTMLSelectElement>;
};

export default TOptions;
