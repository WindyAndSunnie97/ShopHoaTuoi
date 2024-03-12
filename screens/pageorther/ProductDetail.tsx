import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import BackgroundProduct from "../components/BackgroundProduct";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const Stack = createNativeStackNavigator();
const ProductDetail = ({ navigation, route }: any) => {
    const { productId } = route.params || {};
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        const fetchListProducts = async () => {
            try {
                const response = await axios.get(`http://10.0.2.2:3000/api/Flowershop/${productId}`);
                const responseData = response.data;
                console.log(response);
                setProduct(responseData);
            } catch (err) {
                console.log("Failed to fetch...", (err));
            }
        };

        fetchListProducts();
    }, []);

    return (
        <BackgroundProduct>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Icon name="arrow-undo" style={styles.icon} onPress={() => navigation.goBack()} />
                    <View style={styles.vien}>
                        <Text style={styles.chu}>Details✏️</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={styles.container1}>
                        <View style={styles.item}>
                            <Image source={{ uri: product?.image }} style={styles.box} />
                            <View style={styles.dess}>
                                <Text style={{ color: '#000', textAlign: 'left', paddingRight: 5, fontSize: 25, fontWeight: 'bold', fontFamily: 'Lobster', alignItems: 'center' }}>🌷{product?.name}</Text>
                            </View>
                            <Text style={{ color: '#000', textAlign: 'right', paddingLeft: 5, fontSize: 22, fontWeight: 'bold', paddingBottom: 15 }}>💸 {product?.price}$</Text>
                        </View>
                        <View style={styles.rate}>
                            <Icons name="flower-tulip" style={styles.icons} />
                            <Icons name="flower-tulip" style={styles.icons} />
                            <Icons name="flower-tulip" style={styles.icons} />
                            <Icons name="flower-tulip" style={styles.icons} />
                            <Icons name="flower-tulip" style={styles.icons} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', fontStyle: 'italic', paddingLeft: 15 }}>Description</Text>
                            <Text style={{ fontSize: 20, fontWeight: "500", fontStyle: 'italic', paddingLeft: 30 }}>{product?.description}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18 }}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
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
        height: "37%",
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
        marginTop: 10,
        backgroundColor: 'pink',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        width: '70%',
        height: 50,
        justifyContent: 'center',
        marginLeft: 60
    },
})

export default ProductDetail;
