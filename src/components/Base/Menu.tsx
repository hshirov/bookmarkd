import { Pressable, View } from 'react-native';
import useTheme from 'hooks/useTheme';
import Text from './Text';

interface MenuProps {
  children: React.ReactNode;
}

interface ItemProps {
  text: string;
  icon?: React.ReactNode;
  onPress: () => void;
}

interface MenuComponents {
  Title: React.FC<MenuProps>;
  Divider: React.FC;
  Item: React.FC<ItemProps>;
}

const Menu: React.FC<MenuProps> & MenuComponents = ({ children }) => <View>{children}</View>;

Menu.Title = ({ children }) => {
  const { spacing, fonts } = useTheme();

  return <Text.Title style={{ fontFamily: fonts.openSans, marginBottom: spacing.spacer }}>{children}</Text.Title>;
};

Menu.Divider = () => {
  const { spacing, sizing, colors } = useTheme();

  return (
    <View
      style={{
        borderBottomColor: colors.textInactive,
        borderBottomWidth: sizing.borderWidth,
        marginVertical: spacing.spacer,
      }}
    />
  );
};

Menu.Item = ({ text, icon, onPress }) => {
  const { spacing, fonts } = useTheme();

  return (
    <Pressable onPress={onPress} style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: spacing.spacer * 1.5 }}>
        <View style={{ marginRight: spacing.spacer / 2 }}>{icon}</View>
        <Text.Title style={{ fontFamily: fonts.openSansSemiBold }}>{text}</Text.Title>
      </View>
    </Pressable>
  );
};

export default Menu;
