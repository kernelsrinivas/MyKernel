import React from 'react';
import { Text, View } from 'react-native';

export const Header = (props: {leftText: string; rightText: string}) => {
    return(
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
    <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10, marginTop:10}}>{props.leftText}</Text>
    <Text style={{fontSize: 15, fontWeight: '200', marginBottom: 10, marginTop:10, letterSpacing:5}}>{props.rightText}</Text>
    </View>
    )
}

export default Text;

