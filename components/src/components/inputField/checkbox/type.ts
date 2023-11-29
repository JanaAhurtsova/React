export default interface ICheckbox {
  label: string;
  name: string;
  forwardedRef: React.RefObject<HTMLInputElement>;
  error: string | undefined;
}
