import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';


const MenuScreen = () => {
  // Sample menu items
  const initialMenuItems = [
    {
      id: '1',
      title: 'Starters',
      image: require('../assets/soup.jpg'),
      dishes: [
        {
          id: 'dish1',
          name: 'Mushroom soup',
          description: 'Made from natural stock, light chicken, mushroom...',
          image: require('../assets/soup.jpg'),
          price: 10500.00
        },
        {
          id: 'dish2',
          name: 'Greek Salad',
          description: 'Combination of crispy letuce, feta cheese, olives...',
          image:require('../assets/greek-salad.png'),
          price: 9500.00
        },
        {
          id: 'dish3',
          name: 'Beef Salad',
          description: 'Well done cooked beef combined with aromantic herbs and crisp salad...',
          image:require('../assets/beef-salad.png'),
          price: 9500.00
        },
        {
          id: 'dish4',
          name: 'Onion Rings',
          description: 'Slice of onions, coated with butter, bread crumbs, flour ...',
          image:require('../assets/onionRings.jpg'),
          price: 9500.00
        },
        // Add more dish items for Starters
      ]
    },
    {
      id: '2',
      title: 'Mains',
      image: require('../assets/nsima-fish.jpg'),
      dishes: [
        {
          id: 'dish21',
          name: 'Sherry\'s Pork Ribs',
          description: 'Sweet grazed pork ribs of 300-400 grams in garlic, pepper and ...',
          image:require('../assets/porkRib.jpg'),
          price: 19500.00
        },
        {
          id: 'dish22',
          name: 'Batala',
          description: 'Served with kondowole nsima and local vegetables...',
          image:require('../assets/batala.jpg'),
          price: 19500.00
        },
        {
          id: 'dish23',
          name: 'Chambo',
          description: 'Served with nsima or rice and local vegetables...',
          image:require('../assets/batala.jpg'),
          price: 19500.00
        },
        {
          id: 'dish24',
          name: 'Mixed grill',
          description: 'A combination of white and red meat including sausages, chicken fillet, ...',
          image:require('../assets/mix.jpg'),
          price: 39500.00
        },
        {
          id: 'dish25',
          name: 'T-Bone Steak',
          description: 'A specially 300-350grams cut of a Malawi aged prime beef served with, ...',
          image:require('../assets/batala.jpg'),
          price: 18500.00
        },
        // Add more dish items for Mains
      ]
    },
    {
      id: '3',
      title: "Desserts",
      image: require('../assets/cake22.png'),
      dishes: [
        {
          id: 'dish31',
          name: 'Chocolate Cake',
          description: 'Saved with whipped cram from...',
          image:require('../assets/cake22.png'),
          price: 8000.00
        },
        {
          id: 'dish32',
          name: 'Sherry\'s Ice-Cream',
          description: 'A blend of different tasty flavours...',
          image:require('../assets/icecream.jpg'),
          price: 6000.00
        },
        {
          id: 'dish33',
          name: 'Milk-Shakes',
          description: 'A blend of different tasty flavours...',
          image:require('../assets/milkshake.jpg'),
          price: 9500.00
        },
        {
          id: 'dish34',
          name: 'Fruit Salad',
          description: 'A blend of different tasty flavours...',
          image:require('../assets/fruitsalad.jpg'),
          price: 9000.00
        },
        // Add more dish items for Max's Lake Malawi Delicacies
      ]
    },
    {
      id: '4',
      title: 'Specials',
      image: require('../assets/mbalanga.jpg'),
      dishes: [
        {
          id: 'dish81',
          name: 'Pasta Dish 1',
          description: 'Description for Pasta Dish 1',
          image:'one,',
          price: 16.99
        },
        {
          id: 'dish82',
          name: 'Pasta Dish 2',
          description: 'Description for Pasta Dish 2',
          image: 'one,',
          price: 19.99
        },
        // Add more dish items for Pasta Perfecto
      ]
    },
    {
      id: '5',
      title: 'Beverages',
      image: require('../assets/drinks.jpg'),
      dishes: [
        {
          id: 'dish81',
          name: 'Bottled Water',
          description: 'Pure water 300ml',
          image:require('../assets/water.png'),
          price: 1500.00
        },
        {
          id: 'dish82',
          name: 'Minerals',
          description: 'all flavours of soft drinks',
          image:require('../assets/drinks.jpg'),
          price: 1500.00
        },
        {
          id: 'dish83',
          name: 'Juices',
          description: 'A glass of sugar free juice of any flavour',
          image:require('../assets/juices.png'),
          price: 6000.00
        },
        {
          id: 'dish84',
          name: 'Wine',
          description: 'A glass of any desired wine',
          image:require('../assets/wine.jpg'),
          price: 8000.00
        },
        // Add more dish items for Pasta Perfecto
      ]
    },
    {
      id: '6',
      title: 'Vegeterian Specials',
      image: require('../assets/rice-zinziri.jpg'),
      dishes: [
        {
          id: 'dish81',
          name: 'Pasta Dish 1',
          description: 'Description for Pasta Dish 1',
          image:'one,',
          price: 16.99
        },
        {
          id: 'dish82',
          name: 'Pasta Dish 2',
          description: 'Description for Pasta Dish 2',
          image: 'one,',
          price: 19.99
        },
        // Add more dish items for Pasta Perfecto
      ]
    },
    
  ];
  

  // Calculate width for each menu card based on the screen dimensions
  const windowWidth = Dimensions.get('window').width;
  const cardWidth = (windowWidth - 20) / 2 - 10; // Adjust spacing as needed

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMenuItems, setFilteredMenuItems] = useState(initialMenuItems);
  const navigation = useNavigation();

  // Function to filter menu items based on the search query
  const filterMenuItems = (query) => {
    setSearchQuery(query);
    const filteredItems = initialMenuItems.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMenuItems(filteredItems);
  };

  const basket = useSelector((state) => state.basket);
  const [totalCartItems, setTotalCartItems] = useState(0);

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

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="user" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('cart')}>
          <FontAwesome name="shopping-cart" size={24} color="black" />
          {totalCartItems > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{totalCartItems}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const renderMenuItem = ({ item }) => {
    const handleItemClick = () => {
        // Perform actions when an item is clicked
        console.log(`Clicked on ${item.title}`);
        navigation.navigate("Dishes", { title: item.title, dishes: item.dishes })
      }; 
    return (
      <TouchableOpacity onPress={handleItemClick}>
        <View style={[styles.menuCard, { width: cardWidth }]}>
            <Image source={item.image} style={styles.menuImage} />
            <Text style={styles.menuTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>  
      
    );
  };

  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {renderHeader()}
      <View style={styles.container}>
      <View style={styles.firstView}>
          <Image
            source={require('../assets/menu.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.secondView}>
          <View style={styles.searchContainer}>
            <Text style={styles.categoryText}>Menu Categories</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={filterMenuItems}
            />
          </View>
          <FlatList
            data={filteredMenuItems} 
            renderItem={renderMenuItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.menuList}
            scrollEnabled={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  firstView: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondView: {
    flex: 3,
    
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
  },
  menuList: {
    paddingTop: 10,
  },
  menuCard: {
   
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    marginRight: 20
  },
  menuImage: {
    width: '100%',
    height: 150,
    borderRadius: 999,
    marginBottom: 5,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
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
});

export default MenuScreen;
