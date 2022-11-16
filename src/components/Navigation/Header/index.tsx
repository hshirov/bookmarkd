import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import EStyleSheet from 'react-native-extended-stylesheet';
import Text from 'components/Base/Text';
import Theme from 'styles/theme';

interface HeaderProps {
  route: RouteProp<ParamListBase, string>;
  options: BottomTabNavigationOptions;
}

const Header: React.FC<HeaderProps> = ({ route, options }) => {
  const insets = useSafeAreaInsets();
  const title = getHeaderTitle(options, route.name);

  return (
    <View style={[styles.header, { paddingTop: insets.top }]}>
      <Text.Heading>{title}</Text.Heading>
    </View>
  );
};

const styles = EStyleSheet.create({
  header: {
    backgroundColor: Theme.colors.headerBackground,
    paddingHorizontal: Theme.spacing.innerPadding,
  },
});

export default Header;
