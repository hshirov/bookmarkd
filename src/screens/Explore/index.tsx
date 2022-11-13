import { Text, View } from 'react-native';
import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';

const Explore: React.FC<TabNavProps<TabRoute.Explore>> = () => (
  <View>
    <Text>Explore screen</Text>
  </View>
);

export default Explore;
