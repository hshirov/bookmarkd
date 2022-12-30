import { ScrollView, StyleProp, ViewStyle } from 'react-native';
import Container from './Container';

interface ScrollableContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({ children, style }) => (
  <Container>
    <ScrollView contentContainerStyle={style}>{children}</ScrollView>
  </Container>
);
export default ScrollableContainer;
