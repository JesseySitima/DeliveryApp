import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Notification = ({ onPress }) => {
  const basket = useSelector((state) => state.basket);

  // Function to calculate the total quantity of items in the basket
  const getTotalItemsInBasket = () => {
    let totalItems = 0;

    Object.values(basket.selectedDishes).forEach((quantity) => {
      totalItems += quantity;
    });

    return totalItems;
  };

  const totalItems = getTotalItemsInBasket();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>Total Items in Cart: {totalItems}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Notification;
