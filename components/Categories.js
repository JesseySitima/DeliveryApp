import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect,  } from 'react';
import { ScrollView } from 'react-native-gesture-handler'
import CategoryCard from './CategoryCard'
import axios from 'axios'; 



const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch restaurants data from the backend when the component mounts
    axios.get('http://10.0.2.2:3000/api/categories')
      .then((response) => {
        setCategories(response.data); // Update state with fetched restaurant data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop:10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <CategoryCard
            key={category.id}
            imgurl={category.imgurl}
            title={category.title}
        />
      ))}
      
    </ScrollView>
   
  )
}

export default Categories

const styles = StyleSheet.create({})