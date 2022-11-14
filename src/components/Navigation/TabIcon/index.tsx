import { useMemo } from 'react';
import { Octicons } from '@expo/vector-icons';
import TabRoute from 'enums/TabRoute.enum';

interface TabIconProps {
  color: string;
  size: number;
  routeName: TabRoute;
}

const TabIcon: React.FC<TabIconProps> = ({ color, size, routeName }) => {
  const name = useMemo(() => {
    switch (routeName) {
      case TabRoute.Home:
        return 'home';
      default:
        return 'search';
    }
  }, [routeName]);

  return <Octicons color={color} size={size} name={name} />;
};

export default TabIcon;
