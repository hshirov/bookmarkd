import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackParamList from 'types/navigation/StackParamList.type';
import StackRoute from 'enums/StackRoute.enum';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator<StackParamList>();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name={StackRoute.Tabs} component={TabNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
