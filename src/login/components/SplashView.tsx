import React from 'react';
import { View, Text, StatusBar, Platform} from 'react-native';
import { YellowStatusBar } from '../../app/components/CustomStatusBar';
import { CONTENT_TEXT } from '../../language/Language.index';
import { COLORS } from '../../theme/colorCode.constants';

const statusbarHeight = Platform.select({ios: 47, android: StatusBar.currentHeight});

export const SplashView = (): JSX.Element => {
    return (
    <View style={{flex:1, backgroundColor: COLORS.YELLOW_COLOR}}>
        <YellowStatusBar/>
        <View style={{flex:0.99, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:53, letterSpacing:1, fontWeight:'bold'}}>{CONTENT_TEXT.MY_KERNEL}</Text>
            <Text style={{letterSpacing:4.2}}>{CONTENT_TEXT.TAG_LINE}</Text>
        </View>
        <Text style={{textAlign:'center', marginBottom:30, letterSpacing:5}}>{CONTENT_TEXT.COMPANY_NAME}</Text>
    </View>);
}