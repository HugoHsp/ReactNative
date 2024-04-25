import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native-web";
import Card from "../components/Card";
import { fetchProducts } from "../utils/api";

const DetailRecipePage = ({ route, navigation }) => {
    const [cart, setCart] = useState(route.params.cart);

    const deleteFromCart = async (id) => {
        setCart(cart.filter(item => item.id !== id));
        console.log(cart);
    }

    return (
        <View>
            <ScrollView style={{ marginHorizontal: 20 }}>
                <Text style={styles.title}>
                    Cart
                </Text>
                {cart?.map((recipe, index) => (
                    <View style={styles.card} key={index}>
                        <Image source={{ uri: recipe.image }} style={styles.thumbnail}></Image>
                        <View style={{ marginVertical: 16 }}>
                            <Text style={styles.title}>{recipe.title}</Text>
                            <Text style={styles.title}>{recipe.price}</Text>
                            <Text style={styles.title}>Quantity: {recipe.quantity}</Text> {/* Display quantity */}
                        </View>
                        <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteFromCart(recipe.id)}>
                            <Text style={styles.buttonText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    deleteBtn: {
        backgroundColor: '#e74c3c',
        color: 'white',
        padding: 16,
    },
    thumbnail: {
        height: 300,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    card: {
        marginVertical: 32
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default DetailRecipePage;
