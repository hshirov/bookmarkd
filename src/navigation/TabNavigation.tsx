import { NavigationHelpers, ParamListBase, RouteProp, TabNavigationState } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import TabRoute from 'enums/TabRoute.enum';
import TabParamList from 'types/navigation/TabParamList.type';
import { Header, TabBar } from 'components/Navigation';
import { withBookDetailsScreen } from 'components/HOC';
import Home from 'screens/Home';
import Explore from 'screens/Explore';
import Profile from 'screens/Profile';

const Tabs = createBottomTabNavigator<TabParamList>();

const CustomTabBar = (
  state: TabNavigationState<ParamListBase>,
  descriptors: BottomTabDescriptorMap,
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
) => <TabBar state={state} descriptors={descriptors} navigation={navigation} />;

const CustomHeader = (
  route: RouteProp<ParamListBase, string>,
  navigation: BottomTabNavigationProp<ParamListBase, string, undefined>,
  options: BottomTabNavigationOptions
) => <Header route={route} navigation={navigation} options={options} />;

const ExploreWithBookDetails = withBookDetailsScreen(Explore, TabRoute.Explore);

const TabNavigation: React.FC = () => (
  <Tabs.Navigator
    screenOptions={{
      header: ({ route, navigation, options }) => CustomHeader(route, navigation, options),
      unmountOnBlur: true,
    }}
    tabBar={({ state, descriptors, navigation }) => CustomTabBar(state, descriptors, navigation)}
  >
    <Tabs.Screen name={TabRoute.Home} options={{ title: 'Home' }} component={Home} />
    <Tabs.Screen name={TabRoute.Explore} options={{ title: 'Explore' }} component={ExploreWithBookDetails} />
    <Tabs.Screen name={TabRoute.Profile} options={{ title: 'Profile' }} component={Profile} />
  </Tabs.Navigator>
);

export default TabNavigation;
