import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabRoute from 'enums/TabRoute.enum';
import TabParamList from 'types/navigation/TabParamList.type';
import Home from 'screens/Home';
import Explore from 'screens/Explore';
import screenOptions from './screenOptions';

const Tabs = createBottomTabNavigator<TabParamList>();

const TabNavigation: React.FC = () => (
  <Tabs.Navigator screenOptions={({ route }) => screenOptions(route)}>
    <Tabs.Screen name={TabRoute.Home} options={{ title: 'Home' }} component={Home} />
    <Tabs.Screen name={TabRoute.Explore} options={{ title: 'Explore' }} component={Explore} />
  </Tabs.Navigator>
);

export default TabNavigation;
