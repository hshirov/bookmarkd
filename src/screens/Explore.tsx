import { useState, useCallback, useRef } from 'react';
import { ActivityIndicator, FlatList, View, TextInput, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';
import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';
import { GetBookResponse } from 'src/interfaces/api/responses.interface';
import useBooksSearch from 'hooks/queries/useBooksSearch';
import useDebounce from 'hooks/useDebounce';
import useTheme from 'hooks/useTheme';
import { isNonEmptyStr } from 'utils/index';
import { Container, Input, Text } from 'components/Base';
import { BookCard } from 'components/Book';
import { ErrorScreen } from 'components/Common';

const Explore: React.FC<TabNavProps<TabRoute.Explore>> = ({ navigation }) => {
  const { colors, spacing, sizing } = useTheme();
  const searchInputRef = useRef<TextInput>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery);
  const { data, isFetching, isError, fetchNextPage } = useBooksSearch(debouncedSearchQuery.trim());

  useFocusEffect(
    useCallback(() => {
      searchInputRef.current?.focus();
    }, [searchInputRef])
  );

  const renderContent = () => {
    const hasPages = !!data?.pages[0]?.items?.length;

    return hasPages || isFetching ? (
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
        ListFooterComponent={isFetching ? <ActivityIndicator /> : null}
        ListFooterComponentStyle={{ marginTop: spacing.spacer }}
        onEndReachedThreshold={0.5}
        onEndReached={() => fetchNextPage()}
      />
    ) : (
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={false}
      >
        <Text.Secondary>
          {isNonEmptyStr(debouncedSearchQuery) ? 'No results found.' : 'Search by book title or author.'}
        </Text.Secondary>
      </ScrollView>
    );
  };

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
        <Input
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType="search"
          ref={searchInputRef}
          style={{ flex: 1 }}
        />
      </View>

      {isError ? <ErrorScreen /> : renderContent()}
    </Container>
  );
};

export default Explore;
