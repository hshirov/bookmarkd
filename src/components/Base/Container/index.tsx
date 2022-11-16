import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Theme from 'styles/theme';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    padding: Theme.spacing.innerPadding,
  },
});

export default Container;
