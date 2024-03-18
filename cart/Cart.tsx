import React from 'react';
import { Text, View, Button, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { CartBox } from './CartBox'; // Import CartBox vào đây
import { useNavigation} from '@react-navigation/native';

const Cart: React.FC = ({ navigation, route }: any) => {
    const cartBox = new CartBox(); 

  

    const handleRemoveFromCart = (id: number) => {
        if (cartBox.items.find(item => item.id === id)) {
            cartBox.removeItem(id);
        }
    };

    const handleIncreaseQuantity = (id: number) => {
        if (cartBox.items.find(item => item.id === id)) {
            cartBox.increaseQuantity(id);
        }
    };

    const handleDecreaseQuantity = (id: number) => {
        if (cartBox.items.find(item => item.id === id)) {
            cartBox.decreaseQuantity(id);
        }
    };

    const getTotal = (): number => {
        return cartBox.getTotal();
    };

    return (
        <View>
            <ScrollView>
                <Text style={{ fontSize: 30, fontWeight: 'bold', alignItems: 'center', color: 'pink', textAlign: 'center' }}>Cart</Text>
                {cartBox.items.length === 0 && (
                    <Text style={{ textAlign: 'center' }}>Your cart is empty</Text>
                )}
                {cartBox.items.map(item => (
    <View key={item.id}>
        <View style={styles.frame}>
            <Image source={{uri: item.image}} style={styles.img} />

            <View style={styles.text}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', fontStyle: 'italic', color: 'black', marginBottom: 5 }}>{item.name}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic', color: 'black', marginBottom: 5 }}>Price: ${item.price}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic', color: 'black', marginBottom: 5 }}>Quantity: {item.quantity}</Text>
            </View>
            <View style={{ width: 80, height: 40, justifyContent: 'space-around', alignItems: 'stretch', }}>
                <Button title="+" onPress={() => handleIncreaseQuantity(item.id)} />
                <Button title="-" onPress={() => handleDecreaseQuantity(item.id)} />
            </View>
        </View>
        <View style={{ width: 80, height: 40, justifyContent: 'space-around', alignItems: 'stretch', }}>
            <Button title="Remove" onPress={() => handleRemoveFromCart(item.id)} />
        </View>
    </View>
                ))}
                {cartBox.items.length > 0 && (
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Total: ${getTotal()}</Text>
                )}
                {cartBox.items.length > 0 && (
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Pay")}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20 }}>Pay now</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    frame: {
        flexDirection: 'row',
        marginTop: 20
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    text: {
        flexDirection: 'column',
        marginLeft: 25,
        marginTop: 5,
        width: 220,
        height: 100
    },
    btn: {
        marginTop: '100%',
        backgroundColor: 'pink',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        width: '70%',
        height: 60,
        justifyContent: 'center',
        marginLeft: 60,
        marginBottom: 20,
    }
})

export default Cart;
