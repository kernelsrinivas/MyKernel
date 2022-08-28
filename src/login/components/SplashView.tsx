import React from 'react';
import { View, Text} from 'react-native';
import { CONTENT_TEXT } from '../../language/Language.index';

export const SplashView = (): JSX.Element => {
    return (
    <View style={{flex:1, backgroundColor:'#ffe833'}}>
        <View style={{flex:0.99, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:53, letterSpacing:1, fontWeight:'bold'}}>{CONTENT_TEXT.MY_KERNEL}</Text>
            <Text style={{letterSpacing:4.2}}>{CONTENT_TEXT.TAG_LINE}</Text>
        </View>
        <Text style={{textAlign:'center', marginBottom:30, letterSpacing:5}}>{CONTENT_TEXT.COMPANY_NAME}</Text>
    </View>);
}