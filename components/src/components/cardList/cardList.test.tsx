import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { CardList } from '.';
import { renderWithProviders } from '../../test/renderWithProvide';

const dataMock = /Pray/i;
vi.mock('../../components/loader', () => ({
  Loader: () => <div data-testid="testId"></div>,
}));

describe('CardList component', () => {
  it('render cardList', async () => {
    const { getByRole, getByAltText } = renderWithProviders(<CardList />);

    await waitForElementToBeRemoved(() => screen.queryByTestId('testId'));

    expect(getByRole('list')).toBeInTheDocument();
    expect(getByAltText(dataMock)).toBeInTheDocument();
  });
});
