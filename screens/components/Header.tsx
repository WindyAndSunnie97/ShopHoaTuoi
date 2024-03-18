import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Header = ({navigation}:any) => {

  const handleNavigateToProfile = () => {
    // Chuyển hướng sang màn hình ProfileScreen và truyền thông tin người dùng
    navigation.navigate("Profile", { userEmail: email });
  };
  return (
    <View style={styles.container}>

      <View >
        <Text style={styles.title}>WindyIris</Text>
      </View>
      <TouchableOpacity onPress={handleNavigateToProfile}>
        <Image style={styles.logo}source={require('../../assets/images/logo.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:20,
    paddingTop:15
  },
  title: {
    color: 'red',
    //fontStyle:'italic',
    fontWeight:'bold',
    fontSize:30,
    fontFamily:'Lobster'
    
    
  },
  logo: {
    width: 80,
    height:80,
    borderRadius:100  }
});
export default Header;
