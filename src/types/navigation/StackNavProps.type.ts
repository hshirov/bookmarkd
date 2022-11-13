import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import StackRoute from 'enums/StackRoute.enum';
import StackParamList from './StackParamList.type';

type StackNavProps<T extends StackRoute> = {
  navigation: StackNavigationProp<StackParamList, T>;
  route: RouteProp<StackParamList, T>;
};

export default StackNavProps;
