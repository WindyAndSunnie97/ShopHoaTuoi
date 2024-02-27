
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Profile = ({navigation}:any) => {
  return (

   <SafeAreaView>
   <Image source={require('../../assets/images/foot3.jpg')} style={{width:'100%',height:200,borderBottomLeftRadius:30, borderBottomRightRadius:30}}/>

    <View style= {styles.row}>
  <Text style={styles.title}>WindyIris</Text>
  <Image style={styles.logo}source={require('../../assets/images/logo.png')} />
</View>

    <View style= {{flexDirection:'row', justifyContent:'space-around', marginTop:30}}>
      <TouchableOpacity style={{padding:15,backgroundColor:'pink', borderRadius:30}} onPress={()=> navigation.navigate("Signin")} >
        <Text>Signin</Text>
      </TouchableOpacity>
<Text style={styles.or}>OR</Text>
      <TouchableOpacity style={{padding:15,backgroundColor:'pink', borderRadius:30}} onPress={()=> navigation.navigate("Login")} >
        <Text>Login</Text>
      </TouchableOpacity> 
    </View>

  
     
   </SafeAreaView>
  );
}
export default Profile;

const styles = StyleSheet.create({
  imageBackground:{
    width:'100%',
    height:200,

  },
  container: {

    
    
    


  },
  title: {
    color: 'red',
    //fontStyle:'italic',
    fontWeight:'bold',
    fontSize:30,
    fontFamily:'Lobster',
    alignItems:'center'
    
    
  },
  logo: {
    width: 100,
    height:100,
    borderRadius:100  ,
    justifyContent:'center',
    marginBottom:10,
    
  },
    row:{
      flexDirection:'column-reverse',
      justifyContent:'center',
      marginTop:-45,
    alignItems:'center',
    },
    or:{
      textAlign:'center',
      fontSize:25,
      color:'purple',
      fontWeight:'bold'
    }
})