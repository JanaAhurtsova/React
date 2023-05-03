import * as toolkitRaw from '@reduxjs/toolkit';
import rootReducer from './src/redux/store';
export {};

declare global {
  interface Window {
    __PRELOADED_STATE__?: toolkitRaw.PreloadedState<ReturnType<typeof rootReducer>>;
  }
}
