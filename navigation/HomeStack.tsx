import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import React from "react";
import CategoryProducts from "../screens/pageorther/CategoryProducts";
import ProductDetail from "../screens/pageorther/ProductDetail";
import StackDetail from "./StackDetail";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = 'HomeScreen' component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name = 'CatPro' component={CategoryProducts}  />  
            <Stack.Screen name = 'StackDetail' component={StackDetail}  />  
        </Stack.Navigator>
    )
}