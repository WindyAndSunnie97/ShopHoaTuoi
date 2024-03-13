import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ViewComponent } from "react-native";
import TitleBar from "../components/TitleBar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BackgoundScreen from "../components/BackgoundScreen";
import BackgroundProduct from "../components/BackgroundProduct";
import axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";
const Product = ({ navigation }:any) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(`http://10.0.2.2:3000/api/Flowershop/product/product`);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        getProducts();
    }, []);
    return(

        <>
        
<BackgroundProduct>
    <ScrollView>
    <Icon name="arrow-undo" style={styles.icones} onPress={() => navigation.goBack()} />
<View style={styles.header}>
                <Text style={{color:'pink',textAlign:'center',fontSize:20}}>🌸🌸Flowers 🌸🌸</Text>
            </View>
        <View style={styles.container}>
            
            <FlatList
            scrollEnabled={false}
            data={products}
            numColumns={2}
            columnWrapperStyle={styles.row}
                renderItem={({item}:any)=> 
              
                
            <View style={styles.item}>
                <TouchableOpacity onPress={() => navigation.navigate("Detail", {productId: item.id })}>
                <Image source={{uri:item.image}} style={styles.box} />
                
                <View style={styles.dess}>
                    <Text style = {{color:'#000', textAlign:'left',paddingLeft:5,fontSize:20,fontWeight:'bold'}}>🌷 {item.name}</Text>
                    <Text style = {{color:'#000', textAlign:'left',paddingLeft:5,fontSize:20,fontWeight:'bold'}}>$ {item.price}💸</Text>
                </View>
                </TouchableOpacity>
                </View>
               
            }/>
            
        </View>
        </ScrollView>
        </BackgroundProduct>
        </>
    
    )
}



const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',

        
    },
    icones: {
        fontSize: 30,
        marginBottom: -45,
        padding: 10
    },
    header:{
width:250,
height:40,
backgroundColor:'green',
marginLeft:75,
paddingRight:10,
marginTop:30,
justifyContent:'center',
borderRadius:30,


    },
    item:{
       
        paddingTop:5,
        paddingBottom:5,
        paddingRight:10,
        padding:15,
        width:'47%',
        height:'100%',
        backgroundColor:'#A9EDE9',
        borderRadius:15,
        
        
        
    },
    dess:{
        backgroundColor:'#FBD6E3',
        paddingVertical:8,
        justifyContent:'space-around',
        flexDirection:'column',
        marginTop:10,
        marginBottom:5,
        borderRadius:5,
        

       
        
    },
    desstext:{
color:'purple',
textAlign:'center'
    },
    
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:15,
        borderRadius:15,
    },
    dess1:{

    },
    label:{
    
    },
    box:{
        width:'100%',
         height: 150,
          //padding:10 ,
          justifyContent:'center',
          alignItems:'center',
          marginTop:5,
          borderRadius:10
    }
})

export default Product;