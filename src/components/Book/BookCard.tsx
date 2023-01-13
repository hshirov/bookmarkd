import { memo } from 'react';
import { Image, Pressable, StyleProp, ViewStyle, View } from 'react-native';
import useTheme from 'hooks/useTheme';
import { isEqual } from 'utils/index';
import { Text } from '../Base';

interface BookCardProps {
  title: string;
  authors?: string[];
  imageUri?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const arePropsEqual = (prev: BookCardProps, next: BookCardProps) =>
  prev.title === next.title &&
  isEqual(prev.authors, next.authors) &&
  prev.imageUri === next.imageUri &&
  isEqual(prev.style, next.style);

const BookCard: React.FC<BookCardProps> = memo(({ title, authors, imageUri, style, onPress }) => {
  const { spacing, sizing } = useTheme();

  return (
    <Pressable onPress={onPress} style={[{ flexDirection: 'row' }, style]}>
      <View style={{ flex: 1, height: sizing.bookListItemHeight, marginRight: spacing.spacer }}>
        {imageUri && <Image style={{ height: sizing.bookListItemHeight }} source={{ uri: imageUri }} />}
      </View>

      <View style={{ flex: 3 }}>
        <Text.Title>{title}</Text.Title>
        {authors && authors.map((author) => <Text.Secondary key={author}>{author}</Text.Secondary>)}
      </View>
    </Pressable>
  );
}, arePropsEqual);

export default BookCard;
