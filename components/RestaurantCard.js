import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({
    id,
    imgurl,
    title,
    rating,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.restaurantContainer}
        onPress={() => {
          navigation.navigate('restaurant', {
            id,
            imgurl,
            title,
            rating,
            address,
            short_description,
            dishes,
            long,
            lat,
          })
        }}
    >
         <Image
            source={{
              uri: imgurl,
            }}
            style={styles.imageStyle}
         />
         <View>
          <Text>{title}</Text>
          <View style={styles.ratingContainer}>
              <Icon name="star" size={20} style={styles.starIcon}/>
              <Text>{rating}</Text>
          </View>

          <View style={styles.locationContainer}>
              <Icon name="map-marker" size={20} style={styles.locationIcon}/>
              <Text>Nearby {address}</Text>
          </View>
         </View>
    </TouchableOpacity>

  )
}

export default RestaurantCard

const styles = StyleSheet.create({
    restaurantContainer:{
        borderRadius: 10,
        padding: 16,
        marginBottom: 20,
        alignItems: 'center',
        borderWidth: 1, // Add border width
        borderColor: 'lightgray', // Specify border color
        paddingHorizontal: 10, // Add horizontal padding for the container
        marginTop: 10, // Add margin to separate from the logo and text
        marginLeft:10,
        marginRight: 10,
    },

    imageStyle: {
      height: 200,
      width: 200
    },
    starIcon: {
        paddingRight:10,
        opacity: 0.5
    },
    ratingContainer: {
      flexDirection: 'row',
      
    },
    locationContainer: {
      flexDirection: 'row'
    },
    locationIcon: {
      paddingRight:10,
      opacity: 0.5
    }

})