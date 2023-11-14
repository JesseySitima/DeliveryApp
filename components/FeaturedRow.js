import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Icon name="arrow-right" size={25} style={styles.arrowIcon}/>
        </View>
        <Text>{description}</Text>
        <ScrollView horizontal
             contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
        >
        <RestaurantCard
             id={123}
             imgurl='https://links.papareact.com/wru'
             title='Jebebe foods'
             rating={4.5}
             address='chilobwe center'
             short_description='test description'
             dishes={[]}
             long={9}
             lat={7}
        
        />
        </ScrollView>
    </View>
    
  )
}

export default FeaturedRow

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '300'
    },
    arrowIcon: {
        color: 'skyblue'
    }
})