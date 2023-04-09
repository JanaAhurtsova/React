import { render, screen } from '@testing-library/react';
import { Card } from '.';

const data = {
  id: 1,
  artist: 'Panic! At The Disco',
  album: 'Pray for the Wicked',
  released: 2018,
  label: 'Fueled by Ramen',
  location: 'U.S.',
  genre: ['pop', 'pop rock'],
  cover:
    'https://e.snmc.io/i/600/w/b2c405fb03b07130a88984627c152eba/7145436/panic-at-the-disco-pray-for-the-wicked-Cover-Art.jpg',
  profile:
    "American rock band from Las Vegas, Nevada. US. Formed in 2004, became a Brendon Urie solo project in 2015 before 'becoming no more' on January 24th 2023.",
};

describe('Card component', () => {
  it('render card', () => {
    render(<Card {...data} />);

    expect(screen.getByText(data.artist)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
