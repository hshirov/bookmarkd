import { NavigationHelpers, ParamListBase, RouteProp, TabNavigationState } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import TabRoute from 'enums/TabRoute.enum';
import TabParamList from 'types/navigation/TabParamList.type';
import { Header, TabBar } from 'components/Navigation';
import Home from 'screens/Home';
import Explore from 'screens/Explore';

const Tabs = createBottomTabNavigator<TabParamList>();

const CustomTabBar = (
  state: TabNavigationState<ParamListBase>,
  descriptors: BottomTabDescriptorMap,
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
) => <TabBar state={state} descriptors={descriptors} navigation={navigation} />;

const CustomHeader = (route: RouteProp<ParamListBase, string>, options: BottomTabNavigationOptions) => (
  <Header route={route} options={options} />
);

const TabNavigation: React.FC = () => (
  <Tabs.Navigator
    screenOptions={{
      header: ({ route, options }) => CustomHeader(route, options),
    }}
    tabBar={({ state, descriptors, navigation }) => CustomTabBar(state, descriptors, navigation)}
  >
    <Tabs.Screen name={TabRoute.Home} options={{ title: 'Home' }} component={Home} />
    <Tabs.Screen name={TabRoute.Explore} options={{ title: 'Explore' }} component={Explore} />
  </Tabs.Navigator>
);

export default TabNavigation;
