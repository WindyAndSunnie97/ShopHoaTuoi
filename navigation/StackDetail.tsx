import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import CategoryProducts from "../screens/pageorther/CategoryProducts";
import ListCategogy from "../screens/home/ListCategogy";
import ProductDetail from "../screens/pageorther/ProductDetail";


const Stack = createNativeStackNavigator();
export const StackDetail = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = 'Detail' component={ProductDetail} options={{headerShown:false}} />  
            
      </Stack.Navigator>
       
    )
}
export default StackDetail;