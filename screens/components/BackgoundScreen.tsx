import React, { ReactNode } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

interface BackgroundScreenProps {
    children: ReactNode; // Xác định kiểu dữ liệu cho children
}

const BackgoundScreen: React.FC<BackgroundScreenProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/white.jpg')} style={styles.imageBackground}>
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

export default BackgoundScreen;
