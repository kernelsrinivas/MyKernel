import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../home/Home.indext';
import Login from '../login/Login.index';

const Stack = createStackNavigator();
const defaultOptions = {
  headerless:true
}
export function AppNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}