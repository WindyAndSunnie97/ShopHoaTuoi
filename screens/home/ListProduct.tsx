import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View, ViewComponent } from "react-native";
import TitleBar from "../components/TitleBar";
import { TouchableOpacity } from "react-native";
import BackgroundProduct from "../components/BackgroundProduct";
import ProductDetail from "../pageorther/ProductDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export const StackDetail = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = 'Detail' component={ProductDetail} options={{headerShown:false}}></Stack.Screen> 
      </Stack.Navigator>
       
    )
}
const ListProduct = ({navigation}:any) => {
    const [products, setProducts] = useState([]);

    const getAPI = () => {
        return fetch(`http://10.0.2.2:3000/api/Flowershop/product`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                return response.json();
            })
            .then((data) => {
                if (data) {
                    // Lọc các sản phẩm có thuộc tính isFeatured là true
                    const featuredProducts = data.filter((product: { isFeatured: boolean; }) => product.isFeatured === true);
                    setProducts(featuredProducts);
                } else {
                    console.error('Data is null or undefined');
                }
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getAPI();
    }, []);


    return(

        <>
 <TitleBar tile = "Your Flower"/>

        <View style={styles.container}>
            
            <FlatList
            scrollEnabled={false}
            data={products}
            numColumns={2}
            columnWrapperStyle={styles.row}
                renderItem={({item}:any)=> 
                
            <View style={styles.item}>
                <TouchableOpacity onPress={() => navigation.navigate("StackDetail", {productId: item.id })}>  
                <Image source={{uri:item.image}} style={styles.box} />
                
                <View style={styles.dess}>
                    <Text style = {{color:'#000', textAlign:'left',paddingLeft:5,fontSize:20,fontWeight:'bold'}}>🌷 {item.name}</Text>
                    <Text style = {{color:'#000', textAlign:'left',paddingLeft:5,fontSize:20,fontWeight:'bold'}}>$ {item.price}💸</Text>
                </View>
                </TouchableOpacity>
                </View>
               
            }/>
            
        </View>
   
        </>
    
    )

        }


const styles = StyleSheet.create({
    container1:{
                flexDirection: 'row',
                flexWrap:'wrap',
                justifyContent: 'space-between'
            },
    container:{
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',

        
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
export default ListProduct;