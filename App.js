import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './store';
import LandingPage from './screens/LandingPage';
import PrepareOrderScreen from './screens/PrepareOrderScreen';
import MenuScreen from './screens/MenuScreen';
import DishScreen from './screens/DishScreen';
import CartScreen from './screens/CartScreen';



const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={LandingPage} options={{headerShown: false}} />
            <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Dishes" component={DishScreen} options={{headerShown: false}}/>
            <Stack.Screen name="cart" component={CartScreen} options={{ presentation: 'modal'}} /> 
            <Stack.Screen name="preparOrder" component={PrepareOrderScreen} /> 
          </Stack.Navigator>
    </Provider>
     
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
