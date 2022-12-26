import { createStackNavigator } from '@react-navigation/stack';
import TabParamList from 'types/navigation/TabParamList.type';
import TabRoute from 'enums/TabRoute.enum';
import BookDetails from 'screens/BookDetails';

const Stack = createStackNavigator<TabParamList>();

const withBookDetailsScreen = (MainScreen: React.FC<any>, name: string) => () =>
  (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={`${name}WithDetails` as TabRoute} component={MainScreen} />
      <Stack.Screen name={TabRoute.BookDetails} component={BookDetails} />
    </Stack.Navigator>
  );

export default withBookDetailsScreen;
