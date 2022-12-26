import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';
import { Text, Container } from 'components/Base';

const Home: React.FC<TabNavProps<TabRoute.Home>> = () => (
  <Container>
    <Text.Paragraph>Home screen</Text.Paragraph>
  </Container>
);

export default Home;
