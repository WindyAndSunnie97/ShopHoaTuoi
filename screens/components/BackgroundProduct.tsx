import React, { ReactNode } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

interface BackgroundProductProps {
    children: ReactNode; // Xác định kiểu dữ liệu cho children
}

const BackgroundProduct: React.FC<BackgroundProductProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/whiteblue.jpg')} style={styles.imageBackground}>
                {children}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
    },
});

export default BackgroundProduct;
