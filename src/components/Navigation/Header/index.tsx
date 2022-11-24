import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import useTheme from 'hooks/useTheme';
import Text from 'components/Base/Text';

interface HeaderProps {
  route: RouteProp<ParamListBase, string>;
  options: BottomTabNavigationOptions;
}

const Header: React.FC<HeaderProps> = ({ route, options }) => {
  const { colors, spacing } = useTheme();
  const insets = useSafeAreaInsets();
  const title = getHeaderTitle(options, route.name);

  return (
    <View
      style={{
        paddingTop: insets.top,
        backgroundColor: colors.headerBackground,
        paddingHorizontal: spacing.innerPadding,
      }}
    >
      <Text.Heading>{title}</Text.Heading>
    </View>
  );
};

export default Header;
