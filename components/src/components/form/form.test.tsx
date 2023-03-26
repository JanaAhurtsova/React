import { fireEvent, render, screen } from '@testing-library/react';
import Form from './form';

describe('Form component', () => {
  beforeEach(() => {
    const mockFn = vi.fn();
    render(<Form addCard={mockFn} />);
  });

  it('render component', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('all fields are empty', () => {
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(screen.getByText(/name cannot be blank/i)).toBeInTheDocument();
    expect(screen.getByText(/no date chosen/i)).toBeInTheDocument();
    expect(screen.getByText(/no artist chosen/i)).toBeInTheDocument();
    expect(screen.getByText(/no genre/i)).toBeInTheDocument();
    expect(screen.getByText(/no file chosen/i)).toBeInTheDocument();
    expect(screen.getByText(/Information must be confirm/i)).toBeInTheDocument();
  });

  it('reset form', () => {
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test' } });

    fireEvent.click(screen.getByRole('button', { name: /reset/i }));

    expect(screen.getByRole('textbox')).not.toHaveAttribute('value');
  });

  it('invalid date', () => {
    fireEvent.change(document.querySelector('[type="date"]')!, {
      target: { value: '2024-03-27' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(screen.getByText(/This date has not yet come/i)).toBeInTheDocument();
  });

  it('invalid file format upload', () => {
    const mockPdf = new File(['test'], 'test.pdf', { type: 'application/pdf' });
    window.URL.createObjectURL = vi.fn();

    fireEvent.change(document.querySelector('[type="file"]')!, {
      target: { files: [mockPdf] },
    });

    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(screen.getByText(/Upload file isn't an image/i)).toBeInTheDocument();
  });
});
