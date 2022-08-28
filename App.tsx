import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { AppNavigation } from './src/app/Route.index';

const statusbarHeight = Platform.select({ios: 47, android: StatusBar.currentHeight});

export default class App extends Component {
  constructor(props: {} | Readonly<{}>){
    super(props);
  }

  render(): React.ReactNode {
    return <View style={{flex:1}}>
      <View style={{height: statusbarHeight, backgroundColor:'#222'}}>
        <StatusBar barStyle={'light-content'}/>
      </View>
      <AppNavigation/>
    </View>;    
  }
}