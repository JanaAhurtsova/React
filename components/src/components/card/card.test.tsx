import { render, screen } from '@testing-library/react';
import { Card } from '.';
import data from '../../data/cards/index.json';

describe('Card component', () => {
  it('render card', () => {
    render(<Card {...data[0]} />);
    expect(screen.getByText(data[0].artist)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
