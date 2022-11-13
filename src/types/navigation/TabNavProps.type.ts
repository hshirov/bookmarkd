import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import TabRoute from 'enums/TabRoute.enum';
import TabParamList from './TabParamList.type';

type TabNavProps<T extends TabRoute> = {
  navigation: StackNavigationProp<TabParamList, T>;
  route: RouteProp<TabParamList, T>;
};

export default TabNavProps;
