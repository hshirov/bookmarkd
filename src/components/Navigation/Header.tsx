import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getFocusedRouteNameFromRoute, ParamListBase, RouteProp, StackActions } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import { BottomTabNavigationOptions, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Octicons } from '@expo/vector-icons';
import TabRoute from 'enums/TabRoute.enum';
import useTheme from 'hooks/useTheme';
import { Text } from 'components/Base';

interface HeaderProps {
  route: RouteProp<ParamListBase, string>;
  navigation: BottomTabNavigationProp<ParamListBase, string, undefined>;
  options: BottomTabNavigationOptions;
}

const Header: React.FC<HeaderProps> = ({ route, navigation, options }) => {
  const { colors, spacing, sizing } = useTheme();
  const insets = useSafeAreaInsets();
  const title = getHeaderTitle(options, route.name);
  const routeName = getFocusedRouteNameFromRoute(route);
  const shouldShowBackButton = routeName === TabRoute.BookDetails || routeName === TabRoute.Settings;

  return (
    <View
      style={{
        paddingTop: insets.top,
        backgroundColor: colors.headerBackground,
        paddingHorizontal: spacing.innerPadding,
        paddingBottom: spacing.spacer,
      }}
    >
      {shouldShowBackButton ? (
        <Pressable onPress={() => navigation.dispatch(StackActions.pop())}>
          <Octicons name="chevron-left" size={sizing.iconLarge} color={colors.text} />
        </Pressable>
      ) : (
        <Text.Heading>{title}</Text.Heading>
      )}
    </View>
  );
};

export default Header;
