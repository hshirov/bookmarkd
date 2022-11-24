import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';
import Text from 'components/Base/Text';
import Container from 'components/Base/Container';

const Home: React.FC<TabNavProps<TabRoute.Home>> = () => (
  <Container>
    <Text.Paragraph>Home screen</Text.Paragraph>
  </Container>
);

export default Home;
