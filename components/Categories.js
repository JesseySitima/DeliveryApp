import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CategoryCard from './CategoryCard'


const localImage = require('../assets/food1.jpg');
const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop:10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
      
        <CategoryCard imgurl={localImage} title="testing1"/>
        <CategoryCard imgurl={localImage} title="testing2"/>
        <CategoryCard imgurl={localImage} title="testing3"/>
        <CategoryCard imgurl={localImage} title="testing3"/>
        <CategoryCard imgurl={localImage} title="testing3"/>
        <CategoryCard imgurl={localImage} title="testing3"/>
        <CategoryCard imgurl={localImage} title="testing3"/>
    </ScrollView>
   
  )
}

export default Categories

const styles = StyleSheet.create({})