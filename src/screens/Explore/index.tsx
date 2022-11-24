import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';
import Text from 'components/Base/Text';
import Container from 'components/Base/Container';

const Explore: React.FC<TabNavProps<TabRoute.Explore>> = () => (
  <Container>
    <Text.Paragraph>Explore screen</Text.Paragraph>
  </Container>
);

export default Explore;
