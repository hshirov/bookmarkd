import { ActivityIndicator, Image, View } from 'react-native';
import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';
import BookStatus from 'enums/BookStatus.enum';
import { removeHtmlTags } from 'utils/text';
import { isNonEmptyArr, isNonEmptyStr } from 'utils/index';
import useBookDetails from 'hooks/queries/useBookDetails';
import { useAppDispatch } from 'hooks/store';
import useTheme from 'hooks/useTheme';
import { removeBook, saveBook } from 'store/slices/booksSlice';
import { Text, Container, Centered, TruncatedText, ScrollableContainer } from 'components/Base';
import { SaveBookButton } from 'components/Book';
import { ErrorScreen } from 'components/Common';

const BookDetails: React.FC<TabNavProps<TabRoute.BookDetails>> = ({ route }) => {
  const { spacing, sizing, styles } = useTheme();
  const dispatch = useAppDispatch();
  const { id } = route.params;
  const { data, isLoading, isError } = useBookDetails(id);

  const thumbnailUri = data?.volumeInfo.imageLinks?.thumbnail;
  const title = data?.volumeInfo.title;
  const authors = isNonEmptyArr(data?.volumeInfo.authors) ? data?.volumeInfo.authors.join(', ') : '';
  const description = isNonEmptyStr(data?.volumeInfo.description)
    ? removeHtmlTags(data?.volumeInfo.description as string)
    : '';

  const onSaveBook = (status: BookStatus) => {
    const book = {
      title: title as string,
      authors: authors as string,
      thumbnailUri: thumbnailUri as string,
      status,
    };

    dispatch(saveBook({ id, book }));
  };
  const onRemoveBook = () => dispatch(removeBook(id));

  if (isError) {
    return (
      <Container>
        <ErrorScreen />
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }

  return (
    <ScrollableContainer style={{ paddingBottom: spacing.spacer }}>
      <Centered horizontallyOnly>
        {isNonEmptyStr(thumbnailUri) && (
          <View style={styles.shadow}>
            <Image
              style={{
                width: sizing.bookDetailsImageWidth,
                height: sizing.bookDetailsImageHeight,
                marginBottom: spacing.spacer,
              }}
              source={{ uri: thumbnailUri }}
              resizeMode="contain"
            />
          </View>
        )}

        <Text.Heading style={{ textAlign: 'center' }}>{title}</Text.Heading>
        <Text.Secondary style={{ textAlign: 'center' }}>{authors}</Text.Secondary>

        <SaveBookButton
          style={{ marginVertical: spacing.spacer * 2 }}
          bookId={id}
          saveBook={onSaveBook}
          removeBook={onRemoveBook}
        />

        {isNonEmptyStr(description) && (
          <TruncatedText
            containerStyle={{
              marginTop: spacing.spacer,
              paddingHorizontal: spacing.spacer,
            }}
            text={description}
          />
        )}
      </Centered>
    </ScrollableContainer>
  );
};

export default BookDetails;
