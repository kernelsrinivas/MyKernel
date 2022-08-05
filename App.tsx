import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import RouteStack from './src/route/Route.index';
import { primaryStyle } from './src/app/theme/primaryTheme';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{height: Platform.OS === 'ios' ? 47 : StatusBar.currentHeight, backgroundColor: '#000030'}}>
        <StatusBar barStyle={'light-content'} />
      </View>
      <RouteStack />
    </View>
  );
}
