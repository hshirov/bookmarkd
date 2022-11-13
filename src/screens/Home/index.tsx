import { Text, View } from 'react-native';
import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';

const Home: React.FC<TabNavProps<TabRoute.Home>> = () => (
  <View>
    <Text>Home screen</Text>
  </View>
);

export default Home;
