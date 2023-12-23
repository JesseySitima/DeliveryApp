import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const CartScreen = ({ onPress }) => {
  const basket = useSelector((state) => state.basket);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigation = useNavigation();

  // Function to get the array of items in the basket
  const getBasketItems = () => {
    return Object.keys(basket.selectedDishes).map((dishId) => ({
      dishId,
      ...basket.selectedDishes[dishId], // Spread the dish properties
      totalItemPrice: basket.selectedDishes[dishId].quantity * basket.selectedDishes[dishId].price,
    }));
  };

 // Function to calculate total price
 const getTotalPrice = () => {
  let total = 0;
  Object.keys(basket.selectedDishes).forEach((dishId) => {
    const item = basket.selectedDishes[dishId];
    total += item.quantity * item.price;
  });
  return total;
};

  // Handle order button click
  const handleOrder = () => {
    navigation.navigate("preparOrder")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Items in Cart:</Text>
      <View>
        {Object.keys(basket.selectedDishes).map((dishId, index) => {
          const item = basket.selectedDishes[dishId];
          const totalItemPrice = item.quantity * item.price;
          return (
            <View style={styles.itemContainer} key={index}>
              <Image source={item.imageUrl} style={styles.image} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemId}>Item ID: {dishId}</Text>
                <Text style={styles.itemName}>Name: {item.name}</Text>
                <Text style={styles.itemPrice}>Price: ${item.price}</Text>
                <Text style={styles.itemPrice}>
                  Quantity: {item.quantity}
                </Text>
                <Text style={styles.itemPrice}>
                  Total Price: ${totalItemPrice}
                </Text>
              </View>
            </View>
          );
        })}
        <Text style={styles.totalText}>Total Price: ${getTotalPrice()}</Text>
        <Button
          title="Order"
          onPress={handleOrder}
          style={styles.orderButton}
          textStyle={styles.orderButtonText}
        />
      </View>
    </View>
  );
};

export default CartScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemId: {
    fontSize: 16,
    marginBottom: 5,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    marginBottom: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  orderButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  orderButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
});


