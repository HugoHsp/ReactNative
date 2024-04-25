import React, { useEffect, useState } from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from "react-native-web";
import Card from "../components/Card";
import {fetchProducts} from "../utils/api";

const DetailRecipePage = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        getFood();
    }, []);

    const getFood = async () => {
        try {
            const data = await fetchProducts();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const addToCart = async (product) => {
        setCart([...cart,product]);
        console.log(cart);
    }

    return (
        <View>
            <TouchableOpacity style={styles.cta} onPress={() => navigation.navigate("Cart", {cart})}>
                <Text style={styles.ctaText}>Cart</Text>
            </TouchableOpacity>
            <ScrollView style={{ marginHorizontal: 20 }}>
                <Text style={styles.title}>
                    My eCommerce
                </Text>

                {products?.map((recipe) => (
                    <Card key={recipe.id}
                          cart={cart}
                          recipe={recipe}
                          addToCart={(id, title, price, quantity) => addToCart(id, title, price, quantity)}
                          navigation={navigation} />
                ))}
            </ScrollView >
        </View>
    );
};




const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 32
    },
    cta: {
        backgroundColor: 'black',
        padding: 16,
        width: 64,
        margin: 16
    },
    ctaText: {
        color: 'white',
        textAlign: 'center',
    }
});
export default DetailRecipePage;