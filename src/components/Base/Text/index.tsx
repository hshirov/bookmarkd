import { Text as RNText } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Theme from 'styles/theme';

interface TextProps {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => <RNText style={styles.text}>{children}</RNText>;

const styles = EStyleSheet.create({
  text: {
    color: Theme.colors.text,
  },
});

export default Text;
