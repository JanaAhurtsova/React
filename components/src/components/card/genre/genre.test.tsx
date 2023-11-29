import { render, screen } from '@testing-library/react';
import Genre from '.';

const data = 'rock';

describe('Genre component', () => {
  it('genre render', () => {
    render(<Genre genre={data} />);

    expect(screen.getByText(data)).toBeInTheDocument();
  });
});
