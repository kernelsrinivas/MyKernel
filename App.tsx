import React, { Component } from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';

const statusbarHeight = Platform.select({ios: 47, android: StatusBar.currentHeight});

export default class App extends Component {
  constructor(props: {} | Readonly<{}>){
    super(props);
  }

  render(): React.ReactNode {
    return <View style={{flex:1}}>
      <View style={{height: statusbarHeight, backgroundColor:'#CCC'}}>
        <StatusBar/>
      </View>
      <Text>MyKernel</Text>
    </View>;    
  }
}