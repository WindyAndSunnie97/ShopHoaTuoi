import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import React from "react";
import CategoryProducts from "../screens/pageorther/CategoryProducts";
import ProductDetail from "../screens/pageorther/ProductDetail";
import StackDetail from "./StackDetail";
import ListProduct from "../screens/home/ListProduct";
import ListCategogy from "../screens/home/ListCategogy";

const Stack = createNativeStackNavigator();
export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = 'HomeScreen' component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
            {/* <Stack.Screen name = 'Detail' component={ProductDetail} options={{headerShown:false}}></Stack.Screen>  */}
            <Stack.Screen name = 'Stackdetail' component={StackDetail} options={{headerShown:false}}></Stack.Screen> 
        </Stack.Navigator>
    )
}