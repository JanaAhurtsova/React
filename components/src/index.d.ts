import { RootState } from "./redux/store";

export {};

declare global {
  interface Window {
    __PRELOADED_STATE__: RootState;
  }
}
