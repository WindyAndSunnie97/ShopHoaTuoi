import React from "react";
import BackgoundScreen from "../components/BackgoundScreen";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const WelcomeScreen =()=> {
    return (
        <BackgoundScreen> 
            <View> 
         <View style = {styles.intro}>
        <Text style={{color:'white',fontSize:40, fontStyle:'italic',fontFamily:'Dancing Script'}}>Welcome to WindyIris FlowerShop</Text>
        </View>
        <Text style ={{fontSize:20, color:'orange',fontFamily:'Lobster'}}> 
Welcome to WindyIris - where elegance blooms, and every flower tells a beautiful and meaningful story. We are the home of delicate blooms and vibrant hues, where you can find gentle fragrances and sophistication in every petal. 
At WindyIris, we honor the natural beauty of each flower species and provide you with truly special floral shopping experiences. 
Come join us and explore the world of exquisite and refined flowers, where passion and dedication are expressed in every bloom!</Text>
        </View>
        </BackgoundScreen>
    );
}
const styles = StyleSheet.create ({
Ibg:{
    
},
intro:{
    zIndex:1000,

}
})
export default WelcomeScreen;