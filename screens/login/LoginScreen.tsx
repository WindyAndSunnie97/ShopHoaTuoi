import React, {useState} from "react";
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BackgoundScreen from "../components/BackgoundScreen";
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
const LoginScreen =({navigation}:any) =>{
        const [accountName, setAccountName] = useState("");
        const [password, setPassword] = useState("");
    
        const handleLogin = async () => {
            try {
                const response = await axios.post("http://10.0.2.2:3000/api/Flowershop/users/login", { accountName, password });
                // Xử lý phản hồi từ API ở đây
                console.log(response.data);
            } catch (error) {
                console.log("Error:", error);
                Alert.alert("Failed to login. Please try again later.");
            }
        };
    return(

        <SafeAreaView style = {styles.container}>
            
            <StatusBar backgroundColor={'#ffffff'} barStyle={"dark-content"}></StatusBar>
            <Icons name="arrow-undo" style={styles.icones} onPress={() => navigation.goBack()} />
            <View style={styles.title}>
            
                <Text style={{fontWeight:'bold',fontSize:40, color:'#8B1C62'}} >Login</Text>
                <Text style={{paddingTop:10}}>By signing in you are argeeing</Text>
                <Text>Our</Text> 
                <TouchableOpacity onPress={()=>Alert.alert('okookokokok')}><Text style={{color:'blue'}}>Term and privacy</Text></TouchableOpacity>
            </View>
            <View style={styles.form}>
                <View style={styles.group}>
                
                 <Icons name="person" style={styles.icon} />
                    <TextInput placeholder="Account Name" style ={styles.ip} onChangeText={text => setAccountName(text)} value={accountName}></TextInput>
                </View>

                <View style={styles.group}>
                 <Icons name="lock-closed" style={styles.icon} /> 
                    <TextInput placeholder="Password" style ={styles.ip} secureTextEntry={true} onChangeText={text => setPassword(text)}value={password}></TextInput>
               </View>

               <View style={styles.group1}>
                <Text style={{fontStyle:'italic'}}>Fogot Password</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color:'#FFFFFF',fontWeight:'bold'}} onPress={handleLogin}>Login</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View>
                <Image source={require('../../assets/images/foot3.jpg')} style={{width:'130%',height:'70%',borderTopLeftRadius:100}}/>
            </View>
        </SafeAreaView>
    );
}   

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EDC1D2',
        
        
    },
    title:{
        marginTop:30,
        alignItems:'center'
    },
    icones: {
        fontSize: 30,
        marginBottom: -45,
        padding: 10
    },
    form:{
        marginTop:30,
        paddingHorizontal:30,
        
    },
    group:{
        
        marginTop:15,
        justifyContent:'center',

        
        
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

export default LoginScreen;