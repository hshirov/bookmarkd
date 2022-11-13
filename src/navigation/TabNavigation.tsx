import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabRoute from 'enums/TabRoute.enum';
import TabParamList from 'types/navigation/TabParamList.type';
import Home from 'screens/Home';
import Explore from 'screens/Explore';

const Tabs = createBottomTabNavigator<TabParamList>();

const TabNavigation: React.FC = () => (
  <Tabs.Navigator>
    <Tabs.Screen name={TabRoute.Home} component={Home} />
    <Tabs.Screen name={TabRoute.Explore} component={Explore} />
  </Tabs.Navigator>
);

export default TabNavigation;
