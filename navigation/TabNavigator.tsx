// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Product from "../screens/pageorther/Product";
// import { HomeStack } from "./stacks/HomeStack";
// import React from "react";
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Profile from "../screens/pageorther/Profile";

// const Tab = createBottomTabNavigator();

// export const TabNavigator = () => {

//     const optionScreen = ({route} :any) => ({
//         tabBarIcon: ({ focused, color, size }: any ) => {
//             let iconName ='string';

//             if ( route.name === 'Home2') {
//                 iconName = focused
//                 ? 'home'
//                 : 'home-outline';

//             }else if (route.name === 'Product') {
//                 iconName = focused ? 'flower' : 'flower-outline';

//             }

//             //you can return any component that you like here!
//             return <Ionicons name ={iconName || 'default-icon'} size={size} color ={color} />;

//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//         headerShown:false,
//         tabBarStyle:{backgroundColor:'pink'},
//         tabBarLabeStyle:{color:'#fff'}
//     })



//     return (
//         <Tab.Navigator screenOptions={optionScreen}>
//             <Tab.Screen name = "Home2" component={HomeStack}/>
//             <Tab.Screen name = "Product" component={Product}/>
//             <Tab.Screen name = "Profile" component={Profile}/>
//         </Tab.Navigator>
//     )
// }