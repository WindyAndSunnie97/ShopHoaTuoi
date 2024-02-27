import React,  { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import TitleBar from "../components/TitleBar";

const ListCategogy = () =>{

// const listCate =[
//     {id: 1, name: 'Rose'},
//     {id: 2, name: 'Tulip'},
//     {id: 3, name: 'Jamine'},
//     {id: 4, name: 'Convallaria majalis'},
//     {id: 5, name: 'Iris'},
//     {id: 6, name: 'Paeonia'},
//     {id: 7, name: 'Lycoris'},
//     {id: 8, name: 'Wisteria sinensis'},
// ]

const [products,setProducts] = useState([]);

const getAPi = () => {
    return fetch('https://65d0f0e8ab7beba3d5e3ec3a.mockapi.io/products').
    then((response)=>response.json())
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
        <ScrollView horizontal showsHorizontalScrollIndicator = {false} style ={styles.cate}>
        <View style={styles.container}>

            <FlatList
            data={products}
                renderItem={({item}:any)=>   
            <View style={styles.item}>

                <Image source={{uri:item.imageUrl}} style={styles.img} />
                
                <View style={styles.dess}>
                    <Text style = {{color:'pink', textAlign:'left',paddingLeft:5,fontSize:20,fontWeight:'bold', marginTop:-40}}>🌷 {item.name}</Text>
                </View>
        </View>
                }/>
        </View>
        </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    cate :{
                
    },
    container:{
        width:'100%',
       padding:15,
       paddingLeft:10
    },
    item:{
        width:'100%',
        height:150,
        padding:1,
        borderRadius: 10,
        borderWidth:3,
        borderColor:'#A9EDE9',
        marginRight:10,
        marginBottom:15
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius:10
    },
    dess:{


    }
})
export default ListCategogy;