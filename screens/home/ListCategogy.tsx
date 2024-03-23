import React,  { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TitleBar from "../components/TitleBar";
import { CommonActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetail from "../pageorther/ProductDetail.tsx";
import CategoryProducts from "../pageorther/CategoryProducts";


const Stack = createNativeStackNavigator();
export const StackDetail = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = 'CatPro' component={CategoryProducts}></Stack.Screen> 
      </Stack.Navigator>
       
    )
}
const ListCategogy = () =>{
  const navigation = useNavigation();

const [products,setProducts] = useState([]);

const getAPi = () => {
    return fetch('http://10.0.2.2:3000/api/Flowershop/categories')
    .then((response)=>response.json())
    .then((data)=>setProducts(data))
    .catch(err=>console.log(err))
}

useEffect(()=>{
    getAPi();
},[]
)

    return (
        <>
        
        <TitleBar tile="Categogy"/> 
        <View style={styles.container}>

            <FlatList
            horizontal
            data={products}
                renderItem={({item}:any)=> 
                <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate("CatPro", { categoryId: item.category }) )} >  
            <View style={styles.item}>
           
                <Image source={{uri:item.image}} style={styles.img} />
               
                <View style={styles.dess}>
                    <Text style = {styles.text}>💮{item.name}</Text>
                </View>
        </View>
        </TouchableOpacity>
                }/>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    cate :{
                
    },
    container:{
        width:'100%',
        height:300,
       padding:15,
       paddingLeft:10
    },
    item:{
        width:280,
        height:220,
        borderRadius: 20,
        //borderWidth:3,
        //borderColor:'#A9EDE9',
        marginRight:10,
        marginLeft:20,
        marginBottom:15,
        flexDirection:'column-reverse',
        backgroundColor:'rgba(255, 215, 0,0.3)'

    },
    img:{
        width:'80%',
        height:150,
        borderRadius:10,
        marginRight:10,
        marginLeft:25,
        marginBottom:10
       
       
    },
    dess:{

width:'100%',
height:'70%',
backgroundColor: 'rgba(173, 216, 220, 1)',
borderRadius: 10,
marginBottom:-10,
borderBottomLeftRadius:33,
borderBottomRightRadius:33,

    },
    text:{
        color:'brown',
        fontSize:25,
        fontWeight:'bold',
        width:'100%',
        height:'100%',
        alignItems:'center',
        textAlign:'center',
        marginTop:95

    }
})
export default ListCategogy;
//{{color:'black',textAlign:'center',marginBottom:-85,fontSize:22,fontWeight:'bold',width:'100%',height:'100%',}}