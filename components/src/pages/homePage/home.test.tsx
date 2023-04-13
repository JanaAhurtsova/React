import { act, fireEvent, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { HomePage } from '.';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../test/renderWithProvide';

vi.mock('../../components/loader', () => ({
  Loader: () => <div data-testid="testId"></div>,
}));

describe('Home page', () => {
  it('loading before fetch execute', async () => {
    const router = createMemoryRouter([{ path: '/', element: <HomePage /> }], {
      initialEntries: ['/'],
    });
    renderWithProviders(<RouterProvider router={router} />);

    expect(screen.getByTestId('testId')).not.toBe(null);
  });

  it('render cards', async () => {
    const router = createMemoryRouter([{ path: '/', element: <HomePage /> }], {
      initialEntries: ['/'],
    });
    const { getByRole } = renderWithProviders(<RouterProvider router={router} />);

    await waitForElementToBeRemoved(() => screen.queryByTestId('testId'));
    expect(getByRole('list')).toBeInTheDocument();
  });

  it('search', async () => {
    const router = createMemoryRouter([{ path: '/', element: <HomePage /> }], {
      initialEntries: ['/'],
    });
    renderWithProviders(<RouterProvider router={router} />);

    act(() => {
      fireEvent.change(screen.getByRole('searchbox'), { target: { value: /panic/i } });
      fireEvent.click(screen.getByRole('button', { name: /Search/i }));
    });

    await waitFor(() => screen.getByText(/panic/i));

    expect(screen.getByText(/panic/i)).toBeInTheDocument();
  });

  it('show modal with request', async () => {
    const router = createMemoryRouter([{ path: '/', element: <HomePage /> }], {
      initialEntries: ['/'],
    });
    const { getByRole } = renderWithProviders(<RouterProvider router={router} />);

    await waitFor(() => getByRole('card1'));
    act(() => {
      fireEvent.click(getByRole('card1'));
    });
    await waitFor(() => screen.getByText(/American rock band from Las Vegas/i));

    expect(screen.getByText(/American rock band from Las Vegas/i)).toBeInTheDocument();
  });
});
