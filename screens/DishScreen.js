import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { addDish, removeDish, selectSelectedDishes } from '../features/basketSlice';
import Notification from '../components/Notification';

const DishScreen = ({ route }) => {
  // Retrieve dishes from route parameters
  const { dishes } = route.params;

  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const [showNotification, setShowNotification] = useState(false);
  const navigation = useNavigation();

  const handleAddToCart = (dishId) => {
    const selectedDish = dishes.find(dish => dish.id === dishId); // Find the dish by its ID
  
    if (selectedDish) {
      dispatch(addDish({
        dishId,
        quantity: 1,
        name: selectedDish.name,
        price: selectedDish.price,
        imageUrl: selectedDish.image
      }));
      setShowNotification(true);
      console.log(`Added ${selectedDish.name} to the basket`);
    } else {
      console.log(`Dish with ID ${dishId} not found.`);
    }
  };
  
  const handleRemoveFromCart = (dishId) => {
    if (basket.selectedDishes[dishId] > 0) {
      const selectedDish = dishes.find(dish => dish.id === dishId); // Find the dish by its ID
  
      if (selectedDish) {
        dispatch(removeDish({
          dishId,
          quantity: 1,
          name: selectedDish.name,
          price: selectedDish.price,
          imageUrl: selectedDish.image
        }));
        console.log(`Removed ${selectedDish.name} from the basket`);
      } else {
        console.log(`Dish with ID ${dishId} not found.`);
      }
    }
  };
  

  const renderDishItem = ({ item }) => {
    const dishId = item.id;

    return (
      <View style={styles.dishContainer}>
        <Image source={item.image} style={styles.dishImage} />
        <View style={styles.textContainer}>
          <Text style={styles.dishTitle}>{item.name}</Text>
          <Text style={styles.dishDescription}>{item.description}</Text>
          <Text style={styles.dishPrice}>Price: ${item.price}</Text>
        </View>
          {/* Your existing text components */}
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => handleRemoveFromCart(dishId)}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{basket.selectedDishes[dishId] || 0}</Text>
            <TouchableOpacity onPress={() => handleAddToCart(dishId)}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
        
      </View>
    );
  };


  return (
    <View style={styles.container}>
       <Image
            source={require('../assets/menu.jpg')}
            style={styles.image}
          />
          {showNotification && (
        <Notification onPress={() => navigation.navigate('cart')}>
          
        </Notification>
      )}
      <Text style={styles.screenTitle}>Dishes</Text>
      <FlatList
        data={dishes}
        renderItem={renderDishItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.dishList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
      height: '40%',
      width: '100%',
      resizeMode: 'stretch'
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  dishContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    
  },
  dishImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Assuming it's a circular image
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  dishTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dishDescription: {
    fontSize: 14,
    color: 'gray',
  },
  dishPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  dishList: {
    paddingBottom: 20,
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

export default DishScreen;
