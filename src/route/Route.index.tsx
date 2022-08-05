import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../home/Home.index';
import {NavigationContainer} from '@react-navigation/native';
import { ROUTES } from '../app/constants/RouteName';
import Motor from '../motor/Motor.index';
import DriverEncoder from '../driver-encoder/DriverEncoder.index';
import BusIO from '../bus-io/BusIO.index';
import Controller from '../controller/Controller.index';
import Battery from '../battery/Battery.index';

const Stack = createNativeStackNavigator();

export default function RouteStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTES.HOME} component={Home} options={{headerShown: false}} />
        <Stack.Screen name={ROUTES.MOTOR} component={Motor}/>
        <Stack.Screen name={ROUTES.DRIVER_ENCODER} component={DriverEncoder}/>
        <Stack.Screen name={ROUTES.BUS_IO} component={BusIO}/>
        <Stack.Screen name={ROUTES.CONTROLLER} component={Controller}/>
        <Stack.Screen name={ROUTES.BATTERY} component={Battery}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
