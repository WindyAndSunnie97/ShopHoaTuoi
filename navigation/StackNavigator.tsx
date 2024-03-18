// Trong file App.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Provider } from 'react-redux';
import { HomeStack } from './HomeStack';
import { ProStack } from './ProStack';
import { ProfileStack } from './ProfileStack';
import SplashScreen from 'react-native-splash-screen';



const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    
  <NavigationContainer>
    
      <Tab.Navigator screenOptions={({route}:any) => ({
        tabBarIcon: ({ focused, color,size}:any) => {
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
        <Tab.Screen name="Home" component={HomeStack} options={{headerShown:false}} ></Tab.Screen>
        <Tab.Screen name="Product" component={ProStack} options={{headerShown:false}}  ></Tab.Screen>
        <Tab.Screen name="Profile" component={ProfileStack} ></Tab.Screen>
      </Tab.Navigator>
  </NavigationContainer>
   );
}
export { StackNavigator };



