import { render, screen } from '@testing-library/react';
import CardList from '.';

const dataMock = 'Insert';

describe('CardList component', () => {
  it('render cardList', () => {
    render(<CardList />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByAltText(dataMock)).toBeInTheDocument();
  });
});
