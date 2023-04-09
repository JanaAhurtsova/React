import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { HomePage } from '.';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { LocalStorageMock, handlers } from '../../managers/mocks';
import { setupServer } from 'msw/node';

vi.mock('../../components/loader', () => ({
  Loader: () => <div data-testid="testId"></div>,
}));

describe('Home page', () => {
  const localStorage = new LocalStorageMock();
  const server = setupServer(...handlers);

  beforeEach(() => {
    window.localStorage.clear();
  });
  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
    localStorage.clear();
  });
  afterAll(() => server.close());

  it('loading before fetch execute', async () => {
    const router = createMemoryRouter([{ path: '/', element: <HomePage /> }], {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    expect(screen.getByTestId('testId')).not.toBe(null);
  });

  it('get and set to localStorage', async () => {
    const localStorage = new LocalStorageMock();
    const router = createMemoryRouter([{ path: '/', element: <HomePage /> }], {
      initialEntries: ['/'],
    });

    const { unmount } = render(<RouterProvider router={router} />);
    const input = screen.getByRole('searchbox');
    localStorage.getItem('test');

    expect(input).toHaveAttribute('value', '');

    await waitFor(() => {
      fireEvent.change(input, { target: { value: 'test2' } });
      fireEvent.click(screen.getByRole('button', { name: /Search/i }));
    });

    unmount();

    render(<RouterProvider router={router} />);
    localStorage.getItem('test');
    expect(input).toHaveAttribute('value', 'test2');
  });

  it('render cards', async () => {
    console.log(localStorage.getItem('test'));
    const router = createMemoryRouter([{ path: '/', element: <HomePage /> }], {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    await waitForElementToBeRemoved(() => screen.queryByTestId('testId'));
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('search', async () => {
    const router = createMemoryRouter([{ path: '/', element: <HomePage /> }], {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    await waitFor(() => {
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
    const { container } = render(<RouterProvider router={router} />);

    await waitFor(() => {
      fireEvent.click(container.querySelector('#card1')!);
    });

    await waitFor(() => screen.getByText(/American rock band from Las Vegas/i));

    expect(screen.getByText(/American rock band from Las Vegas/i)).toBeInTheDocument();
  });
});
