import React from "react";
import { Image, StyleSheet, Text, View, ViewComponent } from "react-native";
import TitleBar from "../components/TitleBar";

const ListProduct =() =>{
    return(
        <>
        <TitleBar tile = "Your Flower"/>

        <View style={styles.container}>
            <View style={styles.item}>
                <View style={styles.sale}>
                    <Text style={{color:'white',textAlign:'center'}}>Sale 20%</Text>
                </View>
                <Image source={require('../../assets/images/logo.png')} style={{width:'100%',height:150}}/>
            <View style = {styles.dess}>
            <Text style={styles.desstext}>Your Flower</Text>
            </View>
            </View>
            
            <View style={styles.item}>
                <Image source={require('../../assets/images/logo.png')} style={{width:'100%',height:150}}/>  
            <View style = {styles.dess}>
            <Text style={styles.desstext}>Your Flower</Text>
            </View>
            </View>

            <View style={styles.item}>
                <Image source={require('../../assets/images/logo.png')} style={{width:'100%',height:150}}/>
            <View style = {styles.dess}>
            <Text style={styles.desstext}>Your Flower</Text>
            </View>
            </View>

            <View style={styles.item}>
                <Image source={require('../../assets/images/logo.png')} style={{width:'100%',height:150}}/>
            <View style = {styles.dess}>
            <Text style={styles.desstext}>Your Flower</Text>
            </View>
        </View>
        </View>

        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-between'
    },
    item:{
        width: '40%',
        paddingTop:10
    },
    dess:{
        backgroundColor:'pink',
        paddingVertical:8
    },
    desstext:{
color:'purple',
textAlign:'center'
    },
    sale:{
        backgroundColor:'rgba(0,0,0,7)',
        width:100,
        // height:100,
        borderRadius:30,
        padding:7,
        position:'absolute',
        top:10,
        right:10,
        zIndex:1000,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default ListProduct;