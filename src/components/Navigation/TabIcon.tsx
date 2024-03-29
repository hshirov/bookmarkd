import { ViewStyle } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import TabRoute from 'enums/TabRoute.enum';
import useTheme from 'hooks/useTheme';

interface TabIconProps {
  color: string;
  routeName: TabRoute;
  styles?: ViewStyle;
}

const getTabIconName = (routeName: TabRoute) => {
  switch (routeName) {
    case TabRoute.Home:
      return 'home';
    case TabRoute.Explore:
      return 'search';
    case TabRoute.Profile:
      return 'person';
    default:
      return undefined;
  }
};

const TabIcon: React.FC<TabIconProps> = ({ color, routeName, styles }) => {
  const { sizing } = useTheme();
  const name = getTabIconName(routeName);

  return <Octicons color={color} size={sizing.iconLarge} name={name} style={styles} />;
};

export default TabIcon;
