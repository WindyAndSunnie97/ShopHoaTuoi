export interface CartItem {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

// CartItem.tsx
// CartItem.tsx
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';

// interface CartItemProps {
//     id: string;
//     image: string;
//     name: string;
//     price: number;
//     quantity: number;
//     handleIncreaseQuantity: (id: string) => void;
//     handleDecreaseQuantity: (id: string) => void;
//     handleRemoveFromCart: (id: string) => void;
// }

// const CartItem: React.FC<CartItemProps> = ({ id, image, name, price, quantity, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveFromCart }) => {
//     return (
//         <View style={styles.itemContainer}>
//             <Image source={{ uri: image }} style={styles.itemImage} />
//             <View style={styles.itemDetails}>
//                 <Text style={styles.itemName}>{name}</Text>
//                 <Text style={styles.itemPrice}>Price: ${price}</Text>
//                 <View style={styles.quantityContainer}>
//                     <Text style={styles.itemQuantity}>Quantity: {quantity}</Text>
//                     <View style={styles.quantityButtons}>
//                         <TouchableOpacity style={styles.button} onPress={() => handleIncreaseQuantity(id)}>
//                             <Text style={styles.buttonText}>+</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.button} onPress={() => handleDecreaseQuantity(id)}>
//                             <Text style={styles.buttonText}>-</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//             <View style={styles.buttonContainer}>
//                 <Button title="Remove" onPress={() => handleRemoveFromCart(id)} />
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     itemContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//     },
//     itemImage: {
//         width: 100,
//         height: 100,
//         borderRadius: 5,
//     },
//     itemDetails: {
//         marginLeft: 10,
//         flex: 1,
//     },
//     itemName: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'black',
//     },
//     itemPrice: {
//         fontSize: 18,
//         color: 'black',
//     },
//     quantityContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     itemQuantity: {
//         fontSize: 18,
//         marginTop: 10,
//         color: 'black',
//     },
//     quantityButtons: {
//         flexDirection: 'row',
//     },
//     button: {
//         backgroundColor: 'orange',
//         padding: 5,
//         borderRadius: 5,
//         marginLeft: 5,
//     },
//     buttonText: {
//         color: '#FFFFFF',
//         fontSize: 18,
//         textAlign: 'center',
//     },
//     buttonContainer: {
//         marginLeft: 'auto',
//     },
// });

// export { CartItem }
