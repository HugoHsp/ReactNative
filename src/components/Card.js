import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { StyleSheet } from "react-native-web";

const DetailRecipePage = ({ recipe, navigation, addToCart }, props) => {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <View style={styles.card}>
            <Image source={{ uri: recipe.image }} style={styles.thumbnail}></Image>
            <View style={{ marginVertical: 16 }}>
                <Text style={styles.title}>{recipe.title}</Text>
                <Text style={styles.title}>{recipe.price}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 16}}>
                <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
                    <Text style={styles.ctaText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
                    <Text style={styles.ctaText}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.cta} onPress={() => addToCart({ id: recipe.id, title: recipe.title, price: recipe.price, image: recipe.image, quantity: quantity })}>
                <Text style={styles.ctaText}>Add to cart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        display: 'grid',
        padding: 16
    },
    thumbnail: {
        height: 300,
        width: '100%',
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
    },
    cta: {
        backgroundColor: 'black',
        padding: 16,
    },
    ctaText: {
        color: 'white',
        textAlign: 'center',
    },
    quantityButton: {
        backgroundColor: 'black',
        padding: 8,
    },
    quantity: {
        fontSize: 18,
        marginHorizontal: 16,
    },
});

export default DetailRecipePage;
