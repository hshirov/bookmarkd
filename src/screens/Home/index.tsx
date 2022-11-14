import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';
import Text from 'components/Base/Text';
import Container from 'components/Container';

const Home: React.FC<TabNavProps<TabRoute.Home>> = () => (
  <Container>
    <Text>Home screen</Text>
  </Container>
);

export default Home;
