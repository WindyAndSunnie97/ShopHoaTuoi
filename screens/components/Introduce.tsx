


import React, { useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from "react-native";

const image = [
    'https://ledmofan.com/wp-content/uploads/2022/01/hinh-nen-hoa-mau-don-14.jpg',
    'https://png.pngtree.com/background/20230414/original/pngtree-pink-peony-petals-flowers-flowers-decoration-bright-floral-background-picture-image_2425071.jpg',
    'https://fptshop.com.vn/Uploads/Originals/2023/12/7/638375526430344060_anh-bia-hinh-nen-may-tinh-hoa-mau-don.png',
    'https://i.pinimg.com/originals/4a/8b/06/4a8b06e05816376ff78d232610e24b86.png'
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Introduce = () => {
    const [imgActive, setImgActive] = useState(0);

    const onChange = ({nativeEvent}:any) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide !== imgActive) {
                setImgActive(slide);
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    snapToOffsets={image.map((_, i) => i * (WIDTH * 0.8 - 40) + (i - 1) * 40)}
                    horizontal
                    snapToAlignment={'center'}
                    scrollEventThrottle={16}
                    contentContainerStyle={styles.contentContainer}
                >
                    {image.map((e, index) => (
                        <Image
                            key={e}
                            resizeMode='stretch'
                            style={styles.image}
                            source={{ uri: e }}
                        />
                    ))}
                </ScrollView>

                <View style={styles.wrapDot}>
                    {image.map((_, index) => (
                        <Text
                            key={index}
                            style={imgActive === index ? styles.dotActive : styles.dot}
                        >
                            ●
                        </Text>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Introduce;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrap: {
        alignItems: 'center',

         // Căn giữa theo trục x
    },
    contentContainer: {
        justifyContent: 'center', // Căn giữa theo trục y
    },
    image: {
        width: WIDTH * 0.9,
        height: 200,
        marginHorizontal: 15,
        borderRadius: 25,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    dotActive: {
        margin: 3,
        color: 'gray',
    },
    dot: {
        margin: 3,
        color: 'white',
    },
});



