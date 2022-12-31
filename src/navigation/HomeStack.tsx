import { createStackNavigator } from '@react-navigation/stack';
import TabParamList from 'types/navigation/TabParamList.type';
import TabRoute from 'enums/TabRoute.enum';
import Home from 'screens/Home';
import BookDetails from 'screens/BookDetails';

const Stack = createStackNavigator<TabParamList>();

const HomeStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={TabRoute.Home} component={Home} />
    <Stack.Screen name={TabRoute.BookDetails} component={BookDetails} />
  </Stack.Navigator>
);

export default HomeStack;
