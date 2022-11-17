import { useMemo } from 'react';
import { Octicons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';
import TabRoute from 'enums/TabRoute.enum';

interface TabIconProps {
  color: string;
  routeName: TabRoute;
  styles?: EStyleSheet.AnyObject;
}

const TabIcon: React.FC<TabIconProps> = ({ color, routeName, styles }) => {
  const name = useMemo(() => {
    switch (routeName) {
      case TabRoute.Home:
        return 'home';
      default:
        return 'search';
    }
  }, [routeName]);

  return <Octicons color={color} size={25} name={name} style={styles} />;
};

export default TabIcon;
