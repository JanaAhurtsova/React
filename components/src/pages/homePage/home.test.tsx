import { render, screen } from '@testing-library/react';
import HomePage from './home';
import { MemoryRouter } from 'react-router-dom';

describe('Home page', () => {
  it('render test', () => {
    render(
      <MemoryRouter initialEntries={['']}>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
