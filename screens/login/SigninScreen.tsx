import React from "react";
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const SigninScreen =() =>{
    return(

        <SafeAreaView style = {styles.container}>
            
            <StatusBar backgroundColor={'#ffffff'} barStyle={"dark-content"}></StatusBar>
            <View style={styles.title}>
                <Text style={{fontWeight:'bold',fontSize:40, color:'#8B1C62'}} >Signin</Text>
                <Text style={{paddingTop:10}}>By signing in you are argeeing</Text>
                <Text>Our</Text> 
                <TouchableOpacity onPress={()=>Alert.alert('okookokokok')}><Text style={{color:'blue'}}>Term and privacy</Text></TouchableOpacity>
            </View>
            <View style={styles.form}>
                <View style={styles.group}>
                {/* <Icon name="rocket" color="#eee" size={30} /> */}
                    <TextInput placeholder="Email Address" style ={styles.ip}></TextInput>
                </View>

                <View style={styles.group}>
                {/* <Icon name="rocket" color="#eee" size={30} /> */}
                    <TextInput placeholder="Address" style ={styles.ip}></TextInput>
                </View>

                <View style={styles.group}>
                {/* <Icon name="rocket" color="#eee" size={30} /> */}
                    <TextInput placeholder="Account Name" style ={styles.ip}></TextInput>
                </View>

                <View style={styles.group}>
                {/* <Icon name="rocket" color="#eee" size={30} /> */}
                    <TextInput placeholder="Password" style ={styles.ip} secureTextEntry={true}></TextInput>
               </View>


               <View style={styles.group}>
                {/* <Icon name="rocket" color="#eee" size={30} /> */}
                    <TextInput placeholder="Reload Password" style ={styles.ip}></TextInput>
                </View>
               
            <View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Login</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View>
                <Image source={require('../../assets/images/foot2.jpg')} style={{width:'100%',height:'60%',borderTopLeftRadius:100}}/>
            </View>
        </SafeAreaView>
    );
}   

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EBE7E0',
        
        
    },
    title:{
        marginTop:30,
        alignItems:'center'
    },
    form:{
        marginTop:30,
        paddingHorizontal:30,
        
    },
    group:{
        
        marginTop:15,
        
        
    },
    ip:{
        borderBottomWidth:1,
        backgroundColor:'#fff',
        borderColor:'pink',
        borderRadius:15,
        
    },
    group1:{
        paddingLeft:'70%',
        paddingTop:15
    },
    btn:{
        marginTop:30,
        backgroundColor:'#8B1C62',
        paddingVertical:15,
        alignItems:'center',
        borderRadius:10
    }
    
}) 

export default SigninScreen;