import { StyleProp, Text as RNText, TextStyle } from 'react-native';
import useTheme from 'hooks/useTheme';

interface TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export interface TextComponents {
  Heading: React.FC<TextProps>;
  Title: React.FC<TextProps>;
  Paragraph: React.FC<TextProps>;
}

const Text: React.FC<TextProps> & TextComponents = ({ children, style }) => {
  const { colors } = useTheme();

  return <RNText style={[{ color: colors.text }, style]}>{children}</RNText>;
};

Text.Heading = ({ children }) => {
  const { fonts, sizing } = useTheme();

  return <Text style={{ fontFamily: fonts.family.playfairDisplay, fontSize: sizing.fontMedium }}>{children}</Text>;
};

Text.Title = ({ children }) => {
  const { fonts, sizing } = useTheme();

  return <Text style={{ fontFamily: fonts.family.openSansBold, fontSize: sizing.fontSmall }}>{children}</Text>;
};

Text.Paragraph = ({ children }) => {
  const { fonts, sizing } = useTheme();

  return <Text style={{ fontFamily: fonts.family.openSans, fontSize: sizing.fontXSmall }}>{children}</Text>;
};

export default Text;
