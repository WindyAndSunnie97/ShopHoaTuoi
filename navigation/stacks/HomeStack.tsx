import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/HomeScreen";
import React from "react";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = 'Home' component={HomeScreen} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}