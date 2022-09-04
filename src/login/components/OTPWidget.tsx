import React from 'react';
import { View, Text} from 'react-native';
import { YellowStatusBar } from '../../app/components/CustomStatusBar';
import { NumberPad } from './NumberPad';

export const OtpWidget = (props: { next: () => void}) => {
    return <View>
        <YellowStatusBar/>
        <NumberPad/>
    </View>
}