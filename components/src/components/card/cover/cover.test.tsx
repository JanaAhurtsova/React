import { render, screen } from '@testing-library/react';
import React from 'react';
import Cover from '.';

const data = {
  cover: 'https://m.media-amazon.com/images/I/61pqPiF03DL._UF1000,1000_QL80_.jpg',
  album: 'Got your six',
};

describe('Cover component', () => {
  it('render cover', () => {
    render(<Cover cover={data.cover} album={data.album} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
