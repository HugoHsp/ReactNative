import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shop from "./src/pages/shop";
import Cart from "./src/pages/Cart";
const Stack = createNativeStackNavigator();

const App = () => {
    const [cart, setCart] = useState([]);

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Products"
              component={Shop}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;