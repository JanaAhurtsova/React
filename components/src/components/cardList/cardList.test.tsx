import { renderHook, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { CardList } from '.';
import { renderWithProviders } from '../../test/renderWithProvide';
import { ReactNode } from 'react';
import { useSearchCardsQuery } from '../../redux/reducers/API';
import { Provider } from 'react-redux';
import { setupStore } from '../../redux/store';
import data from '../../data/cards/index.json';

const store = setupStore();
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

  it('should fetch data from API', async () => {
    const { result } = renderHook(() => useSearchCardsQuery(''), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      ),
    });
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => result.current.isFetching === false);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(data);
  });
});
