import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import Routes from './src/navigation/Routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay: require('./assets/fonts/PlayfairDisplay.ttf'),
    OpenSans: require('./assets/fonts/OpenSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Routes />
    </>
  );
};

export default App;
