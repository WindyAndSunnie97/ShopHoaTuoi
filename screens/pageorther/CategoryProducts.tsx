// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

// const CategoryProducts = ({ route, navigation }) => {
//     const { categoryId } = route.params;
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const fetchProductsByCategory = async (categoryId) => {
//             try {
//                 const response = await fetch(`http://10.0.2.2:3000/api/Flowershop/products?categories=${categoryId}`)
//                     .then(function (response) {
//                         return response.json();
//                     });
//                 const data = await response;
//                 console.log(data);
//                 // setProducts(data);
//             } catch (error) {
//                 console.error('Error fetching products by category:', error);
//             }
//         };

//         fetchProductsByCategory(categoryId);
//     }, [categoryId]);

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={products}
//                 renderItem={({ item }) => (
//                     <View style={styles.item}>
//                         <TouchableOpacity onPress={() => navigation.navigate("Details", { productId: item.id })}>
//                             <Image source={{ uri: item.image }} style={styles.box} />
//                             <View style={styles.dess}>
//                                 <Text style={{ color: '#000', textAlign: 'left', paddingLeft: 5, fontSize: 20, fontWeight: 'bold' }}>🌷 {item.name}</Text>
//                                 <Text style={{ color: '#000', textAlign: 'left', paddingLeft: 5, fontSize: 20, fontWeight: 'bold' }}>💸 {item.price}$</Text>
//                             </View>
//                         </TouchableOpacity>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// };
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 10,
//     },
//     productItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc'
//     },
//     productImage: {
//         width: 50,
//         height: 50,
//         marginRight: 10
//     },
//     dess: {
//         backgroundColor: '#FBD6E3',
//         paddingVertical: 8,
//         justifyContent: 'space-around',
//         flexDirection: 'column',
//         marginTop: 10,
//         marginBottom: 5,
//         borderRadius: 5,
//     },
//     item: {
//         paddingTop: 5,
//         paddingBottom: 5,
//         paddingRight: 10,
//         padding: 15,
//         width: '47%',
//         height: '100%',
//         backgroundColor: '#A9EDE9',
//         borderRadius: 15,
//     },
//     box: {
//         width: '100%',
//         height: 150,
//         //padding:10 ,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 5,
//         borderRadius: 10

//     }
// });

// export default CategoryProducts;
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
}
const CategoryProducts = ({ route, navigation }:any) => {
    const { category } = route.params;
    const [products, setCatProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(`http://10.0.2.2:3000/api/Flowershop/product/${category}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setCatProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        getProducts();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <TouchableOpacity onPress={() => navigation.navigate("Detail" ,{ productId: item.id } )}>
                            <Image source={{ uri: item.image }} style={styles.box} />
                            <View style={styles.dess}>
                                <Text style={{ color: '#000', textAlign: 'left', paddingLeft: 5, fontSize: 20, fontWeight: 'bold' }}>🌷 {item.name}</Text>
                                <Text style={{ color: '#000', textAlign: 'left', paddingLeft: 5, fontSize: 20, fontWeight: 'bold' }}>💸 {item.price}$</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    productImage: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    dess: {
        backgroundColor: '#FBD6E3',
        paddingVertical: 8,
        justifyContent: 'space-around',
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 5,
    },
    item: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        padding: 15,
        width: '47%',
        height: '100%',
        backgroundColor: '#A9EDE9',
        borderRadius: 15,
    },
    box: {
        width: '100%',
        height: 150,
        //padding:10 ,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 10

    }
});

export default CategoryProducts;
