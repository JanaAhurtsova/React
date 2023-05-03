import * as toolkitRaw from '@reduxjs/toolkit';
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
export const { createSlice, configureStore, combineReducers } = ((toolkitRaw as TypeToolkitRaw)
  .default ?? toolkitRaw) as typeof toolkitRaw;
export type TPayloadAction<T> = toolkitRaw.PayloadAction<T>;
export type TPreloadedState<T> = toolkitRaw.PreloadedState<T>;
