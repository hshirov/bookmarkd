import { ActivityIndicator, View } from 'react-native';

const backgroundColor = '#000000';

const FallbackScreen: React.FC = () => (
  <View style={{ flex: 1, backgroundColor, justifyContent: 'center' }}>
    <ActivityIndicator size="large" />
  </View>
);

export default FallbackScreen;
