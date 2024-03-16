import React, { useState } from 'react';
import { Text, View, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CartItem } from './CartItem';
import { useNavigation } from '@react-navigation/native';

//const navigation = useNavigation
const Cart: React.FC = ({navigation}:any) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const handleAddToCart = () => {
        const newItem: CartItem = {
            id: 1,
            image:"null",
            name: "Product 1",
            price: 10,
            quantity: 1
        };
        setCart([...cart, newItem]);
    };

    const handleRemoveFromCart = (id: number) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    const getTotal = (): number => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <View>
            <Text style={{fontSize:30, fontWeight:'bold', alignItems:'center',color:'pink', textAlign:'center'}}>Cart</Text>
            <Button title="Add Item" onPress={handleAddToCart} />
            <View>
                {cart.map(item => (
                    <View key={item.id}>
                        <View  style={styles.frame}>
                            <Image source={require('../assets/images/linhlan.jpg')} style={styles.img} />
                        <View style={styles.text}>
                            <Text style={{fontSize:25,fontWeight:'bold',fontStyle:'italic',color:'black',marginBottom:5}}>{item.name}</Text>
                            <Text style={{fontSize:18,fontWeight:'bold',fontStyle:'italic',color:'black',marginBottom:5}}>Price: ${item.price}</Text>
                        
                            <Text style={{fontSize:18,fontWeight:'bold',fontStyle:'italic',color:'black',marginBottom:5}}>Quantity: {item.quantity}</Text>
                            </View>
                            </View>
                            <View style = {{width:80,height:40,justifyContent:'space-around',alignItems:'stretch',}}>
                            <Button title="Remove" onPress={() => handleRemoveFromCart(item.id)} />
                            </View>
                    </View>
                ))}
            </View>
            <Text style={{fontSize:30,fontWeight:'bold'}}>Total: ${getTotal()}</Text>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("OrderManagement")}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20 }} >Pay now</Text>
                    </TouchableOpacity>
        </View>
       
    );
};
const styles = StyleSheet.create({   
frame:{
    flexDirection:'row',
    marginTop:20
},
    img:{
width:100,
height:100,
borderRadius:100,

    },
    text:{
        flexDirection:'column',
        marginLeft:25,
        marginTop:5,
        width:250,
        height:100
    },


    btn:{
        marginTop: '100%',
        backgroundColor: 'pink',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        width: '70%',
        height: 60,
        justifyContent: 'center',
        marginLeft: 60,
        marginBottom:20,

    }
})
export default Cart;
//{ uri: item.image }