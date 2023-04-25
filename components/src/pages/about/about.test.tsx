import { screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { AboutPage } from '.';
import { renderWithProviders } from '../../test/renderWithProvide';

describe('AboutPage', () => {
  it('render component', () => {
    const router = createMemoryRouter([{ path: '/about', element: <AboutPage /> }], {
      initialEntries: ['/about'],
    });
    renderWithProviders(<RouterProvider router={router} />);

    expect(screen.getByText(/MUSIC COUNTS/)).toBeInTheDocument();
    expect(screen.getByText(/Contact/)).toBeInTheDocument();
  });
});
