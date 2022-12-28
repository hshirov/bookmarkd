import { createStackNavigator } from '@react-navigation/stack';
import TabParamList from 'types/navigation/TabParamList.type';
import TabRoute from 'enums/TabRoute.enum';
import Explore from 'screens/Explore';
import BookDetails from 'screens/BookDetails';

const Stack = createStackNavigator<TabParamList>();

const ExploreStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={TabRoute.Explore} component={Explore} />
    <Stack.Screen name={TabRoute.BookDetails} component={BookDetails} />
  </Stack.Navigator>
);

export default ExploreStack;
