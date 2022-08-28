import React from 'react';
import { View, Text} from 'react-native';

export const SplashView = () => {
    return (
    <View style={{flex:1, backgroundColor:'#ffe833'}}>
        <View style={{flex:0.99, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:53, letterSpacing:1}}>{'என் கர்னல்'}</Text>
            <Text style={{letterSpacing:4.2}}>{'க ற் ற ல் - த ள ம்'}</Text>
        </View>
        <Text style={{textAlign:'center', marginBottom:30, letterSpacing:5}}>KERNEL ROBOTICS</Text>
    </View>);
}