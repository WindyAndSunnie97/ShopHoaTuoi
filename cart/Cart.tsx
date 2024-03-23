import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { CartItem } from './CartItem';
import { removeFromCart } from '../redux/CartReducer';
import { RootState } from '../redux/RootState';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PayScreen from '../screens/pageorther/Pay';
import LoginScreen from '../screens/login/LoginScreen';



const Tab = createNativeStackNavigator();
export const StackCart = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Pay" component={PayScreen} options={{headerShown:false}} ></Tab.Screen>
            <Tab.Screen name="Login" component={LoginScreen} options={{headerShown:false}} ></Tab.Screen>
      </Tab.Navigator>
       
    )
}

const Cart: React.FC<any> = ({ navigation, route }) => {
    const cart = useSelector((state: any) => state.cart.cart);
    console.log(cart)
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const isLoggedIn = useSelector((state: RootState) => state.login.isAuth);
    
    const dispatch = useDispatch(); // Sử dụng useDispatch để gửi action

    useEffect(() => {
        setCartItems(cart);
    }, [cart]);
    console.log(cartItems)

    const handleRemoveFromCart = (id: string) => {
        dispatch(removeFromCart({ id })); // Gửi action để loại bỏ sản phẩm khỏi giỏ hàng
    };
    
    const handleIncreaseQuantity = (id: string) => {
        setCartItems((prevCartItems: CartItem[]) => {
            return prevCartItems.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        });
    };
    
    const handleDecreaseQuantity = (id: string) => {
        setCartItems((prevCartItems: CartItem[]) => {
            return prevCartItems.map(item => {
                if (item.id === id && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        });
    };

    const getTotal = (): number => {
        if (cartItems && cartItems.length > 0) {
            return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        } else {
            return 0; // hoặc giá trị mặc định khác tùy thuộc vào yêu cầu của bạn
        }
    };
    const handlePayNow = () => {
        if (isLoggedIn) {
            navigation.navigate("Pay", { products: cart });
        } else {
            navigation.navigate("Login");
        }
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
                            <View style={styles.quan}>
                                <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
                                <View style={styles.but2}>
                                    <TouchableOpacity style={styles.button} onPress={() => handleIncreaseQuantity(item.id)}>
                                        <Text style={styles.buttonText}>+</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button} onPress={() => handleDecreaseQuantity(item.id)}>
                                        <Text style={styles.buttonText}>-</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.buttonContainer}> 
                                <Button title="Remove" onPress={() => handleRemoveFromCart(item.id)} />
                            </View>
                        </View>
                    </View>
                ))}
                {cartItems.length > 0 && (
                    <Text style={styles.totalText}>Total: ${getTotal()}</Text>
                )}
                {cartItems.length > 0 && (
                    <TouchableOpacity style={styles.payNowButton} onPress={(handlePayNow)}>
                        <Text style={styles.payNowButtonText} >Pay now </Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </View>
    )
                }

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
        color:'black'
    },
    itemPrice: {
        fontSize: 18,
        color:'black'
    },
    itemQuantity: {
        fontSize: 18,
        marginTop:10,
        color:'black'
    },
    quan:{
flexDirection:'row',
marginRight:5,
paddingRight:15
    },
    but2:{
flexDirection:'column'
    },
    button: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        width:15,
        height:1,
        marginBottom:5
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize:3,
        textAlign: 'center',
        alignItems:'center'
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



function dispatch(arg0: { payload: { id: string; }; type: "cart/removeFromCart"; }) {
    throw new Error('Function not implemented.');
}
// // Cart.tsx
// import React, { useState, useEffect } from 'react';
// import { Text, View, Button, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { useSelector } from 'react-redux';
// import { CartItem } from './CartItem';



// const Cart: React.FC<any> = ({ navigation, route }) => {
//     const cart = useSelector((state: any) => state.cart.cart);
//     const [cartItems, setCartItems] = useState<any[]>([]);

//     useEffect(() => {
//         setCartItems(cart);
//     }, [cart]);

//     const handleRemoveFromCart = (id: string) => {
//         setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id));
//     };

//     const handleIncreaseQuantity = (id: string) => {
//         setCartItems(prevCartItems => prevCartItems.map(item => {
//             if (item.id === id) {
//                 return { ...item, quantity: item.quantity + 1 };
//             }
//             return item;
//         }));
//     };

//     const handleDecreaseQuantity = (id: string) => {
//         setCartItems(prevCartItems => prevCartItems.map(item => {
//             if (item.id === id && item.quantity > 1) {
//                 return { ...item, quantity: item.quantity - 1 };
//             }
//             return item;
//         }));
//     };

//     const getTotal = (): number => {
//         if (cartItems && cartItems.length > 0) {
//             return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
//         } else {
//             return 0;
//         }
//     };

//     return (
//         <View>
//             <ScrollView>
//                 <Text style={styles.header}>Cart</Text>
//                 {cartItems.length === 0 && (
//                     <Text style={styles.emptyCartText}>Your cart is empty</Text>
//                 )}
//                 {cartItems.map(item => (
//                     <CartItem
//                         key={item.id} // Assign unique key
//                         id={item.id}
//                         image={item.image}
//                         name={item.name}
//                         price={item.price}
//                         quantity={item.quantity}
//                         handleIncreaseQuantity={handleIncreaseQuantity}
//                         handleDecreaseQuantity={handleDecreaseQuantity}
//                         handleRemoveFromCart={handleRemoveFromCart}
//                     />
//                 ))}
//                 {cartItems.length > 0 && (
//                     <Text style={styles.totalText}>Total: ${getTotal()}</Text>
//                 )}
//                 {cartItems.length > 0 && (
//                     <TouchableOpacity style={styles.payNowButton} onPress={() => navigation.navigate("Pay", { products: cart })}>
//                         <Text style={styles.payNowButtonText} >Pay now</Text>
//                     </TouchableOpacity>
//                 )}
//             </ScrollView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     header: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: 'pink',
//         textAlign: 'center',
//         marginTop: 20,
//     },
//     emptyCartText: {
//         textAlign: 'center',
//         fontSize: 18,
//         marginTop: 20,
//     },
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
//     itemQuantity: {
//         fontSize: 18,
//         marginTop: 10,
//         color: 'black',
//     },
//     quan: {
//         flexDirection: 'row',
//         marginRight: 5,
//         paddingRight: 15,
//     },
//     but2: {
//         flexDirection: 'column',
//     },
//     button: {
//         backgroundColor: 'orange',
//         padding: 10,
//         borderRadius: 5,
//         marginHorizontal: 5,
//         width: 30,
//         height: 30,
//         marginBottom: 5,
//     },
//     buttonText: {
//         color: '#FFFFFF',
//         fontSize: 16,
//         textAlign: 'center',
//         alignItems: 'center',
//     },
//     buttonContainer: {

//         alignItems: 'center',
//     },
//     totalText: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginTop: 20,
//     },
//     payNowButton: {
//         backgroundColor: 'pink',
//         paddingVertical: 15,
//         alignItems: 'center',
//         borderRadius: 10,
//         width: '70%',
//         height: 60,
//         justifyContent: 'center',
//         marginLeft:60,
//         marginTop:15
 
//     },
//     payNowButtonText:{
// fontSize:20,
// fontWeight:'bold'
// },
// })
// export default Cart;