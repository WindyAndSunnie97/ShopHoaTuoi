import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icones from 'react-native-vector-icons/MaterialCommunityIcons';

const Account = ({ navigation }: any) => {
  const [userData, setUserData] = useState<any>(); // Lưu thông tin người dùng

  useEffect(() => {
    // Lấy thông tin người dùng từ nơi lưu trữ (ví dụ: AsyncStorage, Redux store, ...)
    const userDataFromStorage = {}; // Lấy thông tin từ lưu trữ
    setUserData(userDataFromStorage);
  }, []); // Khi component mount, chỉ chạy một lần để lấy thông tin người dùng

  return (
    <View style={styles.container}>
      <View style={styles.cont1}>
        <Icon name="arrow-undo" style={styles.icones} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Account</Text>
      </View>

      {userData && (
        <View style={styles.form}>
          <View style={styles.group}>
            <Icones name="card-account-phone" style={styles.icon} />
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.text}>{userData.name}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <Icon name="settings" style={styles.icon} />
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.text}>{userData.email}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <Icon name="heart" style={styles.icon} />
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.text}>{userData.phone}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <Icones name="order-bool-ascending-variant" style={styles.icon} />
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.text}>{userData.accountName}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cont1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15
  },
  container: {},
  icones: {
    margin: 10,
    fontSize: 25,
    color: '#027353'
  },
  title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Lobster',
    alignItems: 'center'
  },
  form: {
    marginTop: 30,
    paddingHorizontal: 30,
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  group: {
    marginTop: 15,
    justifyContent: 'center',
    marginBottom: 15,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'pink',
    borderRadius: 15,
    paddingLeft: 5
  },
  touchable: {
    padding: 15,
    borderRadius: 20,
    paddingLeft: 35,
    borderCurve: 'continuous'
  },
  text: {
    fontSize: 17,
    fontWeight: '600',
    paddingLeft: 10
  },
  icon: {
    fontSize: 22,
    position: 'absolute',
    top: 15,
    zIndex: 1000,
    paddingLeft: 10,
    textAlign: 'right'
  }
});

export default Account;
