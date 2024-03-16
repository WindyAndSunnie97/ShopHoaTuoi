// Trong file App.js
import React, { useEffect } from 'react';
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
import { HomeStack } from './navigation/HomeStack';

import ProductDetail from './screens/pageorther/ProductDetail';
import { ProfileStack } from './navigation/ProfileStack';
import { ProStack } from './navigation/ProStack';
import SplashScreen from 'react-native-splash-screen';
import CategoryProducts from './screens/pageorther/CategoryProducts';



const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
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
export { App };



