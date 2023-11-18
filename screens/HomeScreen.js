import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';



const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainContainer}> 
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          style={styles.logo}
        />

        <View style={styles.textContainer}>
          <Text style={styles.DTextStyle}>Deliver Now!</Text>
          <Text style={styles.locTextStyle}>Current Location  <Icon name="caret-down" size={20} /></Text>
        </View>
      </View>
      <View>
        <View style={styles.searchContainer}>
          <Icon name="search" size={30} style={styles.searchIcon}/>
          <TextInput style={styles.searchInput} placeholder='Restaurants  and Cuisines' keyboardType='default'/>
        </View>
       
      </View>

      <ScrollView style={styles.bodyContainer}>
        <Categories/>

       
        <FeaturedRow
             id='12367'
            title='Offers Near You'
            description='third description'
            featuredCategory='featured'
        />
        <FeaturedRow
             id='12367'
            title='Featured'
            description='third description'
            featuredCategory='featured'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
      backgroundColor: 'white',
      flex: 1
  },

  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10, // Added margin for separation between the image and texts
  },
  textContainer: {
    flexDirection: 'column', // Adjust the texts layout as column
  },
  DTextStyle: {
    color: 'tomato',
    fontSize: 15
  },
  locTextStyle: {
    fontSize: 20,
    fontWeight: '400'
  },
  searchandInputContainer: {
      flexDirection: 'row',
      paddingBottom: 20
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#bfbfbf',

  },
  searchIcon: {
    color: 'blue',
    padding: 10
  },
  searchInput: {

  },
  bodyContainer: {
    backgroundColor: '#d8d8d8',
    flex: 1,
    
 
  }
});
