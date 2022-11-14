import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import TabParamList from 'types/navigation/TabParamList.type';
import TabIcon from 'components/Navigation/TabIcon';
import Theme from 'styles/theme';

const screenOptions = (route: RouteProp<TabParamList>): BottomTabNavigationOptions => ({
  tabBarIcon: ({ color, size }) => <TabIcon color={color} size={size} routeName={route.name} />,
  tabBarStyle: { backgroundColor: Theme.colors.tabBarBackground, borderTopWidth: 0 },
  tabBarActiveTintColor: Theme.colors.active,
  headerStyle: { backgroundColor: Theme.colors.headerBackground },
  headerTitleContainerStyle: { paddingHorizontal: 10 },
  headerTintColor: Theme.colors.text,
  headerTitleAlign: 'left',
  headerShadowVisible: false,
});

export default screenOptions;
