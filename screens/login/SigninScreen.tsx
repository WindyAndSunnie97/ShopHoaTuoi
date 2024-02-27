import React, { useState } from "react";
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const SigninScreen =({navigation}:any) =>{

    const [Name, setName] = useState('');
    const [Email,setEmail] = useState('');
    const [Phone,setPhone] = useState('');
    const [Address,setAddress] = useState('');
    const [AccountName,setAccountName] = useState('');
    const [Password,setPassword] = useState('');
    const [checkemail,setCheckEmail] = useState(false);


    const onSubmit = () =>{
    let formData = {
        Name: Name,
        Email: Email,
        Phone: Phone,
        Address: Address,
        AccountName: AccountName,
        Password: Password    
    }

    axios.post('https://65d0f0e8ab7beba3d5e3ec3a.mockapi.io/Users',formData)
    .then((response)=>{
        if (response.data) {
            Alert.alert(`CONGRATULATIONS ON ${response.data.AccountName} SUCCESSFULLY REGISTERING!!! PLEASE LOG IN RIGHT AWAY ^3^`);
            navigation.navigate('Login');
        }
    }
    
    )
    .catch((err)=>console.log(err))
}


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
                <Icon name="person" style={styles.icon}/>
                    <TextInput placeholder="Name" style ={styles.ip}  onChangeText={(value)=>setName(value)}></TextInput>
                <Text></Text>
                </View>

                <View style={styles.group}>
                <Icon name="email" style={styles.icon}/>
                    <TextInput placeholder="Email Address" style ={styles.ip} onChangeText={(value)=> setEmail(value)}></TextInput>
                </View>

                <View style={styles.group}>
                <Icon name="phone" style={styles.icon}/>
                    <TextInput placeholder="Phone number" style ={styles.ip} onChangeText={(value)=>setPhone(value)}></TextInput>
                </View>

                <View style={styles.group}>
                <Icons name="home" style={styles.icon}/>
                    <TextInput placeholder="Address" style ={styles.ip} onChangeText={(value)=>setAddress(value)}></TextInput>
                </View>

                <View style={styles.group}>
                <Icons name="person" style={styles.icon}/>
                    <TextInput placeholder="Account Name" style ={styles.ip} onChangeText={(value)=>setAccountName(value)}></TextInput>
                </View>

                <View style={styles.group}>
                <Icon name="locked" style={styles.icon}/>
                    <TextInput placeholder="Password" style ={styles.ip} secureTextEntry={true} onChangeText={(value)=>setPassword(value)}></TextInput>
               </View>


               
               
            <View>
                <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
                    <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Singin</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View>
                <Image source={require('../../assets/images/foot2.jpg')} style={{width:'100%',height:'45%',borderTopLeftRadius:100}}/>
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
        paddingLeft:35
        
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
    },
    icon:{
        fontSize:22,
        position:'absolute',
        top:12,
        zIndex:1000,
        paddingLeft:10
    }
    
}) 

export default SigninScreen;