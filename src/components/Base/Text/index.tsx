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
  const { colors, fonts } = useTheme();

  return (
    <RNText
      style={[
        {
          color: colors.text,
          fontFamily: fonts.family.openSans,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

Text.Heading = ({ children }) => {
  const { fonts, sizing } = useTheme();

  return <Text style={{ fontSize: sizing.fontMedium, fontFamily: fonts.family.playfairDisplay }}>{children}</Text>;
};

Text.Title = ({ children }) => {
  const { sizing } = useTheme();

  return <Text style={{ fontSize: sizing.fontMedium }}>{children}</Text>;
};

Text.Paragraph = ({ children }) => {
  const { sizing } = useTheme();

  return <Text style={{ fontSize: sizing.fontXSmall }}>{children}</Text>;
};

export default Text;
