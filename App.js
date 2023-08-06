import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './src/home/dashboard';
import PlaySong from './src/home/playsong';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen
              options={{headerShown : false}}
              name="PlaySong"
              component={PlaySong} />
          <Stack.Screen
                 options={{headerShown : false}}
                 name="Dashboard"
                 component={Dashboard} />
              </Stack.Navigator>
     </NavigationContainer>
  );
};

export default App;