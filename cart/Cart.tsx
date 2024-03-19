import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const Cart: React.FC<any> = ({ navigation, route }) => {
    const cart = useSelector((state: any) => state.cart.cart);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        setCartItems(cart);
    }, [cart]);

    const handleRemoveFromCart = (id: number) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id));
    };

    const handleIncreaseQuantity = (id: number) => {
        setCartItems(prevCartItems => prevCartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
    };

    const handleDecreaseQuantity = (id: number) => {
        setCartItems(prevCartItems => prevCartItems.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }));
    };

    const getTotal = (): number => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <View>
            <ScrollView>
                <Text style={styles.header}>Cart</Text>
                {cartItems.length === 0 && (
                    <Text style={styles.emptyCartText}>Your cart is empty</Text>
                )}
                {cartItems.map(item => (
                    <View key={item.id} style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.itemImage} />
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemPrice}>Price: ${item.price}</Text>
                            <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="+" onPress={() => handleIncreaseQuantity(item.id)} />
                            <Button title="-" onPress={() => handleDecreaseQuantity(item.id)} />
                            <Button title="Remove" onPress={() => handleRemoveFromCart(item.id)} />
                        </View>
                    </View>
                ))}
                {cartItems.length > 0 && (
                    <Text style={styles.totalText}>Total: ${getTotal()}</Text>
                )}
                {cartItems.length > 0 && (
                    <TouchableOpacity style={styles.payNowButton} onPress={() => navigation.navigate("Pay")}>
                        <Text style={styles.payNowButtonText}>Pay now</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'pink',
        textAlign: 'center',
        marginTop: 20,
    },
    emptyCartText: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    itemDetails: {
        marginLeft: 10,
        flex: 1,
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 16,
    },
    itemQuantity: {
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    totalText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    payNowButton: {
        backgroundColor: 'pink',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        width: '70%',
        height: 60,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    payNowButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default Cart;
