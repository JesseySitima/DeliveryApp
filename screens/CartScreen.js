import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addDish, removeDish, selectSelectedDishes } from '../features/basketSlice';

const CartScreen = ({ onPress }) => {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const navigation = useNavigation();
  const dishes = useSelector((state) => state.dishes);



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
  const handleAddToCart = (dishId) => {
    
  };
  
  const handleRemoveFromCart = (dishId) => {
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Items in Cart:</Text>
      <ScrollView style={styles.scrollView}>
        {Object.keys(basket.selectedDishes).map((dishId, index) => {
          const item = basket.selectedDishes[dishId];
          const totalItemPrice = item.quantity * item.price;
          return (
            <View style={styles.itemContainer} key={index}>
              <Image source={item.imageUrl} style={styles.image} />
              <View style={styles.itemInfo}>
               
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.quantity} X MWK{item.price}</Text>
                <Text style={styles.itemPrice}>
                  Total: MWK{totalItemPrice}
                </Text>
              </View>
              <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleRemoveFromCart(dishId)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleAddToCart(dishId)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>

            </View>
          );
        })}
      </ScrollView>
      <Text style={styles.totalText}>Total Price: MWK{getTotalPrice()}</Text>
      <Button
        title="Order"
        onPress={handleOrder}
        style={styles.orderButton}
        textStyle={styles.orderButtonText}
      />
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
  scrollView: {
    flex: 1,
    marginBottom: 20,
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
  quantityContainer: {
    
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
});


