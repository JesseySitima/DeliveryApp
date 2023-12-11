import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const LandingPage = ({ navigation }) => {
  // Function to navigate to the main app screen
  const navigateToApp = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/maxlogo.jpg')} // Replace with your app's logo
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to Max and Sherry.</Text>
      <Text style={styles.subtitle}>Dine with us and experience great and authentic yummy meals in our cozy and intimate dining spaces.</Text>
      
      <TouchableOpacity style={styles.getStartedButton} onPress={navigateToApp}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 30,
    textAlign: 'center',
    color: '#666666',
  },
  getStartedButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LandingPage;
