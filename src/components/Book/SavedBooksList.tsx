import { FlatList, Image, Pressable, StyleProp, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import SavedBook from 'interfaces/savedBook.interface';
import TabParamList from 'types/navigation/TabParamList.type';
import TabRoute from 'enums/TabRoute.enum';
import useTheme from 'hooks/useTheme';
import { Text } from '../Base';

interface SavedBooksListProps {
  title: string;
  books: SavedBook[];
  style?: StyleProp<ViewStyle>;
}

const SavedBooksList: React.FC<SavedBooksListProps> = ({ title, books, style }) => {
  const { spacing, sizing } = useTheme();
  const navigation = useNavigation<StackNavigationProp<TabParamList>>();

  return (
    <View style={style}>
      <Text.SemiBoldTitle style={{ marginVertical: spacing.spacer }}>{title}</Text.SemiBoldTitle>

      <FlatList
        data={books}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate(TabRoute.BookDetails, { id: item.id })}>
            <View style={{ height: sizing.bookListItemHeight, marginRight: spacing.spacer }}>
              <Image
                style={{
                  width: sizing.bookListItemWidth,
                  height: sizing.bookListItemHeight,
                }}
                source={{ uri: item.thumbnailUri }}
              />
            </View>
          </Pressable>
        )}
        horizontal
      />
    </View>
  );
};

export default SavedBooksList;
