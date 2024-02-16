import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import TitleBar from "../components/TitleBar";

const ListCtegogy = () =>{
    return (
        <>
        <TitleBar tile="Categogy"/> 
        <View style={styles.container}>
           
            <View style={styles.item}><Image source={require('../../assets/images/logo.png')} style={{width:'100%',height:80}}/></View>
            <View style={styles.item}><Image source={require('../../assets/images/logo.png')} style={{width:'100%',height:80}}/></View>
            <View style={styles.item}><Image source={require('../../assets/images/logo.png')} style={{width:'100%',height:80}}/></View>
            <View style={styles.item}><Image source={require('../../assets/images/logo.png')} style={{width:'100%',height:80}}/></View>
           
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
       padding:15
    },
    item:{
        width:'20%',
        padding:10,
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#000'
    }
})
export default ListCtegogy;