import { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';
import { GetBooksResponseItem } from 'interfaces/api/responses';
import useBooksSearch from 'hooks/queries/useBooksSearch';
import useDebounce from 'hooks/useDebounce';
import useTheme from 'hooks/useTheme';
import { Text, Container, Input } from 'components/Base';

const Explore: React.FC<TabNavProps<TabRoute.Explore>> = () => {
  const { colors, spacing, sizing } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery);
  const { data, isLoading, isFetchingNextPage, fetchNextPage } = useBooksSearch(debouncedSearchQuery);

  return (
    <Container>
      <View
        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: spacing.spacer }}
      >
        <Octicons name="search" size={sizing.iconMedium} color={colors.text} style={{ marginRight: spacing.spacer }} />
        <Input value={searchQuery} onChangeText={setSearchQuery} style={{ flex: 1 }} />
      </View>
      <View>
        <FlatList
          data={data?.pages}
          renderItem={({ item: page }) => (
            <View>
              {page.items?.map((item: GetBooksResponseItem) => (
                <Text.Paragraph key={item.id}>{item.volumeInfo.title}</Text.Paragraph>
              ))}
            </View>
          )}
          ListFooterComponent={isLoading || isFetchingNextPage ? <ActivityIndicator /> : null}
          ListFooterComponentStyle={{ marginTop: spacing.spacer }}
          onEndReachedThreshold={0.5}
          onEndReached={() => fetchNextPage()}
        />
      </View>
    </Container>
  );
};

export default Explore;
