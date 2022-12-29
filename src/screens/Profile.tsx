import TabRoute from 'enums/TabRoute.enum';
import { Entypo } from '@expo/vector-icons';
import TabNavProps from 'types/navigation/TabNavProps.type';
import { Container, Menu } from 'components/Base';
import useTheme from 'hooks/useTheme';

const Profile: React.FC<TabNavProps<TabRoute.Profile>> = ({ navigation }) => {
  const { sizing, colors } = useTheme();

  return (
    <Container>
      <Menu>
        <Menu.Divider />
        <Menu.Item
          text="Settings"
          icon={<Entypo name="cog" size={sizing.iconLarge} color={colors.text} />}
          onPress={() => navigation.navigate(TabRoute.Settings)}
        />
      </Menu>
    </Container>
  );
};

export default Profile;
