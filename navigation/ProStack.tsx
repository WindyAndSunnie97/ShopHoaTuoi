import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import React from "react";
import CategoryProducts from "../screens/pageorther/CategoryProducts";
import ProductDetail from "../screens/pageorther/ProductDetail";
import StackDetail from "./StackDetail";
import Product from "../screens/pageorther/Product";

const Stack = createNativeStackNavigator();
export const ProStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pro" component={Product} options={{headerShown:false}}></Stack.Screen>
            
            <Stack.Screen name = 'Detail' component={ProductDetail} options={{headerShown:false}}></Stack.Screen> 
          <Stack.Screen name = 'CatPro' component={CategoryProducts}></Stack.Screen> 
             
        </Stack.Navigator>
    )
}