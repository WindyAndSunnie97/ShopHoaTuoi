import React,  { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TitleBar from "../components/TitleBar";
import { NavigationProp, useNavigation } from '@react-navigation/native';



const ListCategogy = ({navigation}:any) =>{
  

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
                <TouchableOpacity onPress={() => navigation.navigate("CatPro", { category: item.id })} >  
            <View style={styles.item}>
           
                <Image source={{uri:item.image}} style={styles.img} />
               
                <View style={styles.dess}>
                    <Text style = {{color:'pink', textAlign:'left',paddingLeft:5,fontSize:20,fontWeight:'bold', marginTop:-40}}>{item.name}🌷</Text>
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
        height:320,
       padding:15,
       paddingLeft:10
    },
    item:{
        width:120,
        height:180,
        padding:1,
        borderRadius: 10,
        borderWidth:3,
        borderColor:'#A9EDE9',
        marginRight:10,
        marginBottom:15
    },
    img:{
        width:120,
        height:'100%',
        borderRadius:10
    },
    dess:{

marginTop:30,

    }
})
export default ListCategogy;