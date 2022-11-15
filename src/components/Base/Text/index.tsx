import { Text as RNText } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Theme from 'styles/theme';

interface TextProps {
  children: React.ReactNode;
}

export interface TextComponents {
  Heading: React.FC<TextProps>;
  Title: React.FC<TextProps>;
  Paragraph: React.FC<TextProps>;
}

const Text: React.FC<TextProps> & TextComponents = ({ children }) => <RNText style={styles.text}>{children}</RNText>;

Text.Heading = ({ children }) => <RNText style={[styles.text, styles.heading]}>{children}</RNText>;
Text.Title = ({ children }) => <RNText style={[styles.text, styles.title]}>{children}</RNText>;
Text.Paragraph = ({ children }) => <RNText style={[styles.text, styles.paragraph]}>{children}</RNText>;

const styles = EStyleSheet.create({
  text: {
    color: Theme.colors.text,
  },
  heading: {
    fontSize: Theme.fonts.size.large,
  },
  title: {
    fontSize: Theme.fonts.size.medium,
  },
  paragraph: {
    fontSize: Theme.fonts.size.small,
  },
});

export default Text;
