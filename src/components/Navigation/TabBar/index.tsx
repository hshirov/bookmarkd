import { Pressable, Text, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import TabRoute from 'enums/TabRoute.enum';
import useTheme from 'hooks/useTheme';
import TabIcon from '../TabIcon';

interface TabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const TabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  const { colors, spacing } = useTheme();
  const insets = useSafeAreaInsets();

  const tabBarStyle: ViewStyle = {
    flexDirection: 'row',
    backgroundColor: colors.tabBarBackground,
    paddingTop: spacing.spacer / 2,
  };
  const tabBarItemStyle: ViewStyle = {
    flex: 1,
    alignItems: 'center',
    paddingBottom: insets.bottom,
  };
  const tabIconStyle: ViewStyle = {
    marginBottom: spacing.spacer / 4,
  };

  return (
    <View style={tabBarStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title !== undefined ? options.title : route.name;
        const isFocused = state.index === index;
        const itemColor = isFocused ? colors.text : colors.textInactive;

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
            style={tabBarItemStyle}
          >
            <TabIcon color={itemColor} routeName={route.name as TabRoute} styles={tabIconStyle} />
            <Text style={{ color: itemColor }}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;
