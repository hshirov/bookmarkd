import { Text as RNText } from 'react-native';
import useTheme from 'hooks/useTheme';

interface TextProps {
  children: React.ReactNode;
  style?: any;
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
  const { fonts } = useTheme();

  return <Text style={{ fontSize: fonts.size.medium, fontFamily: fonts.family.playfairDisplay }}>{children}</Text>;
};

Text.Title = ({ children }) => {
  const { fonts } = useTheme();

  return <Text style={{ fontSize: fonts.size.medium }}>{children}</Text>;
};

Text.Paragraph = ({ children }) => {
  const { fonts } = useTheme();

  return <Text style={{ fontSize: fonts.size.small }}>{children}</Text>;
};

export default Text;
