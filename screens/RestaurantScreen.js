import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';

const RestaurantScreen = () => {
    const {
        params: {
            id,
            imgurl,
            title,
            rating,
            address,
            short_description,
            dishes,
            long,
            lat,
        },
    } = useRoute();
    return (
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={{ uri: imgurl }}
              style={styles.imageStyle}
              resizeMode="cover" // To cover the entire space of the Image component
            />
          </View>

          <View style={styles.titleContainer}>
            <View>
                <Text style={styles.titleStyle}>{title}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={20} style={styles.starIcon}/>
              <Text style={styles.rating}>{rating}</Text>
              <Icon name="map-marker" size={20} style={styles.locationIcon}/>
              <Text>Nearby {address}</Text>
          </View>
          <View style={styles.descConainer}>
            <Text>{short_description}</Text>
          </View>
         
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuText}>Menu</Text>
          </View>
          
        </ScrollView>
      );
    };
    
    export default RestaurantScreen;
    
    const windowWidth = Dimensions.get('window').width;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      imageStyle: {
        width: windowWidth, // Set width to the device's width
        height: 200, // You can adjust the height as per your requirement
      },
      titleContainer: {
        backgroundColor: 'white',
        padding: 20,
      },
      titleStyle: {
        fontSize: 20,
        fontWeight: '500'
      },
      ratingContainer: {
        flexDirection: 'row',
      },
      starIcon: {
        paddingRight:10,
        opacity: 0.5,
        color: 'green'
    },
    locationIcon: {
        paddingRight:10,
        opacity: 0.5,
        color: 'red'
      },
    rating: {
        paddingRight: 10
    },
    descConainer: {
        paddingTop: 10
    },
    menuTextContainer: {
        backgroundColor: '#1d9485',
        padding: 20,
    },
    menuText: {
        fontSize: 18,
        fontWeight: '400'
    }
    });