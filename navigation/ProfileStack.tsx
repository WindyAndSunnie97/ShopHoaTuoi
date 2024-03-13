import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Profile from "../screens/pageorther/Profile";
import SigninScreen from "../screens/login/SigninScreen";
import LoginScreen from "../screens/login/LoginScreen";
import SettingScreen from "../listprofile/SettingScreen";
import OrderManagement from "../listprofile/OrderManagement";
import Helps from "../listprofile/Helps";
import ProductDetail from "../screens/pageorther/ProductDetail";


const Stack = createNativeStackNavigator();
export const ProfileStack = ()=> {
    return(
        <Stack.Navigator >
            <Stack.Screen name="Pro" component={Profile} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="Signin" component={SigninScreen} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="Setting" component={SettingScreen} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="OrderManagement" component={OrderManagement} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="Helps" component={Helps} options={{headerShown:false}} ></Stack.Screen>
        </Stack.Navigator>  
    )
}