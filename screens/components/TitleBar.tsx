import React from 'react'
import { Text, View } from 'react-native'

type TitleBarProps  = {
    tile:string
}
const TitleBar = ({tile}:TitleBarProps) => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View><Text style={{color:'pink',fontWeight:'bold',fontStyle:'italic',fontSize:20}}>{tile}</Text></View>
      <View><Text style ={{color:'pink',fontWeight:'bold',fontStyle:'italic'}}>More...</Text></View>
    </View>
  );
}
export default TitleBar;
