import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
}

const Search = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Product[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(`http://10.0.2.2:3000/api/Flowershop/product`);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        getProducts();
    }, []);

    useEffect(() => {
        const results = searchProductByName(products, searchTerm);
        setSearchResults(results);
    }, [searchTerm, products]);

    function searchProductByName(products: Product[], query: string): Product[] {
        query = query.toLowerCase();
        // Kiểm tra nếu từ khóa tìm kiếm chứa từ "hoa "
        if (query.endsWith("hoa ")) {
            return products.filter(product => product.name.toLowerCase().includes("hoa"));
        }
        return [];
    }

    return (
        <View>
            <View style={styles.each}>
                <TextInput
                    placeholder="Search"
                    value={searchTerm}
                    onChangeText={text => setSearchTerm(text)} // Cập nhật searchTerm khi người dùng nhập vào ô tìm kiếm
                />
                <Icon name="search" style={styles.icon} />
            </View>
            <View>
                {searchResults.map(product => (
                    <View key={product.id}>
                        <Text>{product.name}</Text>
                        <Text>Price: {product.price}</Text>
                        <Image source={{ uri: product.image }} style={styles.image} />
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    icon: {
        fontSize: 22,
        position: 'absolute',
        top: 8,
        zIndex: 1000,
        paddingLeft: 340
    },
    each: {
        width: '100%',
        height: 40,
        padding: 1,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#A9EDE9',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 15
    },
    image: {
        width: 100,
        height: 100
    }
});
