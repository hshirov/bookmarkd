import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import TabParamList from 'types/navigation/TabParamList.type';
import Header from 'components/Navigation/Header';
import TabIcon from 'components/Navigation/TabIcon';
import Theme from 'styles/theme';

const screenOptions = (route: RouteProp<TabParamList>): BottomTabNavigationOptions => ({
  header: ({ route: headerRoute, options }) => <Header route={headerRoute} options={options} />,
  tabBarIcon: ({ color, size }) => <TabIcon color={color} size={size} routeName={route.name} />,
  tabBarStyle: { backgroundColor: Theme.colors.tabBarBackground, borderTopWidth: 0 },
  tabBarActiveTintColor: Theme.colors.active,
});

export default screenOptions;
