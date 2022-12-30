import { ActivityIndicator, Image, ScrollView } from 'react-native';
import { Text, Container, Centered, TruncatedText } from 'components/Base';
import { AddToListButton } from 'components/Book';
import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';
import { removeHtmlTags } from 'utils/text';
import { isNonEmptyArr, isNonEmptyStr } from 'utils/index';
import useBookDetails from 'hooks/queries/useBookDetails';
import useTheme from 'hooks/useTheme';

const BookDetails: React.FC<TabNavProps<TabRoute.BookDetails>> = ({ route }) => {
  const { spacing, sizing } = useTheme();
  const { id } = route.params;
  const { data, isLoading } = useBookDetails(id);

  const thumbnailUri = data?.volumeInfo.imageLinks?.thumbnail;
  const title = data?.volumeInfo.title;
  const authors = isNonEmptyArr(data?.volumeInfo.authors) ? data?.volumeInfo.authors.join(', ') : '';
  const description = isNonEmptyStr(data?.volumeInfo.description)
    ? removeHtmlTags(data?.volumeInfo.description as string)
    : '';

  return (
    <Container>
      {isLoading ? (
        <Centered>
          <ActivityIndicator size="large" />
        </Centered>
      ) : (
        <ScrollView contentContainerStyle={{ paddingBottom: spacing.spacer }}>
          <Centered horizontallyOnly>
            {isNonEmptyStr(thumbnailUri) && (
              <Image
                style={{
                  width: sizing.bookDetailsImageWidth,
                  height: sizing.bookDetailsImageHeight,
                  marginBottom: spacing.spacer,
                }}
                source={{ uri: thumbnailUri }}
                resizeMode="contain"
              />
            )}

            <Text.Heading style={{ textAlign: 'center' }}>{title}</Text.Heading>
            <Text.Secondary style={{ textAlign: 'center' }}>{authors}</Text.Secondary>

            <AddToListButton style={{ marginVertical: spacing.spacer * 2 }} />

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
        </ScrollView>
      )}
    </Container>
  );
};

export default BookDetails;
