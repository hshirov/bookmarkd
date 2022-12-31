import { InfiniteData } from 'react-query';
import { GetBooksResponse } from 'interfaces/api/responses.interface';
import TabNavProps from 'types/navigation/TabNavProps.type';
import TabRoute from 'enums/TabRoute.enum';
import BookCategory from 'enums/BookCategory.enum';
import useBooksByCategory from 'hooks/queries/useBooksByCategory';
import { getRandomNumber } from 'utils/index';
import { getCategoryTitle } from 'utils/books';
import useTheme from 'hooks/useTheme';
import { ScrollableContainer } from 'components/Base';
import { HorizontalBookList } from 'components/Book';

const randomStartIndexMax = 150;

const Home: React.FC<TabNavProps<TabRoute.Home>> = () => {
  const { spacing } = useTheme();

  const {
    data: fantasyData,
    isFetching: fantasyIsFetching,
    fetchNextPage: fantasyFetchNextPage,
  } = useBooksByCategory(BookCategory.Fantasy, getRandomNumber(randomStartIndexMax));

  const {
    data: horrorData,
    isFetching: horrorIsFetching,
    fetchNextPage: horrorFetchNextPage,
  } = useBooksByCategory(BookCategory.Horror, getRandomNumber(randomStartIndexMax));

  const {
    data: biographyData,
    isFetching: biographyIsFetching,
    fetchNextPage: biographyFetchNextPage,
  } = useBooksByCategory(BookCategory.Biography, getRandomNumber(randomStartIndexMax));

  return (
    <ScrollableContainer>
      <HorizontalBookList
        title={getCategoryTitle(BookCategory.Fantasy)}
        books={fantasyData as InfiniteData<GetBooksResponse>}
        isLoading={fantasyIsFetching}
        fetchNextPage={fantasyFetchNextPage}
        style={{ marginBottom: spacing.spacer }}
      />

      <HorizontalBookList
        title={getCategoryTitle(BookCategory.Horror)}
        books={horrorData as InfiniteData<GetBooksResponse>}
        isLoading={horrorIsFetching}
        fetchNextPage={horrorFetchNextPage}
        style={{ marginBottom: spacing.spacer }}
      />

      <HorizontalBookList
        title={getCategoryTitle(BookCategory.Biography)}
        books={biographyData as InfiniteData<GetBooksResponse>}
        isLoading={biographyIsFetching}
        fetchNextPage={biographyFetchNextPage}
      />
    </ScrollableContainer>
  );
};

export default Home;
