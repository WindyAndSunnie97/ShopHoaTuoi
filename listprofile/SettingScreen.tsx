import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingScreen = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <View style={styles.cont1}>
    <Icon name="arrow-undo" style={styles.icones} onPress={() => navigation.goBack()} />
      <Text style={styles.title}>Settings</Text>
      </View>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Privacy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  cont1:{
flexDirection:'row',
justifyContent:'flex-start'
  },
  icones: {
    fontSize: 25,
paddingRight:10,
color:'green'
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 18,
  },
});

export default SettingScreen;
