import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const CartScreen = ({ onPress }) => {
  const basket = useSelector((state) => state.basket);

  // Function to get the array of items in the basket
  const getBasketItems = () => {
    return Object.keys(basket.selectedDishes).map((dishId) => ({
      dishId,
      quantity: basket.selectedDishes[dishId],
    }));
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>Items in Cart:</Text>
      <View>
        {getBasketItems().map((item, index) => (
          <Text key={index}>
            Item ID: {item.dishId}, Quantity: {item.quantity}, name: {item.name}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default CartScreen;
