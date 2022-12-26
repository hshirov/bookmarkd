import { View } from 'react-native';

interface CenteredProps {
  children: React.ReactNode;
  horizontallyOnly?: boolean;
}

const Centered: React.FC<CenteredProps> = ({ children, horizontallyOnly = false }) => (
  <View
    style={{
      flex: 1,
      justifyContent: horizontallyOnly ? 'flex-start' : 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </View>
);

export default Centered;
