import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[items.id] = results[items.id] || []).push(item);
            return results;
        }, {});
        setGroupedItemsInBasket(groupedItems);
    }, [items]);

  return (
    <View style={styles.container}>
      <View style={styles.semiContainer}>
        <View style={styles.cartContainer}>
            <Icon name="shopping-cart" size={50} style={styles.starIcon}/>
            <Text>{restaurant.title}</Text>
        </View>
      </View>
      <View style={styles.logoContainer}>
            <Image
                source={{
                    uri: 'https://cdn1.vectorstock.com/i/1000x1000/66/40/motorcycle-delivery-food-isolated-icon-vector-10256640.jpg',
                }}
                style={styles.logo}
                />
                <Text style={styles.text1}>Deliver in 50-70 min</Text>
                <Text style={styles.text2}>Change</Text>
      </View>

      <ScrollView>
       
      </ScrollView>
    </View>
  )
}

export default BasketScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cartContainer: {
        
        alignItems: 'center'
    },
    semiContainer: {
       backgroundColor: 'white',
    
    },
    logoContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignContent: 'space-between',
       
    },
    logo: {
        width: 50,
        height: 50,
       
       
      },
    text1: {
       
        padding: 20
    },
    text2: {
        
        padding: 20
    }
})