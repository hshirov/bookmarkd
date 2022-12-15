import { useState } from 'react';
import { FlatList, View } from 'react-native';
import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';
import { GetBooksResponseItem } from 'interfaces/api/responses';
import useBooksSearch from 'hooks/queries/useBooksSearch';
import useDebounce from 'hooks/useDebounce';
import { Text, Container, Input } from 'components/Base';

const Explore: React.FC<TabNavProps<TabRoute.Explore>> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery);
  const { data, isLoading, fetchNextPage } = useBooksSearch(debouncedSearchQuery);

  return (
    <Container>
      <Input value={searchQuery} onChangeText={setSearchQuery} />
      {isLoading ? (
        <Text.Paragraph>Loading books...</Text.Paragraph>
      ) : (
        <FlatList
          data={data?.pages}
          renderItem={({ item: page }) => (
            <View>
              {page.items?.map((item: GetBooksResponseItem) => (
                <Text.Paragraph key={item.id}>{item.volumeInfo.title}</Text.Paragraph>
              ))}
            </View>
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => fetchNextPage()}
        />
      )}
    </Container>
  );
};

export default Explore;
