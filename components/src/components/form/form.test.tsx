import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from '.';

describe('Form component', () => {
  const mockFn = vi.fn;

  it('render component', () => {
    render(<Form addCard={mockFn} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('render errors when all fields are empty', async () => {
    render(<Form addCard={mockFn} />);

    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.getByText(/name cannot be blank/i)).toBeInTheDocument();
    expect(screen.getByText(/no date chosen/i)).toBeInTheDocument();
    expect(screen.getByText(/no artist chosen/i)).toBeInTheDocument();
    expect(screen.getByText(/no genre/i)).toBeInTheDocument();
    expect(screen.getByText(/no file chosen/i)).toBeInTheDocument();
    expect(screen.getByText(/Information must be confirm/i)).toBeInTheDocument();
  });

  it('reset form', () => {
    render(<Form addCard={mockFn} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test' } });
    fireEvent.click(screen.getAllByRole('radio')[1]);

    fireEvent.click(screen.getByRole('button', { name: /reset/i }));

    expect(screen.getByRole('textbox')).not.toHaveAttribute('value');
    expect(screen.getAllByRole('radio')[1]).not.toHaveAttribute('checked');
  });

  it('should check invalid date when date has not yet come', () => {
    const { container } = render(<Form addCard={mockFn} />);

    fireEvent.change(container.querySelector('[type="date"]')!, {
      target: { value: '2024-03-27' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(screen.getByText(/This date has not yet come/i)).toBeInTheDocument();
  });

  it('should check invalid file format upload', () => {
    const { container } = render(<Form addCard={mockFn} />);
    const mockPdf = new File(['test'], 'test.pdf', { type: 'application/pdf' });
    window.URL.createObjectURL = vi.fn();

    fireEvent.change(container.querySelector('[type="file"]')!, {
      target: { files: [mockPdf] },
    });

    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(screen.getByText(/Upload file isn't an image/i)).toBeInTheDocument();
  });
});
