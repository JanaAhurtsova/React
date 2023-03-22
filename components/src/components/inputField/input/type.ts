export default interface IInputField {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  forwardedRef: React.RefObject<HTMLInputElement>;
  error: string;
}
