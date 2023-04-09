import { render, screen } from '@testing-library/react';
import { CardList } from '.';
import { Cards } from '../../managers/mocks';

const dataMock = /Pray/i;

describe('CardList component', () => {
  it('render cardList', () => {
    render(<CardList cards={Cards} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByAltText(dataMock)).toBeInTheDocument();
  });
});
