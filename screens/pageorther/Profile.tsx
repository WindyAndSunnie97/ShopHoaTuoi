import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Icones from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.box}>
      <View style={styles.bar}>
        <Icon name="settings" style={styles.icones} />
        <Icon name="mail" style={styles.icones} />
        <Icon name="cart" style={styles.icones} />
      </View>

      <Image source={require('../../assets/images/pro3.jpg')} style={{ width: '100%', height: 200, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} />

      <View style={styles.row}>
        <Text style={styles.title}>WindyIris</Text>
        <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30, width: '100%' }}>
        <TouchableOpacity style={{ padding: 15, backgroundColor: 'pink', borderRadius: 30, width: 120, alignItems: 'center' }} onPress={() => navigation.navigate("Signin")}>
          <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Signin</Text>
        </TouchableOpacity>
        <Text style={styles.or}>🌷&🌷</Text>
        <TouchableOpacity style={{ padding: 15, backgroundColor: 'pink', borderRadius: 30, width: 120, alignItems: 'center' }} onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <View style={styles.group}>
          <Icones name="card-account-phone" style={styles.icon} />
          <TouchableOpacity style={{ padding: 15, borderRadius: 20, paddingLeft: 35, borderCurve: 'continuous' }} onPress={() => navigation.navigate("Helps")}>
            <Text style={styles.tex}>Helps</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.group}>
          <Icon name="settings" style={styles.icon} />
          <TouchableOpacity style={{ padding: 15, borderRadius: 20, paddingLeft: 35, borderCurve: 'continuous' }} onPress={() => navigation.navigate("Setting")}>
            <Text style={styles.tex}>Setting</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.group}>
          <Icon name="heart" style={styles.icon} />
          <TouchableOpacity style={{ padding: 15, borderRadius: 20, paddingLeft: 35, borderCurve: 'continuous' }} >
            <Text style={styles.tex}>Favourite</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.group}>
          <Icones name="order-bool-ascending-variant" style={styles.icon} />
          <TouchableOpacity style={{ padding: 15, borderRadius: 20, paddingLeft: 35, borderCurve: 'continuous' }} onPress={() => navigation.navigate("OrderManagement")} >
            <Text style={styles.tex}>Order Management</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Profile;

const styles = StyleSheet.create({
  box:{
    width:'100%',
    height:'100%',
    backgroundColor:'#F8DFDD'
  },
  imageBackground:{
    width:'100%',
    height:200,
  },
  container: {
  },
  bar:{
    flexDirection:'row',
    justifyContent:'flex-end',
    marginBottom:-50,
    zIndex:1000,


  },
  icones:{
margin:10,
fontSize:25,
color:'#027353'
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
      fontWeight:'bold',
      alignItems:'center'
    },
    form:{
      marginTop:30,
      paddingHorizontal:30,
      flexDirection:'column-reverse',
      justifyContent:'space-between',
      marginBottom:20
      
  },
  group:{
      
      marginTop:15,
      justifyContent:'center',  
      marginBottom:15,
      borderWidth:1,
      backgroundColor:'#fff',
      borderColor:'pink',
      borderRadius:15,
      paddingLeft:5
      
  },
  ip:{
    borderWidth:1,
    backgroundColor:'#fff',
    borderColor:'pink',
    borderRadius:15,
    paddingLeft:35
    
},
  icon:{
    fontSize:22,
    position:'absolute',
    top:15,
    zIndex:1000,
    paddingLeft:10,
    textAlign:'right'
    
},
tex:{
fontSize:17,
fontWeight:'600',
paddingLeft: 10
}
})