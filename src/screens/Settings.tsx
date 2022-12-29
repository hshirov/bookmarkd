import { Switch, View } from 'react-native';
import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';
import Theme from 'enums/Theme.enum';
import { Container, Menu } from 'components/Base';
import { changeTheme } from 'store/slices/commonSlice';
import useTheme from 'hooks/useTheme';
import { useAppDispatch } from 'hooks/store';

const Settings: React.FC<TabNavProps<TabRoute.Settings>> = () => {
  const { spacing, colors, theme } = useTheme();
  const dispatch = useAppDispatch();

  const isDarkTheme = theme === Theme.Dark;

  const toggleTheme = () => {
    const nextTheme = isDarkTheme ? Theme.Light : Theme.Dark;
    dispatch(changeTheme(nextTheme));
  };

  return (
    <Container>
      <View style={{ marginTop: spacing.spacer }}>
        <Menu>
          <Menu.Item
            text="Dark mode"
            icon={
              <Switch
                trackColor={{ false: colors.darkModeSwitchThumbColor, true: colors.text }}
                thumbColor={isDarkTheme ? colors.darkModeSwitchThumbColor : colors.background}
                ios_backgroundColor={colors.text}
                value={isDarkTheme}
                onValueChange={toggleTheme}
              />
            }
            onPress={toggleTheme}
          />
        </Menu>
      </View>
    </Container>
  );
};

export default Settings;
