import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from './src/routes';
const Stack = createNativeStackNavigator();

const App = () => {
   return (
      <Routes />

   );
};

export default App;