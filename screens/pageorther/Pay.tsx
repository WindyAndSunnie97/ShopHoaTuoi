import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const PayScreen = ({ navigation, route }:any) => {
    const { products } = route.params;
    const [cart, setCart] = useState<Product[]>(products);

    const handleCheckout = () => {
        // Xử lý logic thanh toán ở đây
        console.log('Thanh toán thành công!');
        // Sau khi thanh toán, xóa giỏ hàng
        setCart([]);
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };

    const removeFromCart = (id: number) => {
        const updatedCart = cart.filter((product) => product.id !== id);
        setCart(updatedCart);
    };

    const renderProduct = ({ item }: { item: Product }) => (
        <View style={styles.productItem}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Checkout</Text>
            <FlatList
                data={cart}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
            />
            <Text>Total: {calculateTotal()}</Text>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: cart.length > 0 ? 'blue' : 'gray' }]}
                onPress={handleCheckout}
                disabled={cart.length === 0}
            >
                <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    productItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    removeButton: {
        color: 'red',
        fontWeight: 'bold',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PayScreen;
