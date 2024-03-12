import React, { useState } from "react";
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const SigninScreen = ({navigation}:any) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [accountname, setAccountName] = useState("");

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      accountname: accountname,
    };

    // send a POST  request to the backend API to register the user
    axios
      .post(`http://10.0.2.2:3000/api/Flowershop/users/register`, user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "An error occurred while registering"
        );
        console.log("registration failed", error);
      });
  };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#ffffff'} barStyle={"dark-content"} />
            <Icons name="arrow-undo" style={styles.icones} onPress={() => navigation.goBack()} />
            <View style={styles.title}>
                <Text style={{ fontWeight: 'bold', fontSize: 40, color: '#8B1C62' }} >Signin</Text>
                <Text style={{ paddingTop: 10 }}>By signing in you are argeeing</Text>
                <Text>Our</Text>
                <TouchableOpacity onPress={() => Alert.alert('okookokokok')}><Text style={{ color: 'blue' }}>Term and privacy</Text></TouchableOpacity>
            </View>
            <View style={styles.form}>
                <View style={styles.group}>
                    <Icon name="person" style={styles.icon} />
                    <TextInput
                        placeholder="Name"
                        style={styles.ip}
                        onChangeText={(value) => setName(value)} // Cập nhật state 'name'
                    />
                    <Text></Text>
                </View>
                <View style={styles.group}>
                    <Icon name="email" style={styles.icon} />
                    <TextInput
                        placeholder="Email Address"
                        style={styles.ip}
                        onChangeText={(value) => setEmail(value)} // Cập nhật state 'email'
                    />
                </View>
                <View style={styles.group}>
                    <Icon name="locked" style={styles.icon} />
                    <TextInput
                        placeholder="Password"
                        style={styles.ip}
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)} // Cập nhật state 'password'
                    />
                </View>
                <View style={styles.group}>
                    <Icon name="phone" style={styles.icon} />
                    <TextInput
                        placeholder="Phone number"
                        style={styles.ip}
                        onChangeText={(value) => setPhone(value)} // Cập nhật state 'phone'
                    />
                </View>
                <View style={styles.group}>
                    <Icons name="person" style={styles.icon} />
                    <TextInput
                        placeholder="Account Name"
                        style={styles.ip}
                        onChangeText={(value) => setAccountName(value)} // Cập nhật state 'accountname'
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => handleRegister()}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Singin</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Image source={require('../../assets/images/foot2.jpg')} style={{ width: '100%', height: '45%', borderTopLeftRadius: 100 }} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBE7E0',
    },
    icones: {
        fontSize: 30,
        marginBottom: -45,
        padding: 10
    },
    title: {
        marginTop: 30,
        alignItems: 'center'
    },
    form: {
        marginTop: 30,
        paddingHorizontal: 30,
    },
    group: {
        marginTop: 15,
    },
    ip: {
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'pink',
        borderRadius: 15,
        paddingLeft: 35
    },
    group1: {
        paddingLeft: '70%',
        paddingTop: 15
    },
    btn: {
        marginTop: 30,
        backgroundColor: '#8B1C62',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10
    },
    icon: {
        fontSize: 22,
        position: 'absolute',
        top: 12,
        zIndex: 1000,
        paddingLeft: 10
    }
});

export default SigninScreen;
