import {
  NavigationContainer,
  NavigationHelpers,
  ParamListBase,
  RouteProp,
  TabNavigationState,
} from '@react-navigation/native';
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
import Home from 'screens/Home';
import Profile from 'screens/Profile';
import ExploreStack from './ExploreStack';

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

const TabNavigation: React.FC = () => (
  <NavigationContainer>
    <Tabs.Navigator
      screenOptions={{
        header: ({ route, navigation, options }) => CustomHeader(route, navigation, options),
        unmountOnBlur: true,
      }}
      tabBar={({ state, descriptors, navigation }) => CustomTabBar(state, descriptors, navigation)}
    >
      <Tabs.Screen name={TabRoute.Home} options={{ title: 'Home' }} component={Home} />
      <Tabs.Screen name={TabRoute.Explore} options={{ title: 'Explore' }} component={ExploreStack} />
      <Tabs.Screen name={TabRoute.Profile} options={{ title: 'Profile' }} component={Profile} />
    </Tabs.Navigator>
  </NavigationContainer>
);

export default TabNavigation;
