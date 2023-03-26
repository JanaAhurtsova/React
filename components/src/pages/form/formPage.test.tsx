import { act, fireEvent, render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import FormPage from './formPage';

describe('FormPage', () => {
  it('render component', () => {
    const router = createMemoryRouter([{ path: '/form', element: <FormPage /> }], {
      initialEntries: ['/form'],
    });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    expect(screen.queryAllByText(/form/i).length).toBe(2);
  });

  it('handleSubmit is called when all fields path validation', async () => {
    const router = createMemoryRouter([{ path: '/form', element: <FormPage /> }], {
      initialEntries: ['/form'],
    });
    const { container } = render(<RouterProvider router={router} />);
    window.URL.createObjectURL = vi.fn();
    const mockJpg = new File(['test'], 'test.jpg', { type: 'image/jpg' });

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test' } });
    fireEvent.change(container.querySelector('[type="date"]')!, {
      target: { value: '2021-02-14' },
    });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getAllByRole('radio')[0]);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Rock' } });
    fireEvent.change(container.querySelector('[type="file"]')!, {
      target: { files: [mockJpg] },
    });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(screen.getByText(/successfully/i)).toBeInTheDocument();

    await act(async () => {
      await new Promise((r) => setTimeout(r, 2600));
    });

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
    expect(screen.getByText(/2021-02-14/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
