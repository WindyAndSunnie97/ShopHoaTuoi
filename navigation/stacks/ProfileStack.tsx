import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../../screens/login/LoginScreen";
import SigninScreen from "../../screens/login/SigninScreen";
import Profile from "../../screens/pageorther/Profile";


const Stack = createNativeStackNavigator();
export const ProfileStack = ()=> {
    return(
        <Stack.Navigator >
            <Stack.Screen name="Pro" component={Profile} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="Signin" component={SigninScreen} options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} ></Stack.Screen>
           
        </Stack.Navigator>
    )
}