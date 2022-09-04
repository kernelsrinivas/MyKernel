import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { COLORS } from '../../theme/colorCode.constants';

const numberPad = ['7','8','9', '4', '5', '6', '3', '2', '1', 'X', '0', '>'];

export const NumberPad = () => {
    return <View>
        <FlatList
            data={numberPad}
            keyExtractor={(item, index) => `${item}_${index}`}
            horizontal={false}
            numColumns={3}
            renderItem={({item}) => 
            <View style={{width: 72, height:72, borderRadius:72, justifyContent:'center', padding:10, marginHorizontal:28, marginVertical:12, backgroundColor:COLORS.LIGHT_YELLOW}}>
                <Text style={{fontSize:32, textAlign:'center', textAlignVertical:'center'}}>{item}</Text>
            </View>}            
        />
    </View>
}