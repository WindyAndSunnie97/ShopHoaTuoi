// Trong file App.js
import React from 'react';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen';
import WelcomeScreen from './screens/login/WelcomeScreen';
import SigninScreen from './screens/login/SigninScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './screens/pageorther/Product';

import Profile from './screens/pageorther/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStack } from './navigation/stacks/HomeStack';
import { ProfileStack } from './navigation/stacks/ProfileStack';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator} options={{headerShown:false}} ></Stack.Screen>
        <Stack.Screen name="Product" component={Product} ></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile} ></Stack.Screen>
      </Stack.Navigator> */}
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color,size}) => {
          let iconName:string = '';

          if (route.name === 'Home' ) {
            iconName = focused 
            ? 'home'
            : 'home-outline';

          }
          else if (route.name === 'Product') {
            iconName = focused
            ? 'flower'
            : 'flower-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused
            ? 'person'
            : 'person-outline';
          }


          return <Ionicons name={iconName} size={size} color={color}/>        
        },
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'black',
        headerShown:false

      })}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} ></Stack.Screen>
        <Stack.Screen name="Product" component={Product} ></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileStack} ></Stack.Screen>
      </Tab.Navigator>
  </NavigationContainer>
   );
}
export { App };
