import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'

const CategoryCard = ({ imgurl, title }) => {
  return (
    <View>
        <TouchableOpacity style={styles.container}>
            <Image
               source={{
                uri: imgurl,
              }}
              style={styles.img}
            />
            <Text style={styles.titleStyle}>{title}</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    container: {
        marginRight:10,
        position: 'relative'
    },

    img: {
        width: 200,
        height: 200,
    },

    titleStyle: {
       textAlign:'center',
        fontSize:20,
        color:'black',
    }
})