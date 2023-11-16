import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect,  } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import RestaurantCard from './RestaurantCard';
import axios from 'axios'; 



const FeaturedRow = ({ title, description, featuredCategory }) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        // Fetch restaurants data from the backend when the component mounts
        axios.get('http://10.0.2.2:3000/api/restaurants')
          .then((response) => {
            setRestaurants(response.data); // Update state with fetched restaurant data
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Icon name="arrow-right" size={25} style={styles.arrowIcon}/>
        </View>
        <Text style={styles.descStyle}>{description}</Text>
        <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id} // Make sure to provide a unique key for each item in the list
            id={restaurant.id}
            imgurl={restaurant.imgurl}
            title={restaurant.title}
            rating={restaurant.rating}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
    
  )
}

export default FeaturedRow

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingLeft: 15
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '300'
    },
    arrowIcon: {
        color: 'skyblue'
    },
    descStyle: {
        paddingLeft: 15
    }
})