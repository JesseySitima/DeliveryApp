import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Modal,  } from 'react-native';
import { addDish, removeDish, selectSelectedDishes } from '../features/basketSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';

const DishScreen = ({ route }) => {
  // Retrieve dishes from route parameters
  const { dishes, title } = route.params;

  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  
  const navigation = useNavigation();
  const [totalCartItems, setTotalCartItems] = useState(0);

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
    
      console.log(`Added ${selectedDish.name} to the basket`);
    } else {
      console.log(`Dish with ID ${dishId} not found.`);
    }
  };
  
  const handleRemoveFromCart = (dishId) => {
    const selectedDish = basket.selectedDishes[dishId];
  
    if (selectedDish && selectedDish.quantity > 0) {
      dispatch(removeDish({
        dishId,
        quantity: 1,
        name: selectedDish.name,
        price: selectedDish.price,
        imageUrl: selectedDish.imageUrl
      }));
      console.log(`Removed ${selectedDish.name} from the basket`);
    } else {
      console.log(`Dish with ID ${dishId} not found in the basket or quantity is 0.`);
    }
  };
  

   // Function to calculate the total quantity of items in the basket
   const getTotalItemsInBasket = () => {
    let totalItems = 0;
  
    Object.values(basket.selectedDishes).forEach((dish) => {
      totalItems += dish.quantity;
    });
  
    return totalItems;
  };
  
  useEffect(() => {
    const itemsCount = getTotalItemsInBasket();
    console.log('Total Items Count:', itemsCount); // Log the itemsCount for debugging
    setTotalCartItems(itemsCount);
  }, [basket]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };

  

  const renderDishItem = ({ item }) => {
    const dishId = item.id;
    const selectedDish = basket.selectedDishes[dishId]; // Fetch selected dish from the store
  
    return (
      <View style={styles.dishContainer}>
         <TouchableOpacity onPress={() => openModal(item.image)}>
            <Image source={item.image} style={styles.dishImage} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.dishTitle}>{item.name}</Text>
          <Text style={styles.dishDescription}>{item.description}</Text>
          <Text style={styles.dishPrice}>Price: ${item.price}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleRemoveFromCart(dishId)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{selectedDish ? selectedDish.quantity : 0}</Text>
          <TouchableOpacity onPress={() => handleAddToCart(dishId)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cartIcon}
          onPress={() => navigation.navigate('cart')}
        >
          <Icon name="shopping-cart" size={24} color="black" />
          {totalCartItems > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{totalCartItems}</Text>
            </View>
          )}
        </TouchableOpacity>
       
      </View>
       <Image
            source={require('../assets/menu.jpg')}
            style={styles.image}
          />
      <Text style={styles.screenTitle}>{title}</Text>
      <FlatList
        data={dishes}
        renderItem={renderDishItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.dishList}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image
              source={selectedImage}
              style={styles.enlargedImage}
              resizeMode="contain"
            />
          )}
        </View>
      </Modal>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 5,
    alignItems: 'center',
  },
  iconContainer: {
    padding: 5,
  },
  cartIcon: {
    padding: 10,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    backgroundColor: 'tomato',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: -8, // Adjust this value for vertical positioning
    right: -8, // Adjust this value for horizontal positioning
  },
  cartBadgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  enlargedImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },

});

export default DishScreen;
