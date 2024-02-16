import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>WindyIris</Text>
      </View>
      <View>
        <Image style={styles.logo}source={require('../../assets/images/logo.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  title: {
    color: 'red',
    fontStyle:'italic',
    fontWeight:'bold',
    fontSize:30,
    
    
  },
  logo: {
    width: 100,
    height:100,
  }
});
export default Header;
