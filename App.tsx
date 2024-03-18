import React, { useEffect } from 'react';
import { Provider } from 'react-redux'; // Import Provider

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
import store from './store';
import { StackNavigator } from './navigation/StackNavigator';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return(
    <Provider store={store}>
<StackNavigator/>
    </Provider>
  )}
export {App};