import { useState, useCallback, useRef } from 'react';
import { ActivityIndicator, FlatList, View, TextInput } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';
import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';
import { GetBookResponse } from 'src/interfaces/api/responses.interface';
import useBooksSearch from 'hooks/queries/useBooksSearch';
import useDebounce from 'hooks/useDebounce';
import useTheme from 'hooks/useTheme';
import { Container, Input } from 'components/Base';
import { BookCard } from 'components/Book';

const Explore: React.FC<TabNavProps<TabRoute.Explore>> = ({ navigation }) => {
  const { colors, spacing, sizing } = useTheme();
  const searchInputRef = useRef<TextInput>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery);
  const { data, isLoading, isFetchingNextPage, fetchNextPage } = useBooksSearch(debouncedSearchQuery.trim());

  useFocusEffect(
    useCallback(() => {
      searchInputRef.current?.focus();
    }, [searchInputRef])
  );

  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: spacing.spacer * 1.5,
        }}
      >
        <Octicons name="search" size={sizing.iconMedium} color={colors.text} style={{ marginRight: spacing.spacer }} />
        <Input value={searchQuery} onChangeText={setSearchQuery} ref={searchInputRef} style={{ flex: 1 }} />
      </View>

      <View>
        <FlatList
          data={data?.pages}
          renderItem={({ item: page }) => (
            <View>
              {page.items?.map((item: GetBookResponse) => (
                <BookCard
                  key={item.id}
                  title={item.volumeInfo.title}
                  authors={item.volumeInfo.authors}
                  imageUri={item.volumeInfo.imageLinks?.thumbnail}
                  style={{ marginBottom: spacing.spacer }}
                  onPress={() => navigation.navigate(TabRoute.BookDetails, { id: item.id })}
                />
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
