import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/navigation/Routes';

const App = () => (
  <>
    <StatusBar style="auto" />
    <Routes />
  </>
);

export default App;
