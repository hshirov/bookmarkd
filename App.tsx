import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Provider as StoreProvider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
import { queryClientConfig } from './src/utils/config/reactQueryConfig';
import Routes from './src/navigation/Routes';
import { store } from './src/store';

const App = () => {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay: require('./assets/fonts/PlayfairDisplay/PlayfairDisplay.ttf'),
    OpenSans: require('./assets/fonts/OpenSans/OpenSans.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
    OpenSansSemiBold: require('./assets/fonts/OpenSans/OpenSans-SemiBold.ttf'),
  });

  const queryClient = new QueryClient(queryClientConfig);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="light" />
        <Routes />
      </QueryClientProvider>
    </StoreProvider>
  );
};

export default App;
