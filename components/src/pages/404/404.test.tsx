import { screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { NotFoundPage } from '.';
import { renderWithProviders } from '../../test/renderWithProvide';

describe('404Page', () => {
  it('render component', () => {
    const router = createMemoryRouter([{ path: '/vbn', element: <NotFoundPage /> }], {
      initialEntries: ['/vbn'],
    });
    renderWithProviders(<RouterProvider router={router} />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
