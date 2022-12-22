import { Image, StyleProp, TextStyle, View } from 'react-native';
import useTheme from 'hooks/useTheme';
import { Text } from 'components/Base';

interface BookCardProps {
  title: string;
  authors?: string[];
  imageUri?: string;
  style?: StyleProp<TextStyle>;
}

const BookCard: React.FC<BookCardProps> = ({ title, authors, imageUri, style }) => {
  const { spacing, sizing } = useTheme();

  return (
    <View style={[{ flexDirection: 'row' }, style]}>
      <View style={{ flex: 1, height: sizing.bookListItemHeight, marginRight: spacing.spacer }}>
        {imageUri && <Image style={{ height: sizing.bookListItemHeight }} source={{ uri: imageUri }} />}
      </View>
      <View style={{ flex: 3 }}>
        <Text.Title>{title}</Text.Title>
        {authors && authors.map((author) => <Text.Paragraph key={author}>{author}</Text.Paragraph>)}
      </View>
    </View>
  );
};

export default BookCard;
