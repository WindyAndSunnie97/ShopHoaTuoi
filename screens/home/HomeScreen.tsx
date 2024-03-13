import React from "react"
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Header from "../components/Header"
import ListCategogy from "./ListCategogy"
import ListProduct from "./ListProduct"
import { useNavigation } from "@react-navigation/native"
import Icon from 'react-native-vector-icons/Ionicons';
import Introduce from "../components/Introduce"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProductDetail from "../pageorther/ProductDetail"
import CategoryProducts from "../pageorther/CategoryProducts"


type Props ={
  title:string,
}

const Stack = createNativeStackNavigator();
export const StackDetail = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen name = 'Detail' component={ProductDetail} options={{headerShown:false}}></Stack.Screen> 
          <Stack.Screen name = 'CatPro' component={CategoryProducts}></Stack.Screen> 
    </Stack.Navigator>
     
  )
}

const Title = ({title}:Props) => {
  return(
    <>
    <View style ={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{fontWeight:'bold', color:'pink', textTransform:'uppercase'}}>{title}</Text>
      <TouchableOpacity><Text> More...</Text></TouchableOpacity>
    </View>
    </>
  )
}

const HomeScreen:React.FC = () => { 
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={{ paddingHorizontal: 15 }}>
      <Header />
      <View style={styles.seach}>
      <TextInput placeholder="Search" style ={styles.text}></TextInput>
      <Icon name="search" style={styles.icon}/>
      </View>
      <Introduce/>
      <ListCategogy />
      <ListProduct />
    </View>
    </ScrollView>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
seach:{
  width:'100%',
  height:40,
  padding:1,
  borderRadius: 30,
  borderWidth:1,
  borderColor:'#A9EDE9',
  justifyContent:'space-between',
  flexDirection:'row',
  marginBottom:15

},
text:{
  //tintColor:'Gray',
  color:'gray',
  padding:10,
  textTransform:'capitalize'
},
icon:{
  fontSize:22,
  position:'absolute',
  top:8,
  zIndex:1000,
  paddingLeft:340
}
})