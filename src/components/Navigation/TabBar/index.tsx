import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import Theme from 'styles/theme';
import TabRoute from 'enums/TabRoute.enum';
import TabIcon from '../TabIcon';

interface TabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const TabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabBar, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title !== undefined ? options.title : route.name;
        const isFocused = state.index === index;
        const itemColor = isFocused ? Theme.colors.text : Theme.colors.textInactive;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            <TabIcon color={itemColor} routeName={route.name as TabRoute} styles={styles.tabIcon} />
            <Text style={{ color: itemColor }}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = EStyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Theme.colors.tabBarBackground,
    paddingTop: '.3rem',
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabIcon: {
    marginBottom: '.1rem',
  },
});

export default TabBar;
