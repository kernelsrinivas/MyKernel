import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect } from 'react';
import {View, Text, Image, TouchableHighlight, TouchableOpacity, ScrollView} from 'react-native';
import { Header } from '../app/components/Text';
import { basic } from '../app/constants/LevelOneTopics';
import { ROUTES } from '../app/constants/RouteName';


export default function Home(props) {
  console.log("Props", props);
  const { navigation } = props;
  const navigateCallback = useCallback((topic)=>{
    console.log('navigation', navigation);
    navigation.navigate(topic.route);
  }, [])
  return (
    <ScrollView style={{flex: 1, paddingHorizontal: 10}}>
     <Header leftText='MyKenrle' rightText='Robotics'/>
     <Image source={{uri:'https://i.pinimg.com/originals/0c/e1/dc/0ce1dc167709f57d270a01c87bd57ea4.jpg'}} style={{width:'100%', height:300, borderRadius:20, borderWidth:1, borderColor:'#CCC',marginBottom:10}}/>
      {basic.map(b => (
        <TouchableOpacity key={b.id} style={{padding: 5}} onPress={() => navigateCallback(b)}>
          <View style={{flexDirection: 'row', marginBottom: 5, flexWrap: 'wrap', borderColor:'#ccc', borderWidth:1, padding:5, borderRadius:5}}>
            <Image style={{borderRadius: 32, height: 32, width: 32, backgroundColor: '#CCC', marginRight: 10}} />
            <View>
              <Text style={{fontWeight: 'bold'}}>{b.topic}</Text>
              <Text style={{fontSize: 12}}>{b.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
      <View style={{backgroundColor:'#FFF',  borderColor:'#ccc', borderWidth:1, borderRadius:10, marginTop:10, padding:10}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontWeight:'bold', marginBottom:5}}>Note:</Text>
        <TouchableOpacity onPress={()=> navigateCallback({route: ROUTES.SKETCH})}>
          <Text style={{}}>{`Sketch Kernel`}</Text>
        </TouchableOpacity>
        </View>
        <Text style={{lineHeight:16, fontSize:12, color:'#555'}}>
          Best Engineers are came from designing. 
          Taking a pencle and paper doing a designing makes us best enginners in the world. You will be one of them. Start designing the dreams.
        </Text>
       
      </View>
    </ScrollView>
  );
}
