import React from 'react';
import { View, Text} from 'react-native';

export const SplashView = () => {
    return (
    <View style={{flex:1, backgroundColor:'#ffe833'}}>
        <View style={{flex:0.99, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:53, letterSpacing:1}}>MY KERNEL</Text>
            <Text style={{letterSpacing:4.2}}>Robotics Learning Platform</Text>
        </View>
        <Text style={{textAlign:'center', marginBottom:30}}>Kernel Robotics</Text>
    </View>);
}