import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketItemsWithId, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Currency from 'react-currency-formatter';

const BasketPopUp = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal)

  if (items.length === 0) return null;  

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('basket')} style={styles.semiContainer}>
            <Text style={styles.itemsStyle}>{items.length} items</Text>
            <Text>View Basket</Text>
            <Text>
                <Currency quantity={basketTotal} currency='MWK'/>
            </Text>

        </TouchableOpacity>
    
    </View>
  )
}

export default BasketPopUp

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 10, // 10 units up from the bottom
        left: 0,
        right: 0,
        zIndex: 50, // Set z-index to 50
        backgroundColor: '#66cc99', // Example background color
       padding: 15,
       borderRadius: 15,
      },
      semiContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Use justifyContent for horizontal spacing
        alignItems: 'center',
      },
      
})