import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shop from "./src/pages/shop";
import Cart from "./src/pages/Cart";
import {Text, TouchableOpacity, View} from "react-native";
const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
    const [cart, setCart] = useState([]);

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Products"
              component={Shop}
              options={{
                  headerRight: () => {
                    return(
                        <View>
                            <TouchableOpacity onPress={() => navigation?.navigate("Cart", {cart})}>
                                <Text>Cart</Text>
                            </TouchableOpacity>
                        </View>
                    )
                  }
              }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;