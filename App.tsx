import * as React from 'react';
import { useFonts } from 'expo-font';
import { Provider as StoreProvider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBarManager } from './src/components/Managers';
import { FallbackScreen } from './src/components/Common';
import { queryClientConfig } from './src/utils/config/reactQueryConfig';
import TabNavigation from './src/navigation/TabNavigation';
import { store, persistor } from './src/store';

const App = () => {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay: require('./assets/fonts/PlayfairDisplay/PlayfairDisplay.ttf'),
    OpenSans: require('./assets/fonts/OpenSans/OpenSans.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
    OpenSansSemiBold: require('./assets/fonts/OpenSans/OpenSans-SemiBold.ttf'),
  });

  const queryClient = new QueryClient(queryClientConfig);

  if (!fontsLoaded) {
    return <FallbackScreen />;
  }

  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <QueryClientProvider client={queryClient}>
          <StatusBarManager />
          <TabNavigation />
        </QueryClientProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
