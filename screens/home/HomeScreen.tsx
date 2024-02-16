import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Header from "../components/Header"
import ListCategogy from "./ListCategogy"
import ListProduct from "./ListProduct"

const HomeScreen = () => {
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <Header />
      <ListCategogy />
      <ListProduct />
    </View>
  )
};

export default HomeScreen;
