import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList, Dimensions, TextInput, TouchableOpacity } from 'react-native';

const MenuScreen = () => {
  // Sample menu items
  const initialMenuItems = [
    {
      id: '1',
      title: 'Starters',
      image: require('../assets/nsima-chicken.jpg'),
      dishes: [
        {
          id: 'dish1',
          name: 'Mushroom soup',
          description: 'Description for Starter 1',
          image: require('../assets/soup.jpg'),
          price: 9.99
        },
        {
          id: 'dish2',
          name: 'Greek Salad',
          description: 'Description for Starter 2',
          image:require('../assets/greek-salad.png'),
          price: 12.99
        },
        {
          id: 'dish3',
          name: 'Beef Salad',
          description: 'Description for Starter 2',
          image:require('../assets/beef-salad.png'),
          price: 12.99
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
          name: 'Main Course 1',
          description: 'Description for Main Course 1',
          image: 'one,',
          price: 15.99
        },
        {
          id: 'dish22',
          name: 'Main Course 2',
          description: 'Description for Main Course 2',
          image: 'one,',
          price: 18.99
        },
        // Add more dish items for Mains
      ]
    },
    {
      id: '3',
      title: "Max's Lake Malawi Delicacies",
      image: require('../assets/prawns.jpg'),
      dishes: [
        {
          id: 'dish31',
          name: 'Delicacy 1',
          description: 'Description for Delicacy 1',
          image: 'one,',
          price: 20.99
        },
        {
          id: 'dish32',
          name: 'Delicacy 2',
          description: 'Description for Delicacy 2',
          image: 'one,',
          price: 22.99
        },
        // Add more dish items for Max's Lake Malawi Delicacies
      ]
    },
    {
      id: '8',
      title: 'Pasta Perfecto',
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
    {
      id: '4',
      title: 'Sea Foods',
      image: 'one,',
      dishes: [
        {
          id: 'dish41',
          name: 'Seafood 1',
          description: 'Description for Seafood 1',
          image: 'one,',
          price: 25.99
        },
        {
          id: 'dish42',
          name: 'Seafood 2',
          description: 'Description for Seafood 2',
          image: 'one,',
          price: 28.99
        },
        // Add more dish items for Sea Foods
      ]
    },
    {
      id: '5',
      title: 'Kids Table',
      image: require('../assets/soup.jpg'),
      dishes: [
        {
          id: 'dish1',
          name: 'Kids Meal 1',
          description: 'Description for Kids Meal 1',
          image: 'one,',
          price: 10.99
        },
        {
          id: 'dish2',
          name: 'Kids Meal 2',
          description: 'Description for Kids Meal 2',
          image: 'one,',
          price: 12.99
        },
        // Add more dish items for Kids Table
      ]
    },
    {
      id: '6',
      title: 'Vegetarians',
      image: require('../assets/sausage.jpg'),
      dishes: [
        {
          id: 'dish1',
          name: 'Vegetarian Dish 1',
          description: 'Description for Vegetarian Dish 1',
          image: 'one,',
          price: 14.99
        },
        {
          id: 'dish2',
          name: 'Vegetarian Dish 2',
          description: 'Description for Vegetarian Dish 2',
          image: 'one,',
          price: 16.99
        },
        // Add more dish items for Vegetarians
      ]
    },
    {
      id: '7',
      title: 'Best Desserts',
      image: require('../assets/staters.jpg'),
      dishes: [
        {
          id: 'dish1',
          name: 'Dessert 1',
          description: 'Description for Dessert 1',
          image: 'one,',
          price: 8.99
        },
        {
          id: 'dish2',
          name: 'Dessert 2',
          description: 'Description for Dessert 2',
          image: 'one,',
          price: 10.99
        },
        // Add more dish items for Best Desserts
      ]
    },
    // Add more menu items as needed
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

  const renderMenuItem = ({ item }) => {
    const handleItemClick = () => {
        // Perform actions when an item is clicked
        console.log(`Clicked on ${item.title}`);
        navigation.navigate("Dishes", { dishes: item.dishes })
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
});

export default MenuScreen;
