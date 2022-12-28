import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';
import { Text, Container } from 'components/Base';

const Profile: React.FC<TabNavProps<TabRoute.Profile>> = () => (
  <Container>
    <Text.Paragraph>Profile screen</Text.Paragraph>
  </Container>
);

export default Profile;
