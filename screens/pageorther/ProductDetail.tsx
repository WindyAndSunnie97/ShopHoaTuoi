import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import BackgroundProduct from "../components/BackgroundProduct";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartReducer";
import Cart from "../../cart/Cart";
import { CartBox } from "../../cart/CartBox";


const Tab = createNativeStackNavigator();
export const StackDetail = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Cart" component={Cart} options={{headerShown:false}} ></Tab.Screen>
      </Tab.Navigator>
       
    )
}

interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    quantity:1
}
const ProductDetail = ({ navigation, route }: any) => {
    
    const { productId } = route.params || {};
    const [product, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(`http://10.0.2.2:3000/api/Flowershop/product/${productId}`);
                if (!response.data) {
                    throw new Error('Failed to fetch product details');
                }
                const productDetail: Product = response.data; // Assuming the response data is a single product
                setProduct([productDetail]);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchProductDetail();
    }, []);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (product) { // Kiểm tra xem sản phẩm đã được tải thành công chưa
            dispatch(addToCart(product)); // Thêm sản phẩm vào giỏ hàng
            console.log('Product added to cart', product); // Hiển thị sản phẩm vừa được thêm vào giỏ hàng
            navigation.navigate('Cart'); // Chuyển sang trang Cart
        } else {
            console.log('Product detail is not available yet.'); // Hiển thị thông báo nếu chi tiết sản phẩm chưa được tải
        }
    };  
    return (
        <BackgroundProduct>
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.title}>
                    <Icon name="arrow-undo" style={styles.icon} onPress={() => navigation.goBack()} />
                    <View style={styles.vien}>
                        <Text style={styles.chu}>Details✏️</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={styles.container1}>
                    <FlatList
                    scrollEnabled={false}
                data={product}
                renderItem={({ item }) => (
                        <>
                        <View style={styles.item}>
                        <Image source={{ uri: item.image }} style={styles.box} />
                        <View style={styles.dess}>
                            <Text style={{ color: '#000', textAlign: 'center', paddingRight: 5, fontSize: 25, fontWeight: 'bold', alignItems: 'center' }}>🌷{item.name}</Text>
                        </View>
                        <Text style={{ color: '#000', textAlign: 'right', paddingLeft: 5, fontSize: 22, fontWeight: 'bold', paddingBottom: 15 }}>💸 {item.price}$</Text>
                    </View><View style={styles.rate}>
                            <Icons name="flower-tulip" style={styles.icons} />
                            <Icons name="flower-tulip" style={styles.icons} />
                            <Icons name="flower-tulip" style={styles.icons} />
                            <Icons name="flower-tulip" style={styles.icons} />
                            <Icons name="flower-tulip" style={styles.icons} />
                        </View><View>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', fontStyle: 'italic', paddingLeft: 15 }}>Description</Text>
                            <Text style={{ fontSize: 20, fontWeight: "500", fontStyle: 'italic', paddingLeft: 30 }}>{item.description}</Text>
                        </View>
                        </>

)}
                         />
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => handleAddToCart()}>
    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18 }}>Add to Cart</Text>
</TouchableOpacity>
                   
                </View>
                </ScrollView>
            </View>
        </BackgroundProduct>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '../../assets/images/whiteblue.jpg',
        width: '100%',
        height: '100%',
    },
    container2: {
        width: '100%',
        height: '90%'
    },
    container1: {
        // width:'100%',
        // height:'80%'
    },
    note: {
        width: 250,
        height: 150,
    },
    title: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        fontSize: 30,
        marginLeft: 5
    },
    chu: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center'

    },
    vien: {
        width: '40%',
        height: 45,
        backgroundColor: 'pink',
        borderRadius: 30,
        marginTop: 15,
        justifyContent: 'center',
        marginLeft: 90

    },
    item: {

        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        padding: 15,
        width: '80%',
        height: 450,
        backgroundColor: '#A9EDE9',
        borderRadius: 25,
        marginTop: 15,
        marginLeft: '10%'

    },
    dess: {
        backgroundColor: '#FBD6E3',
        paddingVertical: 8,
        marginBottom: 5,
        marginLeft: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: 200,
        height: 80,
        alignItems: 'center',
        paddingLeft: 10

    },
    box: {
        width: '100%',
        height: 320,
        //padding:10 ,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 15,
    },
    rate: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        fontSize: 22,
        margin: 15,

    },
    icons: {
        color: 'orange',
        fontSize: 30,
    },
    btn: {
        marginTop: 15,
        backgroundColor: 'pink',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        width: '70%',
        height: 50,
        justifyContent: 'center',
        marginLeft: 60,
        marginBottom:20
    },
})

export default ProductDetail;
