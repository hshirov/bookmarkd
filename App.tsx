import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { QueryClientProvider, QueryClient } from 'react-query';
import { queryClientConfig } from './src/utils/config/reactQueryConfig';
import Routes from './src/navigation/Routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay: require('./assets/fonts/PlayfairDisplay.ttf'),
    OpenSans: require('./assets/fonts/OpenSans.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    OpenSansSemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  const queryClient = new QueryClient(queryClientConfig);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light" />
      <Routes />
    </QueryClientProvider>
  );
};

export default App;
