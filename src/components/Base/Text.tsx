import { StyleProp, Text as RNText, TextStyle } from 'react-native';
import useTheme from 'hooks/useTheme';

interface TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

interface TextComponents {
  Heading: React.FC<TextProps>;
  Title: React.FC<TextProps>;
  Paragraph: React.FC<TextProps>;
  Secondary: React.FC<TextProps>;
}

const Text: React.FC<TextProps> & TextComponents = ({ children, style }) => {
  const { colors } = useTheme();

  return <RNText style={[{ color: colors.text }, style]}>{children}</RNText>;
};

Text.Heading = ({ children, style }) => {
  const { fonts, sizing } = useTheme();

  return (
    <Text
      style={[
        {
          fontFamily: fonts.playfairDisplay,
          fontSize: sizing.fontMedium,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

Text.Title = ({ children, style }) => {
  const { fonts, sizing } = useTheme();

  return (
    <Text
      style={[
        {
          fontFamily: fonts.openSansBold,
          fontSize: sizing.fontSmall,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

Text.Paragraph = ({ children, style }) => {
  const { fonts, sizing } = useTheme();

  return (
    <Text
      style={[
        {
          fontFamily: fonts.openSans,
          fontSize: sizing.fontXSmall,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

Text.Secondary = ({ children, style }) => {
  const { fonts, sizing, colors } = useTheme();

  return (
    <Text
      style={[
        {
          fontFamily: fonts.openSans,
          fontSize: sizing.fontXSmall,
          color: colors.textInactive,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default Text;
