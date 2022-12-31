import { createStackNavigator } from '@react-navigation/stack';
import TabParamList from 'types/navigation/TabParamList.type';
import TabRoute from 'enums/TabRoute.enum';
import Profile from 'screens/Profile';
import Settings from 'screens/Settings';
import BookDetails from 'screens/BookDetails';

const Stack = createStackNavigator<TabParamList>();

const ProfileStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={TabRoute.Profile} component={Profile} />
    <Stack.Screen name={TabRoute.Settings} component={Settings} />
    <Stack.Screen name={TabRoute.BookDetails} component={BookDetails} />
  </Stack.Navigator>
);

export default ProfileStack;
