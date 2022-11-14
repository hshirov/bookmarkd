import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import EStyleSheet from 'react-native-extended-stylesheet';
import Routes from './src/navigation/Routes';

EStyleSheet.build();

const App = () => (
  <>
    <StatusBar style="light" />
    <Routes />
  </>
);

export default App;
