import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View, ViewComponent } from "react-native";
import TitleBar from "../components/TitleBar";
import { TouchableOpacity } from "react-native";
import BackgroundProduct from "../components/BackgroundProduct";

const ListProduct =() =>{
//     return(
//         <>
//         <TitleBar tile = "Your Flower"/>

//         <View style={styles.container}>
          
//             <View style={styles.item} >
//                 <View style={styles.sale}>
//                     <Text style={{color:'white',textAlign:'center'}}>Sale 20%</Text>
//                 </View>
//                 <Image source={require('../../assets/images/logo.png')} style={{width:'100%',height:150}} />
//             <View style = {styles.dess}>
//             <Text style={styles.desstext}>Your Flower</Text>
//             </View>
//             </View>
            
            
//             <View style={styles.item}>
//                 <Image source={require('../../assets/images/logo.png')} style={{width:'100%',height:150}}/>  
//             <View style = {styles.dess}>
//             <Text style={styles.desstext}>Your Flower</Text>
//             </View>
//             </View>

//             <View style={styles.item}>
//                 <Image source={require('../../assets/images/logo.png')} style={{width:'100%',height:150}}/>
//             <View style = {styles.dess}>
//             <Text style={styles.desstext}>Your Flower</Text>
//             </View>
//             </View>

//             <View style={styles.item}>
//                 <Image source={require('../../assets/images/logo.png')} style={{width:'100%',height:150}}/>
//             <View style = {styles.dess}>
//             <Text style={styles.desstext}>Your Flower</Text>
//             </View>
//         </View>
//         </View>

//         </>
//     )
// }
// const styles = StyleSheet.create({
//     container:{
//         flexDirection: 'row',
//         flexWrap:'wrap',
//         justifyContent: 'space-between'
//     },
//     item:{
//         width: '40%',
//         paddingTop:10,
//         paddingBottom:10,
//         paddingRight:1,
        


//     },
//     dess:{
//         backgroundColor:'pink',
//         paddingVertical:8,
        
//     },
//     desstext:{
// color:'purple',
// textAlign:'center'
//     },
//     sale:{
//         backgroundColor:'pink',
//         width:60,
//         // height:100,
//         borderRadius:40,
//         padding:7,
//         position:'absolute',
//         top:10,
//         right:10,
//         zIndex:1000,
//         justifyContent:'center',
//         alignItems:'center'
//     }
// })

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

                <Image source={{uri:item.imageUrl}} style={styles.box} />
                
                <View style={styles.dess}>
                    <Text style = {{color:'#000', textAlign:'left',paddingLeft:5,fontSize:20,fontWeight:'bold'}}>🌷 {item.name}</Text>
                    <Text style = {{color:'#000', textAlign:'left',paddingLeft:5,fontSize:20,fontWeight:'bold'}}>$ {item.price}💸</Text>
                </View>

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