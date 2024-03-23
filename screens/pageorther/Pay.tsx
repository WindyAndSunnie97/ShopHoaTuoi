// import { Picker } from '@react-native-picker/picker';
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity,  } from 'react-native';

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
// }

// const PayScreen: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
//     const { product } = route.params;
//     const [cart, setCart] = useState<Product[]>(product);
//     const [deliveryDate, setDeliveryDate] = useState<string>('');

//     const handleCheckout = () => {
//         // Xử lý logic thanh toán ở đây
//         console.log('Thanh toán thành công!');
//         // Sau khi thanh toán, xóa giỏ hàng
//         setCart([]);
//     };

//     const calculateTotal = () => {
//         return cart.reduce((total, product) => total + product.price, 0);
//     };

//     const removeFromCart = (id: number) => {
//         const updatedCart = cart.filter((product) => product.id !== id);
//         setCart(updatedCart);
//     };

//     const handleDeliveryDateChange = (date: string) => {
//         setDeliveryDate(date);
//     };

//     const renderProduct = ({ item }: { item: Product }) => (
//         <View style={styles.productItem}>
//             <Text>{item.name}</Text>
//             <Text>{item.price}</Text>
//             <TouchableOpacity onPress={() => removeFromCart(item.id)}>
//                 <Text style={styles.removeButton}>Remove</Text>
//             </TouchableOpacity>
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Checkout</Text>
//             <FlatList
//                 data={cart}
//                 renderItem={renderProduct}
//                 keyExtractor={(item) => item.id.toString()}
//             />
//             <Text>Total: {calculateTotal()}</Text>
//             <View style={styles.deliveryDateContainer}>
//                 <Text style={styles.deliveryDateLabel}>Delivery Date:</Text>
//                 <Picker
//                     selectedValue={deliveryDate}
//                     onValueChange={(itemValue: string) => handleDeliveryDateChange(itemValue)}
//                     style={styles.deliveryDatePicker}
//                 >
//                     <Picker.Item label="Select a date" value="" />
//                     <Picker.Item label="Today" value="today" />
//                     <Picker.Item label="Tomorrow" value="tomorrow" />
//                     <Picker.Item label="Next Week" value="next_week" />
//                 </Picker>
//             </View>
//             <TouchableOpacity
//                 style={[styles.button, { backgroundColor: cart.length > 0 ? 'blue' : 'gray' }]}
//                 onPress={handleCheckout}
//                 disabled={cart.length === 0}
//             >
//                 <Text style={styles.buttonText}>Checkout</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     productItem: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     removeButton: {
//         color: 'red',
//         fontWeight: 'bold',
//     },
//     deliveryDateContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     deliveryDateLabel: {
//         fontSize: 16,
//         marginRight: 10,
//     },
//     deliveryDatePicker: {
//         height: 40,
//         width: 150,
//     },
//     button: {
//         padding: 10,
//         borderRadius: 5,
//         marginTop: 20,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default PayScreen;
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface CustomerInfo {
    name: string;
    address: string;
    phoneNumber: string;
}

interface PaymentMethod {
    cardType: string;
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
}

const App = () => {
    const [customerData, setCustomerData] = React.useState<CustomerInfo>({
        name: "John Doe",
        address: "123 Main Street",
        phoneNumber: "123-456-7890"
    });

    const [paymentMethodData, setPaymentMethodData] = React.useState<PaymentMethod>({
        cardType: "Visa",
        cardNumber: "1234 5678 9012 3456",
        expirationDate: "12/25",
        securityCode: "123"
    });

    const handleSubmit = () => {
        console.log("Form submitted");
        // Add your form submission logic here
    }

    return (
        <View style={styles.container}>
            <Text>Customer Information Form</Text>
            <View>
                <Text>Name:</Text>
                <TextInput
                    value={customerData.name}
                    onChangeText={(text) => setCustomerData({ ...customerData, name: text })}
                    style={styles.input}
                />
                <Text>Address:</Text>
                <TextInput
                    value={customerData.address}
                    onChangeText={(text) => setCustomerData({ ...customerData, address: text })}
                    style={styles.input}
                />
                <Text>Phone Number:</Text>
                <TextInput
                    value={customerData.phoneNumber}
                    onChangeText={(text) => setCustomerData({ ...customerData, phoneNumber: text })}
                    style={styles.input}
                />
            </View>
            <View>
                <Text>Payment Method</Text>
                <Text>Card Type:</Text>
                <TextInput
                    value={paymentMethodData.cardType}
                    onChangeText={(text) => setPaymentMethodData({ ...paymentMethodData, cardType: text })}
                    style={styles.input}
                />
                <Text>Card Number:</Text>
                <TextInput
                    value={paymentMethodData.cardNumber}
                    onChangeText={(text) => setPaymentMethodData({ ...paymentMethodData, cardNumber: text })}
                    style={styles.input}
                />
                <Text>Expiration Date:</Text>
                <TextInput
                    value={paymentMethodData.expirationDate}
                    onChangeText={(text) => setPaymentMethodData({ ...paymentMethodData, expirationDate: text })}
                    style={styles.input}
                />
                <Text>Security Code:</Text>
                <TextInput
                    value={paymentMethodData.securityCode}
                    onChangeText={(text) => setPaymentMethodData({ ...paymentMethodData, securityCode: text })}
                    style={styles.input}
                />
            </View>
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 5,
        width: 200,
    },
});

export default App;
