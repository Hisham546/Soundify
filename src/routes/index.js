import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../home/dashboard';
import PlaySong from '../home/playsong';
import SongsList from '../home/songsList';
import SignUp from '../home/login/signup';
const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
       <NavigationContainer>
          <Stack.Navigator>
             <Stack.Screen
                options={{ headerShown: false }}
                name="SongsList"
                component={SongsList} />
             <Stack.Screen
                options={{ headerShown: false }}
                name="Dashboard"
                component={Dashboard} />
             <Stack.Screen
                options={{ headerShown: false }}
                name="PlaySong"
                component={PlaySong} />
             {/* <Stack.Screen
                options={{ headerShown: false }}
                name="SongsList"
                component={SongsList} /> */}
          </Stack.Navigator>
 
       </NavigationContainer>
    );
 };
 export default Routes;