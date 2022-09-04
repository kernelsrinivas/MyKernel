import React from 'react';
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { YellowStatusBar } from '../../app/components/CustomStatusBar';
import { CONTENT_TEXT } from '../../language/Language.index';
import { COLORS } from '../../theme/colorCode.constants';

export const SignupWidget = (props: {next: ()=> void}) => {
    return <View style={{backgroundColor:COLORS.YELLOW_COLOR, flex:1}}>
        <YellowStatusBar/>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{padding:10}}>
            <Text style={{fontSize:50, fontWeight:'bold'}}>{CONTENT_TEXT.SIGNUP_TITLE}</Text>
            <Text style={{fontSize:25, lineHeight:30}}>{CONTENT_TEXT.SIGNUP_DESP}</Text>
            <View style={{padding:20, backgroundColor:COLORS.LIGHT_YELLOW, borderRadius:10, marginTop:10}}>
                <TextInput style={{height:48, backgroundColor:COLORS.WHITE_COLOR, paddingHorizontal:15}} placeholder='பயனர் பெயர் (User Name)'/>
                <View style={{height:10}}></View>
                <TextInput keyboardType='numeric' style={{height:48, backgroundColor:COLORS.WHITE_COLOR, paddingHorizontal:15}} placeholder='கைபேசி எண் (Mobile Number)'/>
                <View style={{height:10}}></View>
                <TextInput style={{height:48, backgroundColor:COLORS.WHITE_COLOR, paddingHorizontal:15}} placeholder='பயனர் பாத்திரம் (User Role)'/>
                <View style={{height:10}}></View>
                <Button title='அடுத்த நகர்வு (Next)' onPress={props.next}/>
            </View>
        </View>
        </TouchableWithoutFeedback>
    </View>
}