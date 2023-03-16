import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './searchBar';

type TStore = {
  [key: string]: string;
};

class LocalStorageMock {
  store: TStore;
  constructor() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key];
  }

  setItem(key: string, value: string) {
    this.store[key] = value;
  }

  clear() {
    this.store = {};
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}

describe('SearchBar component', () => {
  beforeAll(() => {
    const localStorage = new LocalStorageMock();
    localStorage.clear();
  });

  it('render component', () => {
    render(<SearchBar />);

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('get and set to localStorage', () => {
    const localStorage = new LocalStorageMock();
    const { unmount } = render(<SearchBar />);
    const input = screen.getByRole('searchbox');
    localStorage.getItem('test');

    expect(input).toHaveAttribute('value', '');

    fireEvent.change(input, { target: { value: 'test2' } });

    unmount();

    render(<SearchBar />);
    localStorage.getItem('test');
    expect(input).toHaveAttribute('value', 'test2');
  });
});
