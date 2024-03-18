import React, { useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Header from "../components/Header"
import ListCategogy from "./ListCategogy"
import ListProduct from "./ListProduct"
import { useNavigation } from "@react-navigation/native"
import Icon from 'react-native-vector-icons/Ionicons';
import Introduce from "../components/Introduce"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProductDetail from "../pageorther/ProductDetail.tsx"
import CategoryProducts from "../pageorther/CategoryProducts"
import BackgoundScreen from "../components/BackgoundScreen"


type Props ={
  title:string,
}

const Title = ({title}:Props) => {
  return(
    <>
    <BackgoundScreen>
    <View style ={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{fontWeight:'bold', color:'pink', textTransform:'uppercase'}}>{title}</Text>
      <TouchableOpacity><Text> More...</Text></TouchableOpacity>
    </View>
    </BackgoundScreen>
    </>
  )
}

const HomeScreen:React.FC = () => { 
  const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        // Thực hiện xử lý tìm kiếm dựa trên giá trị searchValue
        console.log('Searching for:', searchValue);

        // Sau khi xử lý tìm kiếm, xóa giá trị trong Input
        setSearchValue('');
    };
  const email = "example@example.com";
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={{ paddingHorizontal: 10 }}>
      <Header email={email}/>
      <View style={styles.seach}>
      <TextInput placeholder="Search" style ={styles.text}  onChangeText={(text) => setSearchValue(text)}
    onSubmitEditing={handleSearch}></TextInput>
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