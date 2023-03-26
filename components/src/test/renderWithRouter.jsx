import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

export default renderWithRouter = (Component, initialEntries = '/') => {
  const route = {
    path: initialEntries,
    element: Component,
  };
  const config = {
    initialEntries: [initialEntries],
  };

  const router = createMemoryRouter([route], config);

  return render(<RouterProvider router={router} />);
};
