import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';


export const App = () => (
  <>
  <StatusBar barStyle='light-content' backgroundColor="#313746"/>
    <Routes />
  </>
);

export default App;
