import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer component', () => {
  it('render footer', () => {
    render(<Footer />);

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
