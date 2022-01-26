import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store'

export const App = () => (
    <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#313746" />
        <Routes />
    </Provider>
);

export default App;
