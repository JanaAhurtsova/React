import { TValue } from './type';

export const searchBar = 'search';

export class Storage {
  public static setValue(key: string, value: TValue) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  public static getValue(key: string, defaultValue?: TValue) {
    const value = localStorage.getItem(key) as string;
    return value ? JSON.parse(value) : defaultValue;
  }
}
