import { ActivityIndicator, FlatList, Image, Pressable, StyleProp, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { InfiniteData } from 'react-query';
import TabParamList from 'types/navigation/TabParamList.type';
import { GetBookResponse, GetBooksResponse } from 'interfaces/api/responses.interface';
import TabRoute from 'enums/TabRoute.enum';
import useTheme from 'hooks/useTheme';
import { Text } from '../Base';

interface HorizontalBookListListProps {
  title: string;
  books: InfiniteData<GetBooksResponse>;
  isLoading?: boolean;
  fetchNextPage?: () => void;
  style?: StyleProp<ViewStyle>;
}

const HorizontalBookList: React.FC<HorizontalBookListListProps> = ({
  title,
  books,
  isLoading,
  fetchNextPage,
  style,
}) => {
  const { spacing, sizing } = useTheme();
  const navigation = useNavigation<StackNavigationProp<TabParamList>>();

  return (
    <View style={style}>
      <Text.SemiBoldTitle style={{ marginVertical: spacing.spacer }}>{title}</Text.SemiBoldTitle>

      <View
        style={{
          height: sizing.bookListItemHeight,
        }}
      >
        <FlatList
          data={books?.pages}
          renderItem={({ item: page }) => (
            <View style={{ flexDirection: 'row' }}>
              {page.items?.map(
                (item: GetBookResponse) =>
                  item.volumeInfo.imageLinks?.thumbnail && (
                    <Pressable key={item.id} onPress={() => navigation.navigate(TabRoute.BookDetails, { id: item.id })}>
                      <Image
                        style={{
                          width: sizing.bookListItemWidth,
                          height: sizing.bookListItemHeight,
                          marginRight: spacing.spacer,
                        }}
                        source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
                      />
                    </Pressable>
                  )
              )}
            </View>
          )}
          ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
          ListFooterComponentStyle={{ marginLeft: spacing.spacer, justifyContent: 'center' }}
          onEndReachedThreshold={0.5}
          onEndReached={() => fetchNextPage && fetchNextPage()}
          horizontal
        />
      </View>
    </View>
  );
};

export default HorizontalBookList;
